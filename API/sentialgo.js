const sentiment = require('sentiment')

/**
 * [result description]
 * @param  {[string]} text [description]
 * @return {[object]}      [description]
 */
const result = (text) => {
  const scoreValue = sentiment(text)
  let scoreFinal = scoreValue.comparative * 500
  scoreFinal = scoreFinal.toFixed(2)

  return {
    totalScore: scoreValue.score,
    score: scoreFinal,
  }
}

module.exports = result
