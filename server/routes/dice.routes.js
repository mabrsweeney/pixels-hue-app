const express = require('express')

const { readJSON, writeToJSON } = require('../utils')
const { DiceFilePath } = require('../const')

const router = express.Router()

router.get('/', (req, res) => {
  const settings = readJSON(DiceFilePath)
  res.send(settings)
})

router.post('/', (req, res) => {
  const newSettings = req.body

  writeToJSON(DiceFilePath, {
    rules: newSettings.hue_bridge_ip
  })

  res.send({})
})

module.exports = router
