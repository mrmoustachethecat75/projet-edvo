import { nav, createDivTitle, createBtnRadio} from './global-function.js';
import {urlGetResident, urlImg, urlUpdateResident} from './global-config.js';
import {updateResident} from './axios-function.js';
let dataResident;
axios.get(urlGetResident+localStorage.getItem('id-resident'), {
  headers: {
      "Content-Type": "multipart/form-data",'Authorization': localStorage.getItem('AuthToken'),
  }})
  .then(response => {
     dataResident = response.data;
     let nameResident = dataResident.resident_name;
      let phoneResident = dataResident.resident_phone;
      let dateResident = dataResident.resident_date;
      let pictureResident = new Image(120, 240);
      pictureResident.src = urlImg+dataResident.resident_picture;
      let urlNewImg;
      let genreResident = dataResident.resident_genre;
      let statusResident = dataResident.resident_status;
      let container = document.getElementById('container');
      container.setAttribute('class', 'container');
      let tabListes = ['home', 'add', 'liste', 'task', 'trombinoscope'];
      let navBar = nav(container, tabListes);
      let titleText = 'Editer';
      let divTitle = createDivTitle(titleText, container);

      let divEditer = document.createElement('div');
      divEditer.setAttribute('class', 'div-editer');
      container.appendChild(divEditer);


      let formAdd = document.createElement('form');
      divEditer.appendChild(formAdd);
      formAdd.setAttribute('method', 'post');
      formAdd.setAttribute('enctype','multipart/form-data');
      formAdd.setAttribute('class', 'form-add-residents');


      let textLabel= ['Nom du résident : ','Numéro du résident : ',"Date d'entrée :", 'Photo du résident : ', 'Sexe du résident : ', 'Status du résident : '];
      let forLabel = ['resident_name', 'resident_phone','resident_date', 'resident_picture', 'resident_genre','resident_status'];
      for (let b=0; b<textLabel.length; b++){
        let label = document.createElement('label');
        label.setAttribute('for', forLabel[b]);
        label.setAttribute('class','label-'+forLabel[b])
        let labelText = document.createTextNode(textLabel[b])
        label.appendChild(labelText);
        formAdd.appendChild(label);
        if (b === 0 ){
          let inputName = document.createElement('input');
          inputName.setAttribute('class','input-'+forLabel[b]);
          formAdd.appendChild(inputName);
          inputName.setAttribute('id', forLabel[b]);
          inputName.setAttribute('type', 'text');
          inputName.setAttribute('placeholder', nameResident);
        }
        if (b === 1) {
            let inputPhone = document.createElement('input');
            inputPhone.setAttribute('class', 'input-' + forLabel[b]);
            formAdd.appendChild(inputPhone);
            inputPhone.setAttribute('id', forLabel[b]);
            inputPhone.setAttribute('type', 'text');
            inputPhone.setAttribute('placeholder', phoneResident);
          }
        if (b === 2){
          let inputDate = document.createElement('input');
          inputDate.setAttribute('class','input-'+forLabel[b]);
          formAdd.appendChild(inputDate);
          inputDate.setAttribute('id', forLabel[b]);
          inputDate.setAttribute('type', 'date');
          inputDate.setAttribute('value', dateResident);
        }
        else if (b === 3){
          formAdd.appendChild(pictureResident);
          let inputPicture = document.createElement('input');
          inputPicture.setAttribute('class','input-'+forLabel[b]);
          formAdd.appendChild(inputPicture);
          inputPicture.setAttribute('id',forLabel[2])
          inputPicture.setAttribute('type', 'file');
          inputPicture.innerHTML ="test";
          inputPicture.setAttribute('onchange', 'changeHandler(event)');
          inputPicture.onchange = function (evt){
            if (evt){
              formAdd.replaceChild(imgPreview, pictureResident);
            }
            evt.stopPropagation();
            evt.preventDefault();
            let files = evt.target.files;
            let file = files[0];
            let fileReader = new FileReader();
            fileReader.onload = function(progressEvent) {
                urlNewImg = fileReader.result;
                let myImg = document.getElementById("myimage");
                myImg.src= urlNewImg;
            }
            fileReader.readAsDataURL(file); 
          };
          let imgPreview = new Image (120, 240);
          imgPreview.setAttribute('class', 'preview-picture-resident');
          imgPreview.setAttribute('id', 'myimage');
          imgPreview.setAttribute('src', '');
        }
        else if (b === 4){
          let tabGenre = ['M','F'];
          let nameRadioGenre = 'resident_genre';
          let btnRadioGenre = createBtnRadio(tabGenre, nameRadioGenre);
          formAdd.appendChild(btnRadioGenre);
          let btnRadioM = document.getElementById('M');
          let btnRadioF = document.getElementById('F');
          // if (genreResident === 1) {
          //   btnRadioM.setAttribute('checked', 'checked');
          //   btnRadioF.removeAttribute('checked');
      
          // }
          // if (genreResident === 2) {
          //   btnRadioF.setAttribute('checked', 'checked');
          //   btnRadioM.removeAttribute('checked');
          // }
        }
        else if (b === 5 ){
          let tabStatus = ['Structure', 'Studio'];
          let nameRadioStatus = 'resident_status';
          let btnRadioStatus = createBtnRadio(tabStatus, nameRadioStatus);
          formAdd.appendChild(btnRadioStatus);
          let btnRadioY = document.getElementById('Structure');
          let btnRadioO = document.getElementById('Studio');
          // if (statusResident === 1) {
          //   btnRadioY.setAttribute('checked', 'checked');
          // }
          // if (statusResident === 2) {
          //   btnRadioO.setAttribute('checked', checked);
          // }
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
          let Rname;
          if (document.getElementById('resident_name').value == "") {
            Rname = dataResident.resident_name;
          }
          else {
            Rname = document.getElementById('resident_name').value;
          }
          let Rphone;
          if (document.getElementById('resident_phone').value == "") {
          Rphone = dataResident.resident_phone;
          }
          else {
          Rphone = document.getElementById('resident_phone').value;
          }
          let Rpicture;
          if (urlNewImg == null) {
          Rpicture = dataResident.resident_picture;
          }
          else {
          Rpicture = urlNewImg;
          }
          let Rgenre;
          if (resultValGenre == null) {
          Rgenre = dataResident.resident_genre;
          }
          else {
          Rgenre = resultValGenre;
          }
          let Rstatus;
          if (resultValStatus == null) {
          Rstatus = dataResident.resident_status;
          }
          else {
          Rstatus = resultValStatus;
          }
          const updateDataResident = new FormData();
          updateDataResident.append('resident_name', Rname);
          updateDataResident.append('resident_phone', Rphone);
          updateDataResident.append('resident_picture', Rpicture);
          updateDataResident.append('resident_genre', Rgenre);
          updateDataResident.append('resident_status',Rstatus);
          alert("voulez-vous modifier le résidents " + dataResident.resident_name);
          let urlUpdateId = urlUpdateResident + dataResident.id;
          if (alert) {
          updateResident(urlUpdateId, updateDataResident);
          }
      });
  }).catch(error => console.error(error));
     

