const { readFileSync } = require('fs')
const { randomInt } = require('crypto')

exports.randomWord = (file) => {
  // Lire le fichier hangman.txt
  let hangman = ''
  try {
    hangman = readFileSync(file, 'utf-8')
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
  // Convertire la string en array
  const hangmanArray = hangman.split('\n')
  // Récuperer un mot aléatoire dans l'Array
  const word = hangmanArray[randomInt(0, hangmanArray.length)]

  return word
  //TODO check word - remove from list if invalid => choose another one

}