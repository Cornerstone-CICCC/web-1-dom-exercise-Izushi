// YOUR CODE HERE
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');

btn1.addEventListener('click', () => {
    document.querySelector('#output1').style.backgroundColor = 'red';
});

btn2.addEventListener('click', () => {
    const newElement = document.createElement('span');
    newElement.textContent = 'Hello World';
    document.querySelector('#output2 p').appendChild(newElement);
});

btn3.addEventListener('click', () => {
    document.querySelector('#output3 p').classList.remove('small-text');
});

btn4.addEventListener('click', () => {
    document.querySelectorAll('#output4 p').forEach((p) => {
        p.style.color = 'red';
    });
});

btn5.addEventListener('click', () => {
    const text = document.querySelector('#message').value;
    console.log(text);
});