export function createDivTitle(text, balise) {
 let divTitle = document.createElement('div');
  divTitle.setAttribute('class', 'div-title');
  balise.appendChild(divTitle);
  let title = document.createElement('h1');
  divTitle.appendChild(title);
  let textTitle = document.createTextNode(text);
  title.appendChild(textTitle);

  return divTitle;
}
export function nav (balise, tab){
  let nav = document.createElement('nav');
  let divNav = document.createElement('div');
  divNav.setAttribute('class', 'div-nav');
  balise.prepend(nav);
  nav.appendChild(divNav);
  let toglelabel = document.createElement('label');
  toglelabel.setAttribute('class', 'logo-menu');
  toglelabel.setAttribute('for', 'mobile');
  let textLabel = document.createTextNode('MENU');
  toglelabel.appendChild(textLabel);
  let btnMenu = document.createElement('input');
  btnMenu.setAttribute('type','checkbox');
  btnMenu.setAttribute('id','mobile');
  divNav.appendChild(toglelabel);
  divNav.appendChild(btnMenu);
  let listes = document.createElement('ul');
  listes.setAttribute('class', 'menu-nav-bar');
  divNav.appendChild(listes);
  for (let e=0;e<tab.length;e++){
    let elementListe = document.createElement('li');
    elementListe.setAttribute('class', 'element-nav-bar');
    let linkElement = document.createElement('a');
    linkElement.setAttribute('class', 'nav-link')
    linkElement.href = tab[e]+'.html';
    linkElement.id = tab[e];
    let linkElementText = document.createTextNode(tab[e]);
    linkElement.appendChild(linkElementText);
    listes.appendChild(linkElement)
  }
  let liBtn = document.createElement('li');
  liBtn.setAttribute('class', 'btn-nav-bar');
  let btnDeco = document.createElement('button');
  btnDeco.setAttribute('class', 'btn-deco');
  btnDeco.innerHTML = 'Déconnexion';
  btnDeco.onclick = function(){
    window.location.assign('/index.html');
    localStorage.clear();
  }
  liBtn.appendChild(btnDeco);
  listes.appendChild(liBtn)
}

export function createBtnRadio(tab, name){
  let divRadio = document.createElement('div');
  divRadio.setAttribute('class', 'div-'+name);
  for (let g = 0; g<tab.length;g++){
        let label = document.createElement('label');
        divRadio.appendChild(label);
        label.setAttribute('for', name);
        label.setAttribute('class', 'label-'+name+"-"+tab[g]);
        let labelText = document.createTextNode(tab[g]);
        label.appendChild(labelText);
        let input = document.createElement('input');
        divRadio.appendChild(input);
        input.setAttribute('type', 'radio');
        input.setAttribute('id', tab[g]);
        input.setAttribute('name', name);
        input.setAttribute('value',g+1);
        input.setAttribute('class', 'btn-radio-add-'+tab[g]);
      
   }
   
  return divRadio;
}

export function verifData(tab, name) {
  let data = new FormData();
  for (let v = 0; v < tab.length; v++) {
    if(v <= 2){
      if (document.querySelector('#' + tab[v].value) != "") {
      data.append(tab[v], document.querySelector('#' + tab[v]).value);
    }
  return data;
   }
  }
}