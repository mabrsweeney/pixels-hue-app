const fs = require('fs')

const writeToJSON = (filePath, obj) => {
    return fs.writeFileSync(filePath, JSON.stringify(obj))
}

const readJSON = (filePath) => {
    return fs.readFileSync(filePath)
}

module.exports = {
    writeToJSON,
    readJSON
}