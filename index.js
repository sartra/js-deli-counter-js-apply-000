function  takeANumber(katzDeliLine, name){
  return katzDeliLine.indexOf(name) + 1; 
}

function nowServing(katzDeliLine){
  var person = katzDeliLine.shift();
  console.log(person, katzDeliLine);
  if (!katzDeliLine.length){
    return "There is nobody waiting to be served!";
  }
}
