// <!-- ЗАДАЧА 4 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 4</p>
//       <div id="box"></div>
//       <button id="decrease">Зменшити</button>
//       <button id="increase">Збільшити</button>
//     </div>
// /*
// Завдання 4
// Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
// */
const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");
const box = document.querySelector("#box");
let width = parseInt(getComputedStyle(box).width);
let height = parseInt(getComputedStyle(box).height);
decreaseBtn.addEventListener('click', () => {
    width -= 10;
    height -= 10;
    box.style.width = `${width}px`;
    box.style.height = `${width}px`;
})
increaseBtn.addEventListener('click', () => {
     width += 10;
    height += 10;
    box.style.width = `${width}px`;
    box.style.height = `${width}px`;
})