//  import _ from 'lodash';
 import './style.css';
 import Icon from './blue.png';
 import printMe from './print.js';
 import { cube } from './math.js';

 if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }
 
  function component() {
    // var element = document.createElement('div');
    var element = document.createElement('pre');
     element.innerHTML = [
       'Hello webpack!',
       '5 cubed is equal to ' + cube(5)
     ].join('\n\n');

    var btn = document.createElement('button');
    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;
    
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;  
    element.appendChild(btn);
    
    element.appendChild(myIcon);
    console.log('satrt ---------------------------->');
    return element;
  }

  document.body.appendChild(component());