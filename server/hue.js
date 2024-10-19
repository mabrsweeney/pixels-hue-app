const axios = require('axios')
const https = require('https')
const { readJSON } = require("./utils");
const { SettingsFilePath } = require("./const");

const getLights = async () => {
  const settings = readJSON(SettingsFilePath)

  const response = await axios.get(`https://${settings.hue_bridge_ip}/clip/v2/resource/device`, {
    headers: {
      'hue-application-key': settings.hue_username
    },
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
  })

  return response.data
}

module.exports = {
  getLights
}
