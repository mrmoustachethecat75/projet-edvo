import {nav, createDivTitle} from './global-function.js';
import { urlGetAllTask } from './global-config.js';

let container = document.getElementById('container');
container.setAttribute('class', 'container');
let tabListes = ['add','liste', 'task','trombinoscope', 'test'];
nav(container, tabListes);
let titleText = 'Bienvenu sur Application EDVO';
createDivTitle(titleText, container);






