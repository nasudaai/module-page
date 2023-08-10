const btn  = document.createElement('div');

const title = document.createElement('p');
btn.appendChild(title);

title.insertAdjacentHTML('beforeend', '<h2>from button.js</h2>')

const addBtn = document.createElement('button');
addBtn.innerText = 'Click me!';

const counter = document.createElement('p');
let number = 0;
const countMsg = 'Your click times';
counter.innerText = `${countMsg} : ${number}`;

addBtn.addEventListener('click', () => {
  number = number + 1;
  counter.innerText = `${countMsg} :  ${number}`;
  
  console.log(number);
});

btn.appendChild(addBtn);
btn.appendChild(counter);
export { btn };
