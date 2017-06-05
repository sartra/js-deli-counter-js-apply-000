//the function, takeANumber, should accept the current line of people, katzDeliLine, along with the new person's name as parameters. The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
function  takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (!line.length){
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`
}

//Build a function currentLine that returns the current line. For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". If there is nobody in line, it should return "The line is currently empty."
function currentLine(line){
  if(!line.length){
    return "The line is currently empty.";
  }
  const numbersNames = [];

  for (let i=0; i<line.length; i++){
    numbersNames.push(`${i+1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersNames.join(', ')}`

}
