const inputData = document.querySelector(".js__input");
const addBtn = document.querySelector(".js__button");
const error = document.querySelector(".error");

const listContainer = document.querySelector(".list__container--data");

//navigation
const menuBtn = document.querySelectorAll(".js__menu");
const rightNav = document.querySelector(".js__right--nav");

menuBtn.forEach((menuIcon) => {
  menuIcon.addEventListener("click", () => {
    rightNav.classList.toggle("activate-nav");
  });
});

addBtn.addEventListener("click", () => {
  if (inputData.value !== "") {
    error.style.display = "none";

    let li = document.createElement("li");
    li.innerHTML = `${inputData.value} <i class="ri-close-line close-btn" onclick="closeElement(this)"></i>`;
    listContainer.appendChild(li);
  } else {
    setTimeout(() => {
      error.style.display = "block";
    }, 100);

    setTimeout(() => {
      error.style.display = "none";
    }, 3000);
  }

  inputData.value = "";
  saveData();
});

function closeElement(button) {
  button.parentElement.remove();
  saveData();
}

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
  listContainer.innerHTML = localStorage.getItem("data")
}

showData();
