const { execute } = require('@getvim/execute')
const dotenv = require('dotenv')
const { gzip, ungzip } = require('node-gzip')
const zlib = require('zlib')
const fs = require('fs')
const compress = require('gzipme')
let envPath = ''
dotenv.config({ path: envPath })

const database = process.env.POSTGRESS_DATABASE

const date = new Date()

const currentDate = `${date.getFullYear()}.${
  date.getMonth() + 1
}.${date.getDate()}.${date.getHours()}.${date.getMinutes()}`
const fileName = `db-${currentDate}.tar`

const restore = () => {
  fs.readdir('./db/backups/', async (err, files) => {
    execute(`pg_restore -d ${database} -a './db/backups/${files.at(-3)}'`)
      .then(async () => {
        console.log('Storage database restored from: ', files.at(-1))
      })
      .catch((err) => {
        console.log('Error executing pg_restore: ', err)
      })
  })
}

restore()
