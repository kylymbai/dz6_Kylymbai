// Задание - 1

const btnNext = document.querySelector('.btn-next')
const btnPrev = document.querySelector('.btn-prev')
const block = document.querySelector('.block')
let num = 1

btnNext.onclick = () => {
    num++
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
        .then(response => response.json())
        .then(todoItem => {
            console.log(todoItem)
            block.innerHTML = `
                <div class="card">
                    <h3>${todoItem.title}</h3>
                    <h3>${todoItem.completed}</h3>
                    <h3>${todoItem.id}</h3>
                </div>            
            `
            btnPrev.onclick = () => {
                num--
                fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
        .then(response => response.json())
        .then(todoItem => {
            console.log(todoItem)
            block.innerHTML = `
                <div class="card">
                    <h3>${todoItem.title}</h3>
                    <h3>${todoItem.completed}</h3>
                    <h3>${todoItem.id}</h3>
                </div>            
            `
            }
        )
            }
        }
        )
    }

// Задание - 2

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.table(json))



















// Задание - 2


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then(json => {
//         json.forEach(item => console.table(item))
//     })