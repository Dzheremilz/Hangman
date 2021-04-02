const { randomWord } = require('./word')
const readlineSync = require('readline-sync')
const { hangingState } = require('./hangmanAscii')
const { checkScore, higherScore } = require('./score')


if (process.argv[2] === '-h' || process.argv[2] === '--highscore') {
  higherScore()
  process.exit(0)
}
const word = randomWord('hangman.txt')
//console.log(word) if you want to know the word

let isSearching = true
let hiddingWord = '_ '.repeat(word.length)
let guessArray = []
let nbTry = 7
let hangState = 0
let score = 0

const player = readlineSync.question('Enter your name: ')

while (isSearching) {
  console.log('Try to guess: ', hiddingWord, guessArray.length > 0 ? `\nAlready use: ${guessArray.join(' ')}` : '')
  const answer = readlineSync.question('Choose one letter: ').toLowerCase()
  score++
  // TODO: possibilite de rentre le bon mot directement
  /*
  if (word === answer) {
    console.log('CONGRATURATION !!!')
    break
  }
  */
  if (answer.length !== 1 || (answer.charCodeAt(0) < 97 || answer.charCodeAt(0) > 122)) {
    console.log('Error: Choose one letter\n')
    continue
  }
  if (guessArray.includes(answer)) {
    console.log(`You have already tried with: ${answer}`)
    continue
  } else {
    guessArray.push(answer)
  }
  if (word.includes(answer)) {
    for (let i = 0; i < word.length; i++) {
      let tempArr = hiddingWord.split(' ')
      if (word[i] === answer) {
        tempArr[i] = answer
      }
      hiddingWord = tempArr.join(' ')
    }
  } else {
    hangState++
    hangingState(hangState)
  }
  if (hiddingWord.indexOf('_') === -1) {
    console.log(`CONGLATURATION ${player.toUpperCase()}!!!`)
    isSearching = false
  }
  if (hangState === nbTry) {
    console.log(`Game Over\nThe word to find was: ${word}`)
    score = 0
    isSearching = false
  }
}

console.log(`Your score: ${score}`)

//TODO: gestion du score, à améliorer ~
if (score > 0) {
  checkScore(player, score)
}
higherScore()