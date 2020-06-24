let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }
]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    let unicorn = document.getElementById("todo-list")
    let poop = document.createElement('LI')
    let fork =document.createTextNode(arrayOfTodos[0].title)

    poop.appendChild(fork) 
    unicorn.appendChild(poop)
}


// console.log(arrayOfTodos[0].title) // => 14
// console.log(arrayOfTodos[1].userId) // => 20

// let list = () => {
//     let unicorn = document.getElementById("todo-list")
//     let poop = document.createElement('LI')
//     let fork =poop.createTextNode(arrayOfTodos[0].title)

//     poop.appendChild(fork) 
//     unicorn.appendChild(poop)
// }
