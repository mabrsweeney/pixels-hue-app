const fs = require('fs')

const writeToJSON = (filePath, obj) => {
  return fs.writeFileSync(filePath, JSON.stringify(obj))
}

const readJSON = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath))
}

const validateHueConfig = (obj) => {
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

  return false // Object doesn't match the required shape
}

module.exports = {
  writeToJSON,
  readJSON,
  validateHueConfig
}
