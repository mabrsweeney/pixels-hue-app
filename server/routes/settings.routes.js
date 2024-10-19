const express = require('express')

const { readJSON, writeToJSON, validateHueConfig } = require('../utils')
const { SettingsFilePath } = require('../const')

const router = express.Router()

router.get('/', (req, res) => {
  const settings = readJSON(SettingsFilePath)
  console.log(settings)
  res.send(settings)
})

router.post('/', (req, res) => {
  const newSettings = req.body

  if (!validateHueConfig(newSettings)) {
    res.send({})
  }

  writeToJSON(SettingsFilePath, {
    hue_bridge_ip: newSettings.hue_bridge_ip,
    hue_username: newSettings.hue_username,
    hue_group_name: newSettings.hue_group_name
  })

  res.send({ status: 'ok' })
})

module.exports = router
