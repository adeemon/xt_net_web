
let inputString = "У попа была собака";

function isLetter(c) {
  if (c)
  return c.toLowerCase() !== c.toUpperCase();
}

function deleteSameChars (inputStr) 
{
  let arrayOfSameWords = findSameChars(inputStr) ;
  let outputString = "";
  
  console.log(arrayOfSameWords);

  for (let i=0; i<inputStr.length; ++i)
  {
    if (!arrayOfSameWords.includes(inputStr[i].toLowerCase()))
    {
      outputString+=inputStr[i];
    }
  }
  return outputString;
}

function findSameChars (inputString)
{
  let arrayOfSameWords = [];
  for (let i=0; i < inputString.length-1;++i)
  {
  	if (isLetter(inputString[i])&&!(arrayOfSameWords.includes(inputString[i].toLowerCase())))
    {
      let counter = 1;
      let nextSymbol = inputString[i+counter].toLowerCase();
      
      while (isLetter(nextSymbol))
      {
      	if (inputString[i].toLowerCase()==nextSymbol.toLowerCase()) 
        {
        	arrayOfSameWords.push(inputString[i].toLowerCase());
          break;
        }
        counter++;
        nextSymbol = inputString[i+counter];
      }
    }
  }
  return arrayOfSameWords;
}

console.log (deleteSameChars(inputString));


