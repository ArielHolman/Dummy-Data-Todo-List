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
let fontColor =''

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    let list = document.getElementById("todo-list")

    for (i=0; i < arrayOfTodos.length; i++){
    let newLi = document.createElement('LI')
    let newP1 = document.createElement('P')
    let newP2 = document.createElement('P')
    let newP3 = document.createElement('P')
    let newP4 = document.createElement('P')

    let userId =document.createTextNode(arrayOfTodos[i].userId)
    newP1.appendChild(userId)

    let id =document.createTextNode(arrayOfTodos[i].id)
    newP2.appendChild(id)

    let title =document.createTextNode(arrayOfTodos[i].title)
    newP3.appendChild(title)

    let completed=document.createTextNode(arrayOfTodos[i].completed)
    newP4.appendChild(completed)

    newLi.appendChild(newP1)
    newLi.appendChild(newP2)
    newLi.appendChild(newP3)
    newLi.appendChild(newP4)
    list.appendChild(newLi)

    if (arrayOfTodos[i].completed === true) {
        fontColor = 'darkturquoise'} else {fontColor = 'palevioletred'}

        newP4.style.color=fontColor
    }
}