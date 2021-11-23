function scuberGreetingForFeet(distance){
  if (distance <= 400) return "This one is on me!";
  else if (distance > 2500) return "No can do.";
  else if (distance > 2000) return "I will gladly take your thirty bucks.";
}

function ternaryCheckCity(city){
  // Write your code here!
  let response = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
  return response;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let reply
  switch(tip) {
    case 'generous':
      reply = 'Thank you so much.';
      return reply;
      break;
    case 'not as generous':
      reply = 'Thank you.';
      return reply;
      break;
    default:
      reply = "Bye.";
      return reply;
  }
}