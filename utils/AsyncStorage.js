//let blank = {title:"", questions: []}
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

function addDeck(key,obj){
  let aDeck = new Object();
  aDeck.title = key;
  aDeck.question = [];
  obj[key] = aDeck;
  return obj;
}

//adds card to decks object
//args: card is a card object, deckName is a string of the deck title
function addCard(card, deckName){
    decks[deckName]["questions"].push(card);
    return decks;

}

function removeADeck(deckName){
  delete decks[deckName];
  return decks;
}


function removeACard(deckName, cardQuestion){

  decks[deckName]["questions"].pop();
  return decks;

}

  //decks[deckName]["questions"]



export function _getDecks(){
  return {...decks};
}

export function _getDeck(title){
  return new Promise((res, rej) => {
    setTimeout(() => res({...decks[title]}), 1000)
  })
}

export function saveDeckTitle(title){
  return new Promise((res, rej) => {
    setTimeout(() => res(addDeck(title, decks)), 1000)
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
  //return decks;
}
