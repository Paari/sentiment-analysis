const sentiment = require('sentiment')

const result = (text) => {
  const scoreValue = sentiment(text)
  return {
    score: scoreValue.score,
    value: scoreValue
  }
}

module.exports = result
