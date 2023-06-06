const { execute } = require('@getvim/execute')
const { gzip, ungzip } = require('node-gzip')
const fs = require('fs')
// const FormData = require('form-data');
// const cron = require('node-cron')
const compress = require('gzipme')
const dotenv = require('dotenv')
let envPath = ''
dotenv.config({ path: envPath })

const username = process.env.POSTGRESS_USER
const database = process.env.POSTGRESS_DATABASE
const dbHost = process.env.POSTGRESS_HOST
const dbPort = process.env.POSTGRESS_PORT

const date = new Date()
const currentDate = `${date.getFullYear()}.${
  date.getMonth() + 1
}.${date.getDate()}.${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`
const fileName = `database-backup-${currentDate}.tar`
const fileNameGzip = `${fileName}.gz`

const backup = () => {
  fs.readdir('./db/backups/', (err, files) => {
    if (files.length > 5) {
      console.log(`Backuped database @ ${files[0]}`)
      fs.unlinkSync(`./db/backups/${files[0]}`)
    }
  })
  execute(
    `pg_dump -p ${dbPort} -h ${dbHost} -U ${username} -d ${database} -f './db/backups/${fileName}' -F t`,
  )
    .then(async () => {
      fs.unlinkSync(fileName)
      await compress(fileName)
      fs.writeFileSync(`./db/backups/${fileName}`, fileName, ({ err }) => {
        if (err) {
          console.log('Backup File is created successfully.')
          throw err
        }
        console.log('Backup file created successfully.')
      })
      console.log('storage database saved')
    })
    .catch((err) => {
      console.log(err)
    })
}

backup()
