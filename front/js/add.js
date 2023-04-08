import { nav, createDivTitle, createBtnRadio} from './global-function.js';
import {addResident} from './axios-function.js';
import {urlAddResident} from './global-config.js';


let container = document.getElementById('container');
container.setAttribute('class','container');
let tabListes = ['home', 'liste', 'task', 'trombinoscope'];
let navBar = nav(container, tabListes);
let titleText = 'Ajouter un résident';
let divTitle = createDivTitle(titleText, container);


let divAdd = document.createElement('div');
divAdd.setAttribute('class','div-add');
container.appendChild(divAdd);
let formAdd = document.createElement('form');
divAdd.appendChild(formAdd);
formAdd.setAttribute('method', 'post');
formAdd.setAttribute('enctype','multipart/form-data');
formAdd.setAttribute('class', 'form-add-residents');


let textLabel= ['Nom du résident : ','Numéro du résident : ',"Date d'entrée :", 'Photo du résident : ', 'Sexe du résident : ', 'Status du résident : '];
let forLabel = ['resident_name', 'resident_phone','resident_date', 'resident_picture', 'resident_genre','resident_status'];
let urlImg;
for (let b=0; b<textLabel.length; b++){
  let label = document.createElement('label');
  label.setAttribute('for', forLabel[b]);
  label.setAttribute('class','label-'+forLabel[b])
  let labelText = document.createTextNode(textLabel[b])
  label.appendChild(labelText);
  formAdd.appendChild(label);
  if (b <= 1 ){
    let inputText = document.createElement('input');
    inputText.setAttribute('class','input-'+forLabel[b]);
    formAdd.appendChild(inputText);
    inputText.setAttribute('id', forLabel[b]);
    inputText.setAttribute('type', 'text');
  }
  if (b === 2){
    let inputDate = document.createElement('input');
    inputDate.setAttribute('class','input-'+forLabel[b]);
    formAdd.appendChild(inputDate);
    inputDate.setAttribute('id', forLabel[b]);
    inputDate.setAttribute('type', 'date');
  }
  else if (b === 3){
    let inputPicture = document.createElement('input');
    inputPicture.setAttribute('class','input-'+forLabel[b]);
    formAdd.appendChild(inputPicture);
    inputPicture.setAttribute('id',forLabel[2])
    // modifier type 
    inputPicture.setAttribute('type', 'file');
    inputPicture.setAttribute('onchange', 'changeHandler(event)');
    inputPicture.onchange = function (evt){
      evt.stopPropagation();
      evt.preventDefault();
      let files = evt.target.files;
      let file = files[0];
      let fileReader = new FileReader();
      fileReader.onload = function(progressEvent) {
          urlImg = fileReader.result;
          let myImg = document.getElementById("myimage");
          myImg.src= urlImg;
      }
      fileReader.readAsDataURL(file); 
    };
    let divImgPreview = document.createElement('div');
    divImgPreview.setAttribute('class', 'div-preview-img');
    container.appendChild(divImgPreview);
    let imgPreview = new Image(200, 300);
    divImgPreview.appendChild(imgPreview);
    imgPreview.setAttribute('class', 'preview-picture-resident');
    imgPreview.setAttribute('id', 'myimage');
    imgPreview.setAttribute('src', '');
  }
  else if (b === 4){
    let tabGenre = ['M','F'];
    let nameRadioGenre = 'resident_genre';
    let btnRadioGenre = createBtnRadio(tabGenre, nameRadioGenre);
    formAdd.appendChild(btnRadioGenre);
  }
  else if (b === 5 ){
    let tabStatus = ['Structure', 'Studio'];
    let nameRadioStatus = 'resident_status';
    let btnRadioStatus = createBtnRadio(tabStatus, nameRadioStatus);
    formAdd.appendChild(btnRadioStatus);
  }
}

let btnRadioGenreVerif = document.querySelectorAll('input[name=resident_genre]');
let resultValGenre ;
for (let i=0;i<btnRadioGenreVerif.length;i++){
  btnRadioGenreVerif[i].addEventListener('change', function(){
      resultValGenre = this.value;
})}
let btnRadioStatusVerif = document.querySelectorAll('input[name=resident_status]');
let resultValStatus ;
for (let i=0;i<btnRadioStatusVerif.length;i++){
  btnRadioStatusVerif[i].addEventListener('change', function(){
    resultValStatus = this.value;
})}



let submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('class', 'btn-submit-add');
submit.innerText = 'Valider';

formAdd.appendChild(submit);
formAdd.addEventListener('submit', event => {
  event.preventDefault();
  let dataResident = new FormData();
  dataResident.append('resident_name', document.getElementById('resident_name').value);
  dataResident.append('resident_phone', document.getElementById('resident_phone').value);
  dataResident.append('resident_date', document.getElementById('resident_date').value);
  dataResident.append('resident_picture', urlImg);
  dataResident.append('resident_genre', resultValGenre);
  dataResident.append('resident_status', resultValStatus);
  addResident(dataResident, urlAddResident);
});


