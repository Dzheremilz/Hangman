const chalk = require('chalk')

exports.hangingState = (nb) => {
  switch (nb) {
    case 1:
      console.log(chalk.keyword('brown')('\n============'))
      break
    case 2:
      console.log(chalk.keyword('brown')("\n   ||\n   ||\n   ||\n   ||\n   ||\n   ||\n  /||\n //||\n============"))
      break
    case 3:
      console.log(chalk.keyword('brown')("\n,==============\n   ||  /\n   || /\n   ||/\n   ||\n   ||\n   ||\n  /||\n //||\n============"))
      break
    case 4:
      console.log(chalk.keyword('brown')("\n,==========Y===\n   ||  /   |\n   || /    |\n   ||/\n   ||\n   ||\n   ||\n  /||\n //||\n============"))
      break
    case 5:
      console.log(chalk.keyword('brown')("\n,==========Y===\n   ||  /   |\n   || /    |\n   ||/     O\n   ||\n   ||\n   ||\n  /||\n //||\n============"))
      break
    case 6:
      console.log(chalk.keyword('brown')("\n,==========Y===\n   ||  /   |\n   || /    |\n   ||/     O\n   ||     /|\\\n   ||\n   ||\n  /||\n //||\n============"))
      break
    case 7:
      //console.log(chalk.keyword('red')("\n,==========Y===\n   ||  /   |\n   || /    |\n   ||/     O\n   ||     /|\\\n   ||      |\\\n   ||\n  /||\n //||\n============"))
      console.log(chalk.keyword('red')(`
 ___________.._______
| .__________))______|
| | / /      ||
| |/ /       ||
| | /        ||.-''.
| |/         |/  _  \\
| |          ||  \`/,|
| |          (\\\\\`_.'
| |         .-\`--'.
| |        /Y . . Y\\
| |       // |   | \\\\
| |      //  | . |  \\\\
| |     ')   |   |   (\`
| |          ||'||
| |          || ||
| |          || ||
| |          || ||
| |         / | | \\
""""""""""|_\`-' \`-' |"""|
|"|"""""""\\ \\       '"|"|
| |        \\ \\        | |
: :         \\ \\       : :
. .          \`'       . .
 `))
      break
    default:
  }
}