const { readFileSync, writeFileSync } = require('fs')

exports.checkScore = (player, score) => {
  let scoreJson
  try {
    scoreJson = readFileSync('./score.json', 'utf-8')
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
  const scoreObj = JSON.parse(scoreJson)
  if (player in scoreObj && scoreObj[player] < score) {
    console.log('Your previous score was higher')
  } else {
    scoreObj[player] = score
    scoreJson = JSON.stringify(scoreObj)
    writeFileSync('./score.json', scoreJson)
    console.log('Update with your new score')
  }
}

exports.higherScore = () => {
  let scoreJson
  try {
    scoreJson = readFileSync('./score.json', 'utf-8')
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
  const scoreObj = JSON.parse(scoreJson)
  let scoreArr = Object.values(scoreObj)
  let highScore = Math.min(...scoreArr)
  let highPlayer = Object.keys(scoreObj).find(key => scoreObj[key] === highScore)
  console.log(`The High Score is: ${highScore} by ${highPlayer}`)
}
