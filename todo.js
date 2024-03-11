    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

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
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }

    // const fetchTodos = () => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then( (response) => {
    //         console.log('response:', response) 
    //         return response.json()
    // })
    //     .then( (json) => {
    //         console.log('json:', json) //these 2 added console.logs do the work that logtodos was doing before. 
    //         arrayOfTodos = json
    //     })
    // }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        
        // document.getElementById("todo-list").appendChild(newLi)
        for (i = 0; i < arrayOfTodos.length; i++) {
            
            let motto = arrayOfTodos.at(i).title
            let newLi = document.createElement("li")
            let text = document.createTextNode(motto)
            newLi.appendChild(text)
            document.getElementById("todo-list").appendChild(newLi)
        }
    }
    


        

    
  
  // this was my 1st attempt to get the todo list in the ol element. why doesn't it work? Well for one thing it's not saying where to put it. 
  //Well, maybe? in getelementbyid("todo-list") it's specifying OL by using its id. OK, so doing it like that gives us "1. + arrayOfTodos + ". It's putting the word inside the ordered list instead of the data! Why? 

  //   const populateTodos = () => {
//     document.getElementById("todo-list").innerHTML = "<li> + arrayOfTodos + </li><br>"
  
//   }
// and this was my 2nd
// const populateTodos = document.getElementById('result');

//this is the branch!!!git 

//const populateTodos = () => {
    // let newObject = document.createElement("li")
    // let text = document.createTextNode(arrayOfTodos[0])
    // newObject.appendChild(text)
    // document.getElementById("list-items").innerHTML = arrayOfTodos
    // document.getElementById("todo-list").appendChild(newObject)

//}

