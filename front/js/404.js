import { urlBase } from '../js/url.js'
let container = document.getElementById('container');
container.setAttribute('class', 'container');
let divTitle = document.createElement('div');
divTitle.setAttribute('class', 'div-title');
let title = document.createElement('h1');
let titleText = document.createTextNode("Vous n'avez pas l'autorisation d'accéder à cette page");
let divReturn = document.createElement('div');
divReturn.setAttribute('class', 'div-return');
let btnReturn = document.createElement('button');
btnReturn.innerHTML = 'Authentification';
// btnReturn.onclick = function (){}
//   // finir la fonction 
// }
title.appendChild(titleText);
divTitle.appendChild(title);
divReturn.appendChild(btnReturn);
container.appendChild(divTitle);
container.appendChild(divReturn);