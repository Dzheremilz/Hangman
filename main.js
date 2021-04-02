const { randomWord } = require('./word')
const readlineSync = require('readline-sync')
const { hangingState } = require('./hangmanAscii')

const word = randomWord('hangman.txt')
console.log(word)

let isSearching = true
let hiddingWord = '_ '.repeat(word.length)
let nbTry = 7
let hangState = 0
let score = 0


while (isSearching) {
  console.log('Try to guess: ', hiddingWord)
  const answer = readlineSync.question('Choose one letter or guess the word: ').toLowerCase()
  score++
  if (answer.length !== 1 || (answer.charCodeAt(0) < 97 || answer.charCodeAt(0) > 122)) {
    console.log('Error: Choose one letter')
    continue
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
    console.log('CONGLATURATION !!!')
    isSearching = false
  }
  if (hangState === nbTry) {
    console.log('Game Over')
    isSearching = false
  }
}

console.log(`Your score: ${score}`)

