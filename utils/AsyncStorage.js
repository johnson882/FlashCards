import {AsyncStorage} from 'react-native';

// next time maybe a array for decks would work better?
let firstDeck = {React: {
  title: 'React',
  questions: [
    {
      question: 'What is React?',
      answer: 'A library for managing user interfaces'
    },
    {
      question: 'Where do you make Ajax requests in React?',
      answer: 'The componentDidMount lifecycle event'
    }
  ]
},
JavaScript: {
  title: 'JavaScript',
  questions: [
    {
      question: 'What is a closure?',
      answer: 'The combination of a function and the lexical environment within which that function was declared.'
    }
  ]
}}

let decksGlobal = {}

_storeData = async (decks) => {
  try {
    let flag = true;

   await AsyncStorage.setItem('decks1', JSON.stringify(decksGlobal));
  } catch (error) {
    // Error saving data
    console.log(error)
  }
};

_firstTimeSet = async () => {
  try{
     AsyncStorage.setItem("firstTime1", JSON.stringify(true));
  }
  catch(error){
    throw error;
  }
}

async function addDeck(key){


  let tempObject = new Object();
  let questionsObject = new Object();
  let titleObject = new Object();
  let merged = new Object();
  console.log("Decks before add:", decksGlobal)

  questionsObject["questions"] = []
  titleObject["title"] = key;
  merged = {...titleObject,...questionsObject}
  tempObject[key] = merged
  //let FirstTime = null



  //await _firstTimeSet();

  decksGlobal = {...decksGlobal, ...tempObject};
    console.log("Saved Item to Storage!", decksGlobal)
await _storeData(decksGlobal);

//await AsyncStorage.setItem('decks', JSON.stringify(decks));


  return decksGlobal;
}

async function getDecks(key){
console.log("Param for getDecks:", key)

  const temp  = await AsyncStorage.getItem('decks1');
//  let firstTime= await AsyncStorage.getItem('count');;


  let parsedTemp;
  console.log("returned from asyncStorage:", JSON.parse(temp))

  parsedTemp = JSON.parse(temp)
  console.log("parsedTemp:", parsedTemp)


  const FirstTime = await AsyncStorage.getItem('firstTime22'); // if doesnt exist returns null change firstTimexx
  // each time before testing - can also use AsyncStorage.clear() // this would be better

  if(JSON.parse(FirstTime) == null || FirstTime === 'null')
  {
console.log("firstTime =", FirstTime);
  await AsyncStorage.setItem('firstTime22', "true");

  decksGlobal = firstDeck
  console.log("Decks First time:", decksGlobal)
    await AsyncStorage.setItem('decks1', JSON.stringify(firstDeck));
  return firstDeck;
  }

//const decks = {...decksGlobal, ...parsedTemp};
return decksGlobal = {...decksGlobal, ...parsedTemp};

}


function randomizeQuestions(array){
  array.sort(() => Math.random() - 0.5);
  return array;
}

//adds card to decks object
//args: card is a card object, deckName is a string of the deck title

function removeValueFromArray(array, questionText){
  //return array.filter(question => question != "What is React?")
  for( var i = 0; i < array.length; i++){
   if ( array[i].question === questionText) {
     array.splice(i, 1);
     i--;
   }
}

console.log("questionArray:", array)
}

function removeACard(deckName, cardQuestion){
  console.log("current deck:",decksGlobal)
  removeValueFromArray(decksGlobal[deckName]["questions"], cardQuestion)
  console.log("tried to remove a card!")
  return decksGlobal;

}

function addCard(card, deckName){
    decks[deckName]["questions"].push(card);
    return decksGlobal;

}

function removeADeck(deckName){
  delete decksGlobal[deckName];
  return decksGlobal;
}




  //decks[deckName]["questions"]



export function _getDecks(){
  return new Promise((res, rej) => {
    setTimeout(() => res(getDecks({...decksGlobal})), 1000)
  })
}

export function _getDeck(title){
  return new Promise((res, rej) => {
    setTimeout(() => res({...decksGlobal[title]}), 1000)
  })
}

export function _getCards(title){
  return new Promise((res, rej) => {
    setTimeout(() => res(randomizeQuestions(decksGlobal[title].questions)), 1000)
  })

}

export function saveDeckTitle(title){
  return new Promise((res, rej) => {
    setTimeout(() => res(addDeck(title)), 1000)

  })

  //return title;
}

export function addCardToDeck(card, title){
  return new Promise((res, rej) => {
    setTimeout(() => res((addCard(card, title)), 1000 ))
  })

//return decks;
}

export function removeDeck(title){
  return new Promise((res,rej) => {
    setTimeout(() => res((removeADeck(title)), 1000 ) )
  })
  //return decks;
}

export function removeCard(deckName, cardQuestion){
  return new Promise((res,rej) => {
    setTimeout(() => res((removeACard(deckName, cardQuestion)), 1000 ) )
  })
  return decksGlobal;
}
