const randomColor = () => {
    const hexa = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexa[parseInt(Math.random() * 16)];
    }
    return color;
}

let IntervalId;
const startColorChanging = () => {
    if (! IntervalId) {
        IntervalId = setInterval(changeColor, 2000);
    }

    function changeColor() {
        document.querySelector('body').style.backgroundColor = randomColor();
    }
}


const stopColorChanging = () => {
    clearInterval(IntervalId);
    IntervalId = null;
}

document.getElementById('start').addEventListener('click', startColorChanging)

document.getElementById('stop').addEventListener('click', stopColorChanging)


// generate a random color

// const randomColor = function () {
//     const hex = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };

// let intervalId;
// const startChangingColor = function () {
//     if (! intervalId) {
//         intervalId = setInterval(changeBgColor, 1000);
//     }

//     function changeBgColor() {
//         document.body.style.backgroundColor = randomColor();
//     }
// };
// const stopChangingColor = function () {
//     clearInterval(intervalId);
//     intervalId = null;
// };

// document.querySelector('#start').addEventListener('click', startChangingColor);

// document.querySelector('#stop').addEventListener('click', stopChangingColor);
