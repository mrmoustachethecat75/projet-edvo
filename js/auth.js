import {createDivTitle} from './global-function.js';

let container = document.getElementById('container');
container.setAttribute('class', 'container');
let titleText = 'Application EDVO authentification';
let divTitle = createDivTitle(titleText, container);
divTitle.setAttribute('class', 'div-title');
let divAuth = document.createElement('div');
divAuth.setAttribute('class','div-auth');
container.appendChild(divAuth);
//----------auth
let formAuth = document.createElement('form');
formAuth.setAttribute('method','post');
formAuth.setAttribute('enctype','multipart/form-data');
formAuth.setAttribute('id', 'form_auth');
formAuth.setAttribute('class', 'form_auth');
divAuth.appendChild(formAuth);
let labelIdent = document.createElement('label');
formAuth.appendChild(labelIdent);
labelIdent.setAttribute('class','element-lab-id');
labelIdent.setAttribute('for','user_identifiant');
let labelIdentText = document.createTextNode('Identifiant :');
labelIdent.appendChild(labelIdentText);
let inputIdent = document.createElement('input');
formAuth.appendChild(inputIdent);
inputIdent.setAttribute('class','element-inp-id');
inputIdent.setAttribute('name','user_identifiant');
inputIdent.setAttribute('id','user_identifiant');
let labelPassword = document.createElement('label');
formAuth.appendChild(labelPassword);
labelPassword.setAttribute('class','element-lab-pass');
labelPassword.setAttribute('for','user_password');
let labelPasswordText =document.createTextNode('Mot de passe :');
labelPassword.appendChild(labelPasswordText);
let inputPassword = document.createElement('input');
formAuth.appendChild(inputPassword);
inputPassword.setAttribute('type', 'password');
inputPassword.setAttribute('class','element-inp-pass');
inputPassword.setAttribute('name','user_password');
inputPassword.setAttribute('id','user_password');
inputPassword.setAttribute('minlength', 8);
inputPassword.setAttribute('maxlenght', 15);
let submit = document.createElement('input');
formAuth.appendChild(submit);
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Connexion');
submit.setAttribute('class','element-sub');
formAuth.addEventListener('submit',event=>{
     event.preventDefault();
        // FUNCTION AXIOS 
       //let dataAuth = new FormData();
       //dataAuth.append('user_identifiant', document.querySelector('#user_identifiant').value);
       //dataAuth.append('user_password', document.querySelector('#user_password').value);
       //axios-get
      let ident = "user";
      let pass = "password";
      if (document.querySelector('#user_identifiant').value != ident && document.querySelector('#user_password').value != pass ){
        alert('Identifiant et Mot de passe incorrect !!!');
       }
       else if (document.querySelector('#user_password').value != pass) {
         alert('Mot de passe incorrect !!!');
       }
       else if (document.querySelector('#user_identifiant').value != ident) {
        alert('Identifiant incorrect !!!');
       }
       else {
         window.location.assign('html/home.html');
         //axios-post
       }
   });


