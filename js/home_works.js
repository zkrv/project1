/// Email checker

const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    } else {
        gmailResult.innerHTML = "NOT OK"
        gmailResult.style.color = "red"
    }
}



/// move block


const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let positionX = 0;
let positionY = 0;
let arrow = "right";

function moveBlock() {
    const parentWidth = parentBlock.offsetWidth;
    const parentHeight = parentBlock.offsetHeight;
    const childWidth = childBlock.offsetWidth;
    const childHeight = childBlock.offsetHeight;


    if (arrow === "right") {
        positionX += 1;
        if (positionX + childWidth >= parentWidth) {
            arrow = "down";
        }
    } else if (arrow === "down") {
        positionY += 1;
        if (positionY + childHeight >= parentHeight) {
            arrow = "left";
        }
    } else if (arrow === "left") {
        positionX -= 1;
        if (positionX <= 0) {
            arrow = "up";
        }
    } else if (arrow === "up") {
        positionY -= 1;
        if (positionY <= 0) {
            arrow = "right";
        }
    }


    childBlock.style.left = `${positionX}px`;
    childBlock.style.top = `${positionY}px`;


    requestAnimationFrame(moveBlock);
}


moveBlock();










//// timer

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");
const secondsOnDisplay = document.querySelector("#seconds");

let seconds = 0
let timerInterval

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function updateDisplay() {
    secondsOnDisplay.textContent = seconds;
}
function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}
function resetTimer() {
    stopTimer();
    seconds = 0;
    updateDisplay();
}

updateDisplay();



/// characters
// const xhr = new XMLHttpRequest() // 1
// xhr.open('GET', 'project1/data/persons.json') // 2. Указание метода запроса и пути
// xhr.setRequestHeader('Content-type', 'application/json') // 3. Указание заголовка
// xhr.send() // 4. Отправка
//
// xhr.onload = () => {
//     const characters = JSON.parse(xhr.response)
// }
//
// characters.onload = () => {
//     const data = JSON.parse(characters.response);
// };
//
//
// data.forEach((person)=>{
//     const personBlock = document.createElement("div");
//     characterList.appendChild(personBlock);
//     personBlock.innerHTML = `
//     <h2>${personBlock.name}</h2>
//     <h2>${personBlock.age}</h2>
//     `
// })
// const characters_list = document.querySelector('.characters-list')
// const defaultUserFoto = "data:image/png;base64,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"
// characters.forEach((person)=>{
// // console.log(person.name);
//     const personblock = document.createElement('div')
//     characters_list.appendChild(personblock)
//     personblock.setAttribute('class', 'character-card')
//
//     personblock.innerHTML = `
//         <div class="character-photo">
//         <img src="${person.image}" alt="${person.image}">
// </div>
//         <h2>${person.name}</h2>
//         <span class="span-color"><b>age:</b>${person.age}</span>
// `
//
//
// })

// const xhr = new XMLHttpRequest() // 1
// xhr.open('GET', '../data/persons.json') // 2. Указание метода запроса и пути
// xhr.setRequestHeader('Content-type', 'application/json') // 3. Указание заголовка
// xhr.send() // 4. Отправка
//
// xhr.onload = () => {
//     const characters = JSON.parse(xhr.response)
// }
//
//
//
//
//
// const defaulfuserphoto =
//     'https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'
// const characters_list = document.querySelector('.characters-list')
// xhr.response.forEach((person)=>{
// // console.log(person.name);
//     const personblock = document.createElement('div')
//     characters_list.appendChild(personblock)
//
//     personblock.setAttribute('class', 'character-card  ')
// // personblock.setAttribute('id', `person-${index + 1}`)
//
//     personblock.innerHTML = `<div class = 'character-photo'>
// <img src = "${person.img}" alt "${person.name}">
// </div>
// <h2>${person.name}</h2>
// <span class="span-color"><b>age:</b>${person.age}</span>
//
//
// `
//
// })





// const characterList = document.querySelector("#characters");
// const request = new XMLHttpRequest();
// request.open("GET", "../data/persons.json");
// request.setRequestHeader("Content-type", "application/json");
// request.responseType = "json";
// request.send()
//
// const renderCharacterList = (data) =>{
//     data.forEach((character) => {
//         const characterCard = document.createElement("div");
//         characterCard.classList.add("character-card");
//
//         const characterImage = document.createElement("img");
//         characterImage.setAttribute("src",character.image)
//
//         const characterName = document.createElement("p");
//         characterName.innerText = character.name;
//         const characterAge = document.createElement("span");
//         characterAge.innerText = character.age
//
//         characterCard.append(characterImage);
//         characterCard.append(characterName);
//         characterCard.append(characterAge);
//
//         characterList.append(characterCard);
//     })
// }
//
// request.onload = () =>{
//     const data = request.response;
//     console.log(data)
//     renderCharacterList(data)
// }
const characterList = document.querySelector("#characters");

const fetchCharacters = async () => {
    try {
        const response = await fetch("../data/persons.json", {
            headers: { "Content-type": "application/json" },
        });

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        renderCharacterList(data);
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
    }
};

const renderCharacterList = (data) => {
    data.forEach((character) => {
        const characterCard = document.createElement("div");
        characterCard.classList.add("character-card");

        const characterImage = document.createElement("img");
        characterImage.setAttribute("src", character.image);

        const characterName = document.createElement("p");
        characterName.innerText = character.name;

        const characterAge = document.createElement("span");
        characterAge.innerText = character.age;

        characterCard.append(characterImage);
        characterCard.append(characterName);
        characterCard.append(characterAge);

        characterList.append(characterCard);
    });
};

fetchCharacters();

const xhr = new XMLHttpRequest();
xhr.open("GET","../data/any.json");

xhr.onload = function () {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
};

xhr.onerror = function () {
    console.error("Request failed");
};

xhr.send();

















