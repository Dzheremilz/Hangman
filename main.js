const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { randomWord } = require('./word')
const { checkScore, higherScore } = require('./score')
const { game } = require('./game')
const { credits } = require('./credits')
const { addHistory, showHistory } = require('./history')
const { initialisation, settings } = require('./settings')

let options = JSON.parse(initialisation())

if (process.argv[2] === '-h' || process.argv[2] === '--highscore') {
  higherScore()
  process.exit(0)
}

// Menu
let menu = true
while (menu) {
  console.log(options.color ? chalk.keyword(options.color)(`%s`) : `%s`, '====MENU====\n\nChoose an option number:')
  let tempQ1 = `[1] Play\n[2] Highscore\n[3] History\n[4] Settings\n[5] Credits\n[0] Exit\n`
  let menuChoice = readlineSync.keyIn(options.color ? chalk.keyword(options.color)(tempQ1) : tempQ1, { hideEchoBack: true, mask: '', limit: '$<0-5>' })
  menuChoice = Number(menuChoice)

  switch (menuChoice) {
    case 1:
      console.log(options.color ? chalk.keyword(options.color)(`%s`) : `%s`, '====Play====')
      //console.log(word) if you want to know the word
      const word = randomWord(options.category)

      let gameObj = game(word, options.color)
      //TODO: gestion du score, à améliorer ~
      addHistory(word, gameObj.score, gameObj.player)
      if (gameObj.score > 0) {
        checkScore(gameObj.player, gameObj.score)
      }
      console.log()
      break
    case 2:
      console.log(options.color ? chalk.keyword(options.color)(`%s`) : `%s`, '==Highscore==\n')
      higherScore()
      console.log()
      break
    case 3:
      console.log(options.color ? chalk.keyword(options.color)(`%s`) : `%s`, '===History===\n')
      let history = showHistory()
      console.log(history)
      break
    case 4:
      options = settings()
      console.log()
      break
    case 5:
      console.log(options.color ? chalk.keyword(options.color)(`%s`) : `%s`, '===Credits===\n')
      credits()
      console.log()
      break
    case 0:
      console.log(options.color ? chalk.keyword(options.color)(`%s`) : `%s`, '====Exit====\n')
      menu = false
  }
}
