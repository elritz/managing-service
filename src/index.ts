import server from "./server";

console.info("PID", process.pid);
console.info(process.env.SERVICE_NAME, process.env.PORT);

export default server;
