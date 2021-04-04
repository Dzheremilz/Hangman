const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { hangingState } = require('./hangmanAscii')


exports.game = (word, color) => {

  word = word.toLowerCase()
  let isSearching = true
  let guessArray = []
  let nbTry = 7
  let hangState = 0
  let score = 0

  let wordArr = word.split('')
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] >= 'a' && wordArr[i] <= 'z') {
      wordArr[i] = '_'
    }
  }
  let hiddingWord = wordArr.join(' ')

  let playerQuestion = 'Enter your name: '
  const player = readlineSync.question(color ? chalk.keyword(color)(playerQuestion) : playerQuestion)

  while (isSearching) {
    console.log()
    console.log(color ? chalk.keyword(color)(`%s`) : `%s`, `Try to guess: ${hiddingWord} ${guessArray.length > 0 ? `\nAlready use: ${guessArray.join(' ')}` : ''}`)
    const answerColor = 'Choose one letter or ! to guess the word: '
    const answer = readlineSync.keyIn(color ? chalk.keyword(color)(answerColor) : answerColor, { limit: '$<a-z>!0' }).toLowerCase()
    score++
    // TODO: possibilite de rentre le bon mot directement
    if (answer === '0') {
      console.log('\n====EXIT====')
      process.exit(0)
    }
    if (answer === '!') {
      const wordGuess = readlineSync.question('Guess the word: ').toLowerCase()
      if (wordGuess === word || wordGuess === 'thereisnocowlevel') {
        console.log(chalk.green('GG', wordGuess === word ? player : 'cheater'))
        break
      } else {
        hangState++
        hangingState(hangState)
        if (hangState === nbTry) {
          console.log(chalk.red(`Game Over\nThe word to find was: ${word}`))
          score = 0
          isSearching = false
        }
        console.log('raté')
        continue
      }
    }
    /* Remove since keyIn use
    if (answer.length !== 1 || (answer.charCodeAt(0) < 97 || answer.charCodeAt(0) > 122)) {
      console.log('Error: Choose one letter')
      continue
    }
    */
    if (guessArray.includes(answer)) {
      console.log(`You have already tried with: ${answer}`)
      continue
    } else {
      guessArray.push(answer)
    }
    if (word.includes(answer)) {
      for (let i = 0; i < word.length * 2; i += 2) {
        let tempArr = hiddingWord.split('')
        if (word[i / 2] === answer) {
          tempArr[i] = answer
        }
        hiddingWord = tempArr.join('')
      }
    } else {
      hangState++
      hangingState(hangState)
    }
    if (hiddingWord.indexOf('_') === -1) {
      console.log(chalk.green(`\nCONGLATURATION ${player.toUpperCase()}!!!`))
      isSearching = false
    }
    if (hangState === nbTry) {
      console.log(chalk.red(`Game Over\nThe word to find was: ${word}`))
      score = 0
      isSearching = false
    }
  }

  console.log(`Your score: ${score}`)
  return { player: player, score: score }
}