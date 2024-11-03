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

const innerMoveBlock = document.querySelector(".inner_move_block");
const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

function moveBlock (position = 0) {
    const parentBlock = document.querySelector(".parent_block");
    const childBlock = document.querySelector(".child_block");

    const parentSize = parentBlock.offsetWidth;
    const childSize = childBlock.offsetWidth;
    if (position + childSize >= parentSize ) {
        return;
    }
    childBlock.style.left = `${position}px`;
    requestAnimationFrame(moveBlock);



}
moveBlock()