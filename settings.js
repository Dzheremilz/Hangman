const fs = require('fs')
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { resetHistory } = require('./history')

const reset = () => {
  let byDefault = { color: false, category: 'hangman.txt' }
  let json = JSON.stringify(byDefault, null, 1)
  fs.writeFileSync('settings.json', json)
  return byDefault
}

const initialisation = () => {
  if (!fs.existsSync('settings.json')) {
    reset()
  }
  return fs.readFileSync('settings.json', 'utf-8')

}

exports.settings = () => {
  let jsonStr = initialisation()
  let options = JSON.parse(jsonStr)
  let menu = true
  while (menu) {
    console.log(options.color ? chalk.keyword(options.color)(`%s`) : `%s`, '==Settings==\n')
    let tempQ1 = '[1] Color\n[2] Word category\n[3] Reset settings\n[4] Reset history\n[0] Exit settings\n'
    let menuChoice = readlineSync.keyIn((options.color ? chalk.keyword(options.color)(tempQ1) : tempQ1), { hideEchoBack: true, mask: '', limit: '$<0-4>' })
    menuChoice = Number(menuChoice)
    while (menuChoice === 1) {
      console.log(options.color ? chalk.keyword(options.color)(`%s`) : `%s`, '===Color===\n')
      let tempQ2 = chalk.keyword('yellow')('[1] Yellow\n') + chalk.keyword('blue')('[2] Blue\n') + chalk.keyword('magenta')('[3] Magenta\n') + chalk.keyword('cyan')('[4] Cyan\n')
      let tempQ2b = '[0] Exit Color Menu\n'
      let colorChoice = readlineSync.keyIn(((options.color ? chalk.keyword(options.color)(tempQ2) : tempQ2) + ('[5] Default\n') + (options.color ? chalk.keyword(options.color)(tempQ2b) : tempQ2b)), { hideEchoBack: true, mask: '', limit: '$<0-5>' })
      colorChoice = Number(colorChoice)
      switch (colorChoice) {
        case 1:
          options.color = 'yellow'
          break
        case 2:
          options.color = 'blue'
          break
        case 3:
          options.color = 'magenta'
          break
        case 4:
          options.color = 'cyan'
          break
        case 5:
          options.color = false
          break
        case 0:
          menuChoice = -1
          jsonStr = JSON.stringify(options, null, 1)
          fs.writeFileSync('settings.json', jsonStr)
          break
      }
    }
    while (menuChoice === 2) {
      console.log(options.color ? chalk.keyword(options.color)(`%s`) : `%s`, '=Word Category=\n')
      let tempQ3 = '[1] Super-Heroes\n[2] Fruits and vegetables\n[3] Default\n[0] Exit Category Menu\n'
      let categoryChoice = readlineSync.keyIn((options.color ? chalk.keyword(options.color)(tempQ3) : tempQ3), { hideEchoBack: true, mask: '', limit: '$<0-3>' })
      categoryChoice = Number(categoryChoice)
      switch (categoryChoice) {
        case 1:
          options.category = 'heroes.txt'
          console.log()
          break
        case 2:
          options.category = 'fruits.txt'
          console.log()
          break
        case 3:
          options.category = 'hangman.txt'
          console.log()
          break
        case 0:
          menuChoice = -1
          jsonStr = JSON.stringify(options, null, 1)
          fs.writeFileSync('settings.json', jsonStr)
          break
      }
    }
    if (menuChoice === 3) {
      options = reset()
    }
    if (menuChoice === 4) {
      let tempQ4 = `Are you sure you want to reset your game history ?`
      if (readlineSync.keyInYN(tempQ4)) {
        resetHistory()
        console.log('Your game history has been reset\n')
      } else {
        console.log('Canceled\n')
      }
      menuChoice = -1
    }
    if (menuChoice === 0) {
      menu = false
    }
  }

  return options
}

exports.initialisation = initialisation