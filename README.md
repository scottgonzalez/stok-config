# Stok Config [![Build Status](https://travis-ci.org/clipper-digital/stok-config.svg?branch=master)](https://travis-ci.org/clipper-digital/stok-config)

Stok Config provides a method for loading configuration values form environment variables for [twelve-factor apps](http://12factor.net/).





## Example

```js
const http = require('http')
const loadConfiguration = require('stok-config')

const config = loadConfiguration({
  port: {
    env: 'PORT',
    default: 3000
  }
})

const server = http.createServer((request, response) => {
  response.end('Hello!')
})

server.listen(config.port)
```





## API

### `loadConfiguration(config) Returns: Object`

Loads configuration from environment variables and the `.env` file and stores it in a structured object.

* `config` (Object): A mapping between a structured config object and the associated env vars.

In the following example, `web.port` will have the value of the `PORT` env var. Similarly, `db.host`, `db.user`, and `db.password` will have the values of the `DB_HOST`, `DB_USER`, and `DB_PASSWORD` env vars, respectively. `db.port` will have the value of the `DB_PORT` env var, but if the env var doesn't exist, the default value of `3306` will be used.

```js
const config = loadConfiguration({
  web: {
    port: 'PORT'
  },
  db: {
    host: 'DB_HOST',
    port: {
      env: 'DB_PORT',
      default: 3306
    },
    user: 'DB_USER',
    password: 'DB_PASSWORD'
  }
})
```





## License

Copyright Stok Config contributors.
Released under the terms of the ISC license.

[Stok.loadConfiguration()]: #stokloadconfigurationconfig-returns-object
