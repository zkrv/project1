// phone checker

const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');


const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
phoneButton.onclick = () =>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"
    }else{
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = "red"
    }
}

// tab slider

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
const tabsParent = document.querySelector(".tab_content_items");

const hideTabContent = () => {
    tabContentBlocks.forEach((block) => {
        block.style.display = "none"
    })
    tabs.forEach((tab) => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (id = 0) => {
    tabContentBlocks[id].style.display = "block"
    tabs[id].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

let showIndex = 0
setInterval(() => {
    hideTabContent();
    showIndex = (showIndex + 1) % tabs.length;
    showTabContent(showIndex);
}, 3000);

tabsParent.onclick = (event) =>{
    if (event.target.classList.contains('tab_content_item')){
      tabs.forEach((tab,tabIndex) => {
          if (event.target === tab){
              hideTabContent()
              showTabContent(tabIndex)
          }
      })
    }
}

/// convertor

// const usdInput = document.querySelector('#usd');
// const somInput = document.querySelector('#som');
// const eurInput = document.querySelector('#eur');
//
//
// const converter = (element,targetElement) => {
//     element.oninput = () => {
//         const request = new XMLHttpRequest();
//         request.open("GET", "../data/conventor.json");
//         request.setRequestHeader("Content-type", "application/json");
//         request.send()
//
//         request.onload = () => {
//             const data = JSON.parse(request.response);
//             if (element.id === "som") {
//                 targetElement.value = (element.value / data.usd).toFixed(2)
//                 targetElement.value = (element.value / data.eur).toFixed(2)
//             }
//             if (element.id === "usd") {
//                 targetElement.value = (element.value * data.usd).toFixed(2)
//                 targetElement.value = (element.value * data.usd / data.eur).toFixed(2)
//
//             }
//             if (element.id === "eur") {
//                 targetElement.value = (element.value * data.eur).toFixed(2)
//                 targetElement.value = (element.value * data.eur / data.usd).toFixed(2)
//             }
//             if (element.value === "") {
//                 targetElement.value = ""
//             }
//
//         }
//     }
//
// }
//
// converter(somInput,usdInput)
// converter(somInput,eurInput)
// converter(eurInput,somInput)
// converter(usdInput,eurInput)
// converter(eurInput, usdInput)






// somInput.oninput = () => {
//     const request = new XMLHttpRequest();
//     request.open("GET","../data/conventor.json");
//     request.setRequestHeader("Content-type", "application/json");
//     request.send()
//
//     request.onload = () => {
//         const data = JSON.parse(request.response);
//         usdInput.value = (somInput.value / data.usd).toFixed(2)
//     }
// }
//
// usdInput.oninput = () => {
//     const request = new XMLHttpRequest();
//     request.open("GET","../data/conventor.json");
//     request.setRequestHeader("Content-type", "application/json");
//     request.send()
//
//     request.onload = () => {
//         const data = JSON.parse(request.response);
//         somInput.value = (usdInput.value * data.usd).toFixed(2)
//     }
// }

/// DRY - don't repeat yourself
/// KISS - keep it super simple



const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#som');
const eurInput = document.querySelector('#eur');

const converter = (element, targetElement1, targetElement2) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open("GET", "../data/conventor.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response);

            if (element.id === "som") {
                targetElement1.value = (element.value / data.usd).toFixed(2);
                targetElement2.value = (element.value / data.eur).toFixed(2);
            }
            if (element.id === "usd") {
                targetElement1.value = (element.value * data.usd).toFixed(2);
                targetElement2.value = ((element.value * data.usd) / data.eur).toFixed(2);
            }
            if (element.id === "eur") {
                targetElement1.value = (element.value * data.eur).toFixed(2);
                targetElement2.value = ((element.value * data.eur) / data.usd).toFixed(2);
            }
            if (element.value === "") {
                targetElement1.value = "";
                targetElement2.value = "";
            }
        }
    }
}


converter(somInput, usdInput, eurInput)
converter(usdInput, somInput, eurInput)
converter(eurInput, somInput, usdInput)

//card switcher

// const nextButton = document.querySelector('#btn-next');
// const prevButton = document.querySelector('#btn-prev');
// const cardBlock = document.querySelector('.card');
// let cardIndex =  0
// nextButton.onclick = () => {
//     cardIndex++
//      fetch(`https://jsonplaceholder.typicode.com/todos/${cardIndex}`)
//         .then((response)=> response.json())
//         .then((data)=> {
//             cardBlock.innerHTML = `
//             <p>${data.title}</p>
//             <p>${data.completed}</p>
//             <span>${data.id}</span>
//             `
//
//         })
// }
// prevButton.onclick = () => {
//     cardIndex--
//     fetch(`https://jsonplaceholder.typicode.com/todos/${cardIndex}`)
//         .then((response)=> response.json())
//         .then((data)=> {
//             cardBlock.innerHTML = `
//             <p>${data.title}</p>
//             <p>${data.completed}</p>
//             <span>${data.id}</span>
//             `
//
//         })
// }

const nextButton = document.querySelector('#btn-next');
const prevButton = document.querySelector('#btn-prev');
const cardBlock = document.querySelector('.card');
let cardIndex = 1;

const updateCard = (index) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
        .then((response) => response.json())
        .then((data) => {
            cardBlock.innerHTML = `
                <p>${data.title}</p>
                <p>${data.completed}</p>
                <span>${data.id}</span>
            `;
        })

}
updateCard(cardIndex)

nextButton.onclick = () => {
    cardIndex++
    if (cardIndex > 200){
        cardIndex = 1
    }
    updateCard(cardIndex);
}

prevButton.onclick = () => {
    cardIndex--;
    if(cardIndex < 1) {
        cardIndex = 200
    }
    updateCard(cardIndex);
}

///отобоазить в консоли

const res = fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=> response.json())
    .then((data)=> console.log(data))






