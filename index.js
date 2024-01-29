function scuberGreetingForFeet(rideDistance) {
  if (rideDistance <= 400) {
    return 'This one is on me!';
  } else if (rideDistance > 400 && rideDistance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (rideDistance > 2000 && rideDistance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  // Check if the city is NYC
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

module.exports = {
  ternaryCheckCity
};

function switchOnCharmFromTip(tip) {
  let response;

  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
  }

  return response;
}

module.exports = {
  switchOnCharmFromTip
};