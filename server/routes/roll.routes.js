const express = require('express')

const axios = require('axios')
const https = require('https')
const { readJSON } = require('../utils')
const { SettingsFilePath } = require('../const')
const { getLights } = require('../hue')

const router = express.Router()

router.post('/', async (req, res) => {
  const settings = readJSON(SettingsFilePath)
  const { face } = req.body
  const lights = await getLights()

  res.send({})
})

module.exports = router
