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

let x = ""

const userNum = (num) => {
    x = parseInt(num)  
}
  

let fontColor =''

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}
const populateAllTodos = () => {
    populateTodos(arrayOfTodos)
}

const populateTodos = (arr) => {
    let list = document.getElementById("todo-list")

    for (i=0; i < arr.length; i++){
        let newLi = document.createElement('LI')
        let newP1 = document.createElement('P')
        let newP2 = document.createElement('P')
        let newP3 = document.createElement('P')
        let newP4 = document.createElement('P')

        let userId =document.createTextNode(arr[i].userId)
        newP1.appendChild(userId)

        let id =document.createTextNode(arr[i].id)
        newP2.appendChild(id)

        let title =document.createTextNode(arr[i].title)
        newP3.appendChild(title)

        let completed=document.createTextNode(arr[i].completed)
        newP4.appendChild(completed)

        newLi.appendChild(newP1)
        newLi.appendChild(newP2)
        newLi.appendChild(newP3)
        newLi.appendChild(newP4)
        list.appendChild(newLi)


        if (arr[i].completed === true) {
            fontColor = 'darkturquoise'} else {fontColor = 'palevioletred'}

            newP4.style.color=fontColor
    }
}

const filterTodosByUserId = () => {

    let arrayOfUserTodos = arrayOfTodos.filter(function(numId) {
        return numId.userId === x
    }) 

    populateTodos(arrayOfUserTodos)
}

const filterTodosByCompleted = () => {
    
    let arrayOfUserCompletedTodos = arrayOfTodos.filter(function(todo) {
        return todo.completed === true
    }) 

    populateTodos(arrayOfUserCompletedTodos)
}

const filterTodosByNotCompleted = () => {
    
    let arrayOfUserNotCompletedTodos = arrayOfTodos.filter(function(todo) {
        return todo.completed === false
    }) 

    populateTodos(arrayOfUserNotCompletedTodos)
}

const clearTheList = () => {
    const arrayOfTodos=document.getElementsByTagName("OL")
    for (i=0; i < arrayOfTodos.length; i++)
    arrayOfTodos[i].innerHTML=null
}

