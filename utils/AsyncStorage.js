
// next time maybe a array for decks would work better?
let decks = {
  React: {
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
  }
}

function addDeck(key){

  let tempObject = new Object();
  let questionsObject = new Object();
  let titleObject = new Object();
  let merged = new Object();


  questionsObject["questions"] = []
  titleObject["title"] = key;
  merged = {...titleObject,...questionsObject}
  tempObject[key] = merged

  decks = {...decks, ...tempObject};

  return decks;
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
  console.log("current deck:",decks)
  removeValueFromArray(decks[deckName]["questions"], cardQuestion)
  console.log("tried to remove a card!")
  return decks;

}

function addCard(card, deckName){
    decks[deckName]["questions"].push(card);
    return decks;

}

function removeADeck(deckName){
  delete decks[deckName];
  return decks;
}




  //decks[deckName]["questions"]



export function _getDecks(){
  return new Promise((res, rej) => {
    setTimeout(() => res({...decks}), 1000)
  })
}

export function _getDeck(title){
  return new Promise((res, rej) => {
    setTimeout(() => res({...decks[title]}), 1000)
  })
}

export function _getCards(title){
  return new Promise((res, rej) => {
    setTimeout(() => res(randomizeQuestions(decks[title].questions)), 1000)
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
  return decks;
}
