const inputData = document.querySelector('.js__input');
const addBtn = document.querySelector('.js__button');
const error = document.querySelector('.error')

//navigation
const menuBtn = document.querySelectorAll('.js__menu');
const rightNav = document.querySelector('.js__right--nav');

menuBtn.forEach((menuIcon)=>{
  menuIcon.addEventListener('click', ()=>{
    rightNav.classList.toggle('activate-nav')
  
    console.log(rightNav)
  })
})


const todoList = [{
  todoName: 'wash dishes',
  close: '<i class="ri-close-line close-btn">'
  },
  {
    todoName: 'Play football',
    close: '<i class="ri-close-line close-btn">'
  }

]

addBtn.addEventListener('click', ()=>{
  if(inputData.value !== ''){
    textData();
     error.style.display = 'none'
  }else{
    setTimeout(()=>{
      error.style.display = 'block'
    },100)

    setTimeout(()=>{
      error.style.display = 'none'
    }, 3000) 
  }


})


function textData(){
  const inputValue = inputData.value

  todoList.push(inputValue)

  console.log(todoList)

  inputData.value = '';

  todoListData();
}

function todoListData(){
  todoList.forEach((todo)=>{
    let htmlDisplay = 
    `<div class="todo__data--list">
      <p>${todoList.todoName}</p>
      <span>${todoList.close}</i></span>
    </div>`
  })
}