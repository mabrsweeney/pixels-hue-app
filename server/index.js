/* eslint-disable prettier/prettier */
const express = require('express')
const fs = require('fs')
const axios = require('axios')
const winston = require('winston')
let multer = require('multer');
const { writeToJSON, readJSON } = require('./utils')
const { SettingsFilePath, DiceFilePath } = require('./const')
let upload = multer();

const app = express()
app.use(express.json())
const port = 5000

const logger = winston.createLogger({
  level: 'info', // Default logging level
  format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message }) => {
          return `${timestamp} [${level.toUpperCase()}]: ${message}`;
      })
  ),
  transports: [
      // Log to a file
      new winston.transports.File({ filename: 'logs/server.log' }),
      // Optionally log to the console
      new winston.transports.Console()
  ]
});


function validateHueConfig(obj) {
  // Check if the object is not null and has all the required properties
  if (
    typeof obj === 'object' &&
    obj !== null &&
    'hue_bridge_ip' in obj &&
    'hue_username' in obj &&
    'hue_group_name' in obj
  ) {

    return (
      typeof obj.hue_bridge_ip === 'string' &&
      typeof obj.hue_username === 'string' &&
      typeof obj.hue_group_name === 'string'
    )
  }

  return false; // Object doesn't match the required shape
}

app.get('/api/dice', (req, res) => {
  const settings = readJSON(DiceFilePath)
  res.send(settings)
})

app.post('/api/dice', upload.fields([]), (req, res) => {
  const newSettings = req.body

  writeToJSON(DiceFilePath, {
    rules: newSettings.hue_bridge_ip,
  })

  res.send({})
})

app.get('/api/settings', (req, res) => {
  const settings = readJSON(SettingsFilePath)
  res.send(settings)
})

app.post('/api/settings', upload.fields([]), (req, res) => {
  const newSettings = req.body

  if (!validateHueConfig(newSettings)) {
    res.send({})
  }

  writeToJSON(SettingsFilePath, {
    hue_bridge_ip: newSettings.hue_bridge_ip,
    hue_username: newSettings.hue_username,
    hue_group_name: newSettings.hue_group_name
  })

  res.send({})
})

app.post('/api/roll', async (req, res) => {
  const { face } = req.body
  const baseHueURL = 'http://192.168.86.32/api/vyCCImNczaSNKXjy2KTCLpDTckI2C9Ojku-udaQb'
  const groupLightsURL = `${baseHueURL}/resource/light`
  const result = await axios.get(groupLightsURL)
  logger.info(JSON.stringify(result.data))
  // await axios.put(baseHueURL)


  res.send({})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
