import {nav, createDivTitle} from './global-function.js';
import {urlGetAllResident, urlImg} from './global-config.js';





let container = document.getElementById('container');
container.setAttribute('class', 'container');
let tabListes = ['home','add','liste', 'task'];
let navBar = nav(container, tabListes);
let titleText = 'Trombinoscope';
let divTitle = createDivTitle(titleText, container);
divTitle.setAttribute('class', 'div-title');
let divTrombinoscope = document.createElement('div');
divTrombinoscope.setAttribute('class', 'div-trombinoscope');
container.appendChild(divTrombinoscope);
axios.get(urlGetAllResident, {
    headers: {
        "Content-Type": "multipart/form-data",'Authorization': localStorage.getItem('AuthToken'),
    }})
    .then(response => {
    let dataResident = response.data;
    dataResident.sort((x, y) => x.id - y.id);
    for (let t=0; t<dataResident.length; t++){
        let article = document.createElement('article');
        divTrombinoscope.appendChild(article);
        article.setAttribute('class', 'article-resident');
        let picture = new Image(100, 180);
        picture.src = urlImg+dataResident[t].resident_picture;
        article.appendChild(picture);
        let nameResident = document.createElement('h3');
        let nameResidentText = document.createTextNode(dataResident[t].resident_name);
        nameResident.appendChild(nameResidentText);
        article.appendChild(nameResident);
        let phoneResident = document.createElement('p');
        let phoneResidentText = document.createTextNode(dataResident[t].resident_phone);
        phoneResident.appendChild(phoneResidentText);
        article.appendChild(phoneResident);
        
    }
    

    })
    .catch(error => console.error(error));
