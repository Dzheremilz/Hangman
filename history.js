const fs = require('fs')

exports.addHistory = (word, score, player) => {
  let newHistory = `Word: ${word}${' '.repeat(20 - word.length)}- score: ${score}${score < 10 ? '  ' : ' '}- by: ${player}\n`
  fs.appendFileSync('history.txt', newHistory)
  let history = fs.readFileSync('history.txt', 'utf-8')
  let historyArr = history.split('\n')
  if (historyArr.length > 11) {
    historyArr.shift()
    history = historyArr.join('\n')
    fs.writeFileSync('history.txt', history)
  }
}

exports.showHistory = () => {
  if (!fs.existsSync('history.txt')) {
    return 'There is no history file\n'
  }
  let history = fs.readFileSync('history.txt', 'utf-8')
  if (history.split('').length === 0) {
    return 'History is empty\n'
  }
  return history
}

exports.resetHistory = () => {
  fs.writeFileSync('history.txt', '')
}