import {nav, createDivTitle} from './global-function.js';
import {urlGetAllResident, urlImg, urlDeleteResident, urlBase} from './global-config.js';

let storageIMG;
let container = document.getElementById('container');
container.setAttribute('class', 'container');
let tabListes = ['home','add','task', 'trombinoscope'];
let navBar = nav(container, tabListes);
let titleText = 'Liste';
let divTitle = createDivTitle(titleText, container);
divTitle.setAttribute('class', 'div-title');
let divBtnCreateTasks = document.createElement('div');
divBtnCreateTasks.setAttribute('class', 'div-form-add');
divBtnCreateTasks.setAttribute('id', 'div-form-add');
divBtnCreateTasks.setAttribute('value', 'test');
container.appendChild(divBtnCreateTasks);
axios.get(urlGetAllResident, {
    headers: {
        "Content-Type": "multipart/form-data",'Authorization': localStorage.getItem('AuthToken'),
    }})
    .then(response => {
        let residentData = response.data;
        residentData.sort((x, y) => x.id - y.id);
        let nbresidents = residentData.length;
        let container = document.getElementById('container');
        let section = document.createElement('section');
        section.setAttribute('class' , 'section-vue-edit');
        let div = document.createElement('div');
        div.setAttribute('class', 'liste-residents-edit');
        for (let e=0; e<nbresidents; e++ ){
            let carteResident = document.createElement('article');
            carteResident.className = "carte-resident-edit";
            let title = document.createElement("h3");
            carteResident.appendChild(title);
            title.setAttribute('class', 'elem-edit');
            let titleName = document.createTextNode(residentData[e].resident_name);
            title.appendChild(titleName);
            let pictureResident = new Image(100, 200);
            pictureResident.setAttribute('class', 'elem-edit');
            pictureResident.src = urlImg+residentData[e].resident_picture;
            carteResident.appendChild(pictureResident);
            let btnUpdate = document.createElement('button');
            btnUpdate.setAttribute('class', 'btn-edit');
            btnUpdate.innerHTML = "modifier le résident"
            btnUpdate.onclick = function() {
              let idResident = residentData[e].id;
              localStorage.setItem('id-resident', idResident);
              window.location.href = '/html/edit-resident.html';
            }
            let btnDell = document.createElement('button');
            btnDell.setAttribute('class', 'btn-edit');
            btnDell.setAttribute('id', e);
            btnDell.disabled = false;
            btnDell.innerHTML = "supprimer le résident"
            btnDell.onclick = function (){
                let urlDelete = urlDeleteResident+residentData[e].id;
                let dataTest = "test";
                alert("Voulez vous supprimer le résident "+residentData[e].resident_name+" ?"); 
                if (alert) {
                    // dellResident(urlDelete);
                    axios.post(urlDelete, dataTest, {
                        headers: {
                          "Content-Type": "multipart/form-data",
                          "Authorization": localStorage.getItem('AuthToken'),
                        }})
                        .then(response => {
                         
                              window.location.href = urlBase+'html/home.html';
                          
                        })
                        .catch(error => console.error(error));
                }
            }
        carteResident.appendChild(btnUpdate);
        carteResident.appendChild(btnDell);
        div.appendChild(carteResident);
        section.appendChild(div);
        container.appendChild(section);
    }    
      
}).catch(error => console.error(error));