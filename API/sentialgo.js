const sentiment = require('sentiment')

const result = (text) => {
  const scoreValue = sentiment(text)
  let scoreFinal = scoreValue.comparative * 100
  scoreFinal = scoreFinal.toFixed(2)

  return {
    totalScore: scoreValue.score,
    score: scoreFinal,
  }
}

module.exports = result
