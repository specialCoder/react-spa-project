 import printMe from './print.js';
 import { cube } from './math.js';
 import style from './style.css';

 if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!!!!!');
 }
 
  function component() {
    var element = document.createElement('pre');
     element.innerHTML = [
       'Hello webpack!',
       '5 cubed is equal to ' + cube(5)
     ].join('\n\n');
     element.classList.add(style.hello);

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;  
    element.appendChild(btn);
    return element;
  }

  document.body.appendChild(component());