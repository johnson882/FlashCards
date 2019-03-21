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

function add(key,obj){
  let aDeck = new Object();
  aDeck.title = key;
  aDeck.question = [];
  obj[key] = aDeck;
  return obj;
}

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


export function saveDeckTitle(title){


  return new Promise((res, rej) => {
    setTimeout(() => res(add(title, decks)), 1000)
  })

  return title;
}
