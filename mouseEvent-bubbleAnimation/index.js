function getElement(elementSelector) {
    return document.querySelector(elementSelector);
}

function bubbleAnimations(event) {
    const bubbleOne = getElement(".bubble-one");
    const bubbleTwo = getElement(".bubble-two");
    const bubbleThree = getElement(".bubble-three");
    const bubbleFour = getElement(".bubble-four");

    let cursorPositionX = event.clientX;
    let cursorPositionY = event.clientY;

    function animateBubble(positionX, positionXType, positionY, positionYType) {
        return `translate(${positionXType}${Math.round(
            positionX / Math.PI
        )}px, ${positionYType}${Math.round(positionY / Math.PI)}px`;
    }

    bubbleOne.style.transform = animateBubble(
        cursorPositionX,
        "",
        cursorPositionY,
        ""
    );
    bubbleTwo.style.transform = animateBubble(
        cursorPositionY,
        "",
        cursorPositionX,
        ""
    );
    bubbleThree.style.transform = animateBubble(
        cursorPositionY,
        "",
        cursorPositionY,
        "-"
    );
    bubbleFour.style.transform = animateBubble(
        cursorPositionX,
        "-",
        cursorPositionY,
        ""
    );
}

document.addEventListener("mousemove", (event) => {
    bubbleAnimations(event);
});
