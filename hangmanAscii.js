exports.hangingState = (nb) => {
  switch (nb) {
    case 1:
      console.log('============')
      break
    case 2:
      console.log("   ||\n   ||\n   ||\n   ||\n   ||\n   ||\n  /||\n //||\n============")
      break
    case 3:
      console.log(",==============\n   ||  /\n   || /\n   ||/\n   ||\n   ||\n   ||\n  /||\n //||\n============")
      break
    case 4:
      console.log(",==========Y===\n   ||  /   |\n   || /    |\n   ||/\n   ||\n   ||\n   ||\n  /||\n //||\n============")
      break
    case 5:
      console.log(",==========Y===\n   ||  /   |\n   || /    |\n   ||/     O\n   ||\n   ||\n   ||\n  /||\n //||\n============")
      break
    case 6:
      console.log(",==========Y===\n   ||  /   |\n   || /    |\n   ||/     O\n   ||     /|\\\n   ||\n   ||\n  /||\n //||\n============")
      break
    case 7:
      console.log(",==========Y===\n   ||  /   |\n   || /    |\n   ||/     O\n   ||     /|\\\n   ||      |\\\n   ||\n  /||\n //||\n============")
      break
    default:
  }
}