// Write your code in this file!

function scuberGreetingForFeet(someValue) {
  
  if(someValue >= 2500) {
    return "No can do.";
    
  }
  
  else if(someValue > 2000) {
    return "I will gladly take your thirty bucks.";
  }
  
  else if (someValue <= 400) {
    return "This one is on me!";
    
  } 
  
}

function ternaryCheckCity(city) {
  return (city == "NYC") ? "Ok, sounds good." : "No go."; 
}


function switchOnCharmFromTip(tipAmount) {
  switch (tipAmount) {
    case (tipAmount == "Generous"):
      return "Thank you so much.";
  
  switch (tipAmount)
    case(tipAmount == "Not Generous"):
      return "Thank you.";
  
  break;
  
  default:
    return "Bye."
  
}