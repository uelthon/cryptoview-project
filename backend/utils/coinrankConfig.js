require('dotenv').config()

const token = process.env.ACCESS_TOKEN

const options = {
  headers: {
    'x-access-token': token
  }
}

module.exports = options
