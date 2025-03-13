function scuberGreetingForFeet(fistStop) {
  // Write your code here!
  if (fistStop <= 400) {
    return 'this is on me!'
  }
  else if (fistStop > 400 && fistStop <= 2000) {
    return 'That will be twenty bucks.'
  }
  else if (fistStop > 2000 && fistStop <= 2500) {
    return 'I will gladly take your thirty bucks'
  }
  else {
    return 'No can do.'
  }
}

function ternaryCheckCity(cityCheck){
  // Write your code here!
  return cityCheck === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(charmTip) {
  switch (charmTip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.'
  }

}