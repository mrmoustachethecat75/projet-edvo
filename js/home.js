import {nav, createDivTitle} from './global-function.js';
let container = document.getElementById('container');
container.setAttribute('class', 'container');
let tabListes = ['add','liste', 'task','trombinoscope'];
let navBar = nav(container, tabListes);
let titleText = 'Bienvenu sur Application EDVO';
let divTitle = createDivTitle(titleText, container);
divTitle.setAttribute('class', 'div-title');
