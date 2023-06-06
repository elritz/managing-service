import { setImmediate } from "timers";
import { promisify } from "util";

const setImmediateP = promisify(setImmediate);

const mapItem = async (mapFn, currentValue, index, array) => {
  try {
    await setImmediateP();
    return {
      status: "fulfilled",
      value: await mapFn(currentValue, index, array),
    };
  } catch (reason) {
    return {
      status: "rejected",
      reason,
    };
  }
};

const worker = async (id, gen, mapFn, result) => {
  for (let [currentValue, index, array] of gen) {
    result[index] = await mapItem(mapFn, currentValue, index, array);
  }
};

function* arrayGenerator(array: []) {
  for (let index = 0; index < array.length; index++) {
    const currentValue = array[index];
    yield [currentValue, index, array];
  }
}
const mapAllSettled = async (arr, mapFn, limit = arr.length) => {
  const result = [];

  if (arr.length === 0) {
    return result;
  }

  const gen = arrayGenerator(arr);

  limit = Math.min(limit, arr.length);

  const workers = new Array(limit);
  for (let i = 0; i < limit; i++) {
    workers.push(worker(i, gen, mapFn, result));
  }
  await Promise.allSettled(workers);
  return result;
};

export default mapAllSettled;
