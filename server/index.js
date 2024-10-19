const express = require('express')

const diceRoutes = require('./routes/dice.routes')
const settingsRoutes = require('./routes/settings.routes')
const rollRoutes = require('./routes/roll.routes')
const hueRoutes = require('./routes/hue.routes')

const app = express()
app.use(express.json())
const port = 5000

app.use('/api/dice', diceRoutes)
app.use('/api/settings', settingsRoutes)
app.use('/api/roll', rollRoutes)
app.use('/api/hue', hueRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
