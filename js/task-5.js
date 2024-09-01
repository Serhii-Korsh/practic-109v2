//  <!-- ЗАДАЧА 2 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 2</p>
//       <button id="swapButton">SWAP ME</button>
//       <input id="leftSwapInput" type="text" value="???" />
//       <input id="rightSwapInput" type="text" value="!!!" />
//     </div>
// /*
// Завдання 2
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
// */
const button = document.querySelector("#swapButton");
const inputOne = document.querySelector("#leftSwapInput");
const inputTwo = document.querySelector("#rightSwapInput");
button.addEventListener('click', () => {
        
    const inputLeft = inputOne.value;
    const inputRight = inputTwo.value;
    inputOne.value = inputRight;
    inputTwo.value = inputLeft;
})