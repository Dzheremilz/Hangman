const { readFileSync, writeFileSync } = require('fs')

//TODO Check existance / create if missing

exports.checkScore = (player, score) => {
  let scoreJson
  try {
    scoreJson = readFileSync('./score.json', 'utf-8')
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
  const scoreObj = JSON.parse(scoreJson)
  if (player in scoreObj && scoreObj[player] <= score) {
    console.log('Your previous score was equal or higher')
  } else {
    scoreObj[player] = score
    scoreJson = JSON.stringify(scoreObj)
    writeFileSync('./score.json', scoreJson)
    console.log('Update with your new best score')
  }
}

//TODO: podium

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
  let highPlayer = Object.keys(scoreObj).filter(key => scoreObj[key] === highScore)
  console.log(`The High Score is: ${highScore} by ${highPlayer.join(', ')}`)
}
