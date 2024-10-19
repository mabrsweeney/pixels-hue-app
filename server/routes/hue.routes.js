const express = require('express')

const { getLights } = require('../hue')

const router = express.Router()

router.get('/lights', async (req, res) => {
  const lights = await getLights()
  res.send(lights.data)
})

module.exports = router
