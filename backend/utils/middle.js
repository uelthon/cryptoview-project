const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('Params', request.params)
  console.log('Query', request.query)
  console.log('---')
  next()
}

const unknownEndpoint = (request, response, next) => {
  response.status(404).json({ error: 'unknown endpoint' })
  next()
}

const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: 'username already exists' })
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({ error: 'invalid token' })
  }
  console.log(error)
  next(error)
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
}
