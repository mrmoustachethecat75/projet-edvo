import { nav, createDivTitle, createBtnRadio , verifData} from './global-function.js';
let container = document.getElementById('container');
container.setAttribute('class', 'container');
let tabListes = ['home', 'liste', 'task', 'trombinoscope'];
let navBar = nav(container, tabListes);
let titleText = 'Ajouter un résident';
let divTitle = createDivTitle(titleText, container);
divTitle.setAttribute('class', 'div-title');
let divAdd = document.createElement('div');
divAdd.setAttribute('class','div-add');
container.appendChild(divAdd);
let formAdd = document.createElement('form');
divAdd.appendChild(formAdd);
formAdd.setAttribute('method', 'post');
formAdd.setAttribute('enctype','multipart/form-data');
formAdd.setAttribute('class', 'form-add-residents');


let textLabel= ['Nom du résident : ','Numéro du résident : ', 'Photo du résident : ', 'Sexe du résident : ', 'Status du résident : '];
let forLabel = ['resident_name', 'resident_phone', 'resident_picture', 'resident_genre','resident_status']
for (let b=0; b<textLabel.length; b++){
  let label = document.createElement('label');
  label.setAttribute('for', forLabel[b]);
  let labelText = document.createTextNode(textLabel[b])
  label.appendChild(labelText);
  formAdd.appendChild(label);
  if (b <= 1 ){
    let inputText = document.createElement('input');
    formAdd.appendChild(inputText);
    inputText.setAttribute('id', forLabel[b]);
    inputText.setAttribute('type', 'text');
  }
  else if (b === 2){
    let inputPicture = document.createElement('input');
    formAdd.appendChild(inputPicture);
    inputPicture.setAttribute('id',forLabel[2])
    // modifier type 
    inputPicture.setAttribute('type', 'text');
  }
  else if (b === 3){
    let tabGenre = ['M','F'];
    let nameRadioGenre = 'resident_genre';
    let btnRadioGenre = createBtnRadio(tabGenre, nameRadioGenre);
    formAdd.appendChild(btnRadioGenre);
  }
  else if (b === 4 ){
    let tabStatus = ['Structure', 'Studio'];
    let nameRadioStatus = 'resident_status';
    let btnRadioStatus = createBtnRadio(tabStatus, nameRadioStatus);
    formAdd.appendChild(btnRadioStatus);
  }
}
let submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.innerText = 'Valider';

formAdd.appendChild(submit);
formAdd.addEventListener('submit', event => {
       event.preventDefault();
       let name = ["Le nom du résident","Le numéro du résident","La photo du résident","Le genre du résident", "Le statue du résident"];
       let tabData = ['resident_name','resident_phone','resident_picture','resident_genre','resident_status'];
       let dataResident = verifData(tabData, name);
       console.log(dataResident);
    });


