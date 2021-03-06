const dotenv = require('dotenv')
const hasOwnProperty = Object.prototype.hasOwnProperty

function loadConfiguration (options) {
  const configuration = {}

  dotenv.config({ silent: true })

  Object.keys(options).forEach((option) => {
    let value = options[option]
    let defaultValue = null

    if (typeof value === 'object') {
      // Nested config value, recurse
      if (!hasOwnProperty.call(value, 'env') || !hasOwnProperty.call(value, 'default')) {
        value = loadConfiguration(value)

      // Config value with a default value
      } else {
        defaultValue = value.default
        value = process.env[value.env]
      }

    // Config value with no default value
    } else {
      value = process.env[value]
    }

    configuration[option] = value || defaultValue
  })

  return configuration
}

module.exports = loadConfiguration
