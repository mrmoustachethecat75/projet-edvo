import {nav, createDivTitle} from './global-function.js';
import {urlGetAllResident, urlAddTask, urlGetAllTask} from './global-config.js';
import {Lundi, Mardi,Samedi, Day, getRandomInt, createObjetResident} from './task-function.js';

let container = document.getElementById('container');
container.setAttribute('class', 'container');
let tabListes = ['home','add','liste', 'trombinoscope'];
let navBar = nav(container, tabListes);
let titleText = 'Tasks';
let divTitle = createDivTitle(titleText, container);
divTitle.setAttribute('class', 'div-title');
let divBtnCreateTasks = document.createElement('div');
divBtnCreateTasks.setAttribute('class', 'div-form-add');
divBtnCreateTasks.setAttribute('id', 'div-form-add');
container.appendChild(divBtnCreateTasks);
axios.get(urlGetAllTask,  {
    headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": localStorage.getItem('AuthToken'),
    }})
    .then(response => {
    console.log(JSON.parse(response.data[0].week_tasks));        
}).catch(error => console.error(error));
axios.get(urlGetAllResident, {
    headers: {
        "Content-Type": "multipart/form-data",'Authorization': localStorage.getItem('AuthToken'),
    }})
    .then(response => {
       let dataResident = response.data;
       dataResident.sort((x, y) => x.id - y.id);
       let btnCreateTasks = document.createElement('button');
       btnCreateTasks.innerHTML = 'Crée le tableau des tâches';
       divBtnCreateTasks.appendChild(btnCreateTasks);
       btnCreateTasks.onclick = function(){
        let tabId = [];
        let tabName = [];
        let tabGenre = [];
        let tablundi = [];
        let tabMardi = [];
        let tabMercredi = [];
        let tabJeudi = [];
        let tabVendredi = [];
        let tabSamedi = [];
        let tabDimanche = [];
        let tabCuisine = [];
        let tabSalle = [];
        let tabGt = [];
        let tabCouloir = [];
        let tabCave = [];
        let tabPoubelle = [];
        let tabWc = [];
        let tabFrigo = [];
        let tabRam = [];
        let tabExt = [];
        for (let i=0;i<dataResident.length;i++){
            if (dataResident[i].resident_status != 2){
                tabId.push(dataResident[i].id);
            tabName.push(dataResident[i].resident_name);
            tabGenre.push(dataResident[i].resident_genre);
            }
        }
        let maxRandom = tabId.length;

        function cuisine (nb, tabDay){
            let tab = [];
            for(let i=0; i<nb; i++){
                let winner = getRandomInt(0, maxRandom);
                if(!tab.includes(winner)&& !tabCuisine.includes(winner)&& !tabDay.includes(winner)){
                    tab.push(winner);
                    tabCuisine.push(winner);
                    tabDay.push(winner);
                }
                else {
                    i--;
                }
            }
            return tab;
        }
        function salle (nb,tabDay){
            let tab = [];
            for(let i=0; i<nb; i++){
                let winner = getRandomInt(0, maxRandom);
                if(!tab.includes(winner)&& !tabSalle.includes(winner)&& !tabDay.includes(winner)){
                    tab.push(winner);
                    tabSalle.push(winner);
                    tabDay.push(winner);
                }
                else {
                    i--;
                }
            }
            return tab;
        }
        function gt (nb,tabDay){
            let tab = [];
            for(let i=0; i<nb; i++){
                let winner = getRandomInt(0, maxRandom);
                if(!tab.includes(winner)&& !tabGt.includes(winner)&& !tabDay.includes(winner)){
                    tab.push(winner);
                    tabGt.push(winner);
                    tabDay.push(winner);
                }
                else {
                    i--;
                }
            }
            return tab;
        }
        function cave (nb,tabDay){
            let tab = [];
            for(let i=0; i<nb; i++){
                let winner = getRandomInt(0, maxRandom);
                if(!tab.includes(winner)&& !tabCave.includes(winner)&& !tabDay.includes(winner)){
                    tab.push(winner);
                    tabCave.push(winner);
                    tabDay.push(winner);
                }
                else {
                    i--;
                }
            }
            return tab;
        }
        function poubelle (nb,tabDay){
            let tab = [];
            for(let i=0; i<nb; i++){
                let winner = getRandomInt(0, maxRandom);
                if(!tab.includes(winner)&& !tabPoubelle.includes(winner)&& !tabDay.includes(winner)){
                    tab.push(winner);
                    tabPoubelle.push(winner);
                    tabDay.push(winner);
                }
                else {
                    i--;
                }
            }
            return tab;
        }
        function frigo (nb,tabDay){
            let tab = [];
            for(let i=0; i<nb; i++){
                let winner = getRandomInt(0, maxRandom);
                if(!tab.includes(winner)&& !tabFrigo.includes(winner)&& !tabDay.includes(winner)){
                    tab.push(winner);
                    tabFrigo.push(winner);
                    tabDay.push(winner);
                }
                else {
                    i--;
                }
            }
            return tab;
        }
        function ramasse (nb,tabDay){
            let tab = [];
            for(let i=0; i<nb; i++){
                let winner = getRandomInt(0, maxRandom);
                if(!tab.includes(winner)&& !tabRam.includes(winner)&& !tabDay.includes(winner)){
                    tab.push(winner);
                    tabRam.push(winner);
                    tabDay.push(winner);
                }
                else {
                    i--;
                }
            }
            return tab;
        }
        function ext (nb,tabDay){
            let tab = [];
            for(let i=0; i<nb; i++){
                let winner = getRandomInt(0, maxRandom);
                if(!tab.includes(winner)&& !tabExt.includes(winner)&& !tabDay.includes(winner)){
                    tab.push(winner);
                    tabExt.push(winner);
                    tabDay.push(winner);
                }
                else {
                    i--;
                }
            }
            return tab;
        }
        function couloir (nb, tabDay){
            let tab = [];
            for(let i=0; i<nb; i++){
                let winner = getRandomInt(0, maxRandom);
                if(!tab.includes(winner)&& !tabCouloir.includes(winner) && tabGenre[winner] == 1 && !tabDay.includes(winner)){
                    tab.push(winner);
                    tabCouloir.push(winner);
                    tabDay.push(winner);
                }
                else {
                    i--;
                }
            }
            return tab;
        }
        function wc (nb, tabDay){
            let tab = [];
            for(let i=0; i<nb; i++){
                let winner = getRandomInt(0, maxRandom);
                if(!tab.includes(winner)&& !tabWc.includes(winner) && tabGenre[winner] == 1 && !tabDay.includes(winner)){
                    tab.push(winner);
                    tabWc.push(winner);
                    tabDay.push(winner);
                }
                else {
                    i--;
                }
            }
            return tab;
        }
        let lundi = new Lundi (createObjetResident(tabName,cuisine(3,tablundi)),createObjetResident(tabName,salle(1,tablundi)),createObjetResident(tabName,gt(1,tablundi)),createObjetResident(tabName,couloir(2,tablundi)),createObjetResident(tabName,cave(1,tablundi)),createObjetResident(tabName,poubelle(1,tablundi)),createObjetResident(tabName,wc(1,tablundi)),createObjetResident(tabName,frigo(2,tablundi)),createObjetResident(tabName,ramasse(3,tablundi)),createObjetResident(tabName,ext(1,tablundi)));
        let mardi = new Mardi (createObjetResident(tabName,cuisine(3,tabMardi)),createObjetResident(tabName,salle(1,tabMardi)),createObjetResident(tabName,gt(1,tabMardi)),createObjetResident(tabName,couloir(2,tabMardi)),createObjetResident(tabName,wc(1,tabMardi)),createObjetResident(tabName,frigo(2,tabMardi)),createObjetResident(tabName,ramasse(3,tabMardi)));
        let mercredi = new Mardi (createObjetResident(tabName,cuisine(3,tabMercredi)),createObjetResident(tabName,salle(1,tabMercredi)),createObjetResident(tabName,gt(1,tabMercredi)),createObjetResident(tabName,couloir(2,tabMercredi)),createObjetResident(tabName,wc(1,tabMercredi)),createObjetResident(tabName,frigo(2,tabMercredi)),createObjetResident(tabName,ramasse(3,tabMercredi)));
        let jeudi = new Mardi (createObjetResident(tabName,cuisine(3,tabJeudi)),createObjetResident(tabName,salle(1,tabJeudi)),createObjetResident(tabName,gt(1,tabJeudi)),createObjetResident(tabName,couloir(2,tabJeudi)),createObjetResident(tabName,wc(1,tabJeudi)),createObjetResident(tabName,frigo(2,tabJeudi)),createObjetResident(tabName,ramasse(3,tabJeudi)));
        let vendredi = new Lundi (createObjetResident(tabName,cuisine(3,tabVendredi)),createObjetResident(tabName,salle(1,tabVendredi)),createObjetResident(tabName,gt(1,tabVendredi)),createObjetResident(tabName,couloir(2,tabVendredi)),createObjetResident(tabName,cave(1,tabVendredi)),createObjetResident(tabName,poubelle(1,tabVendredi)),createObjetResident(tabName,wc(1,tabVendredi)),createObjetResident(tabName,frigo(2,tabVendredi)),createObjetResident(tabName,ramasse(3,tabVendredi)),createObjetResident(tabName,ext(1,tabVendredi)));
        let samedi = new Samedi(createObjetResident(tabName,cuisine(2,tabSamedi)),createObjetResident(tabName,salle(1,tabSamedi)),createObjetResident(tabName,wc(1,tabSamedi)),createObjetResident(tabName,frigo(1,tabSamedi)));
        let dimanche = new Samedi(createObjetResident(tabName,cuisine(2,tabDimanche)),createObjetResident(tabName,salle(1,tabDimanche)),createObjetResident(tabName,wc(1,tabDimanche)),createObjetResident(tabName,frigo(1,tabDimanche)));
        let semaine = new Day(lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche);
        console.log(semaine);
        let dataTask = new FormData();
        dataTask.append('week_tasks', JSON.stringify(semaine));
        axios.post(urlAddTask, dataTask, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": localStorage.getItem('AuthToken'),
            }})
            .then(response => {
            console.log(response);
                
        }).catch(error => console.error(error));
        let divTable = document.createElement('div');
        divTable.setAttribute('class', 'div-table');
        divBtnCreateTasks.appendChild(divTable);
        let tab = document.createElement('table');
        divTable.appendChild(tab);
        let thead = document.createElement('thead');
        tab.appendChild(thead);
        let trTitle = document.createElement('tr');
        thead.appendChild(trTitle);
        let tdName = document.createElement('td');
        let textTdName = document.createTextNode('nom');
        tdName.appendChild(textTdName);
        trTitle.appendChild(tdName);
        let tdLundi = document.createElement('td');
        let tdLundiText = document.createTextNode('Lundi');
        tdLundi.appendChild(tdLundiText);
        trTitle.appendChild(tdLundi);
        let tdMardi = document.createElement('td');
        let tdMardiText = document.createTextNode('Mardi');
        tdMardi.appendChild(tdMardiText);
        trTitle.appendChild(tdMardi);
        let tdMercredi = document.createElement('td');
        let tdMercrediText = document.createTextNode('Mercredi');
        tdMercredi.appendChild(tdMercrediText);
        trTitle.appendChild(tdMercredi);
        let tdJeudi = document.createElement('td');
        let tdJeudiText = document.createTextNode('Jeudi');
        tdJeudi.appendChild(tdJeudiText)
        trTitle.appendChild(tdJeudi);
        let tdVendredi = document.createElement('td');
        let tdVendrediText = document.createTextNode('Vendredi');
        tdVendredi.appendChild(tdVendrediText);
        trTitle.appendChild(tdVendredi);
        let tdSamedi = document.createElement('td');
        let tdSamediText = document.createTextNode('Samedi');
        tdSamedi.appendChild(tdSamediText);
        trTitle.appendChild(tdSamedi);
        let tdDimanche = document.createElement('td');
        let tdDimancheText = document.createTextNode('Dimanche');
        tdDimanche.appendChild(tdDimancheText);
        trTitle.appendChild(tdDimanche);
        let tdNbTask = document.createElement('td');
     //    let tdNbTaskText = document.createTextNode('Nombres de tâches');
     //    tdNbTask.appendChild(tdNbTaskText);
     //    trTitle.appendChild(tdNbTask);
        let tbody = document.createElement('tbody');
        tab.appendChild(tbody);
        for (let n=0; n<tabName.length; n++){
         
         let row = document.createElement('tr');
         tbody.appendChild(row)
         let colText1 = document.createTextNode('1');
         let colText2 = document.createTextNode('2');
         let colText3 = document.createTextNode('3+GT');
         let colText4 = document.createTextNode('4');
         let colText5 = document.createTextNode('5');
         let colText6 = document.createTextNode('6');
         let colText7 = document.createTextNode('7');
         let colText8 = document.createTextNode('8');
         let colText9 = document.createTextNode('9');
         let colText10 = document.createTextNode('10');
        //  if (tabName.includes(dataResident[n].resident_name)){
         for(let cl = 0; cl < 8;cl++){
             let col = document.createElement('td');
             col.setAttribute('id', cl);
             row.appendChild(col);
             if (col.id == 0){
                let colText = document.createTextNode(tabName[n]);
                col.appendChild(colText);
            }
            if (col.id == 1){
                if (semaine.lundi.cave.resident === tabName[n]){
                    col.appendChild(colText5);
                }
                if (semaine.lundi.wc.resident === tabName[n]){
                    col.appendChild(colText7);
                }
                if (semaine.lundi.salleGt.resident === tabName[n]){
                    col.appendChild(colText3);
                }
                if (semaine.lundi.salleAManger.resident === tabName[n]){
                    col.appendChild(colText2);
                }
                if (semaine.lundi.poubelle.resident === tabName[n]){
                    col.appendChild(colText6);
                }
                if (semaine.lundi.ext.resident === tabName[n]){
                    col.appendChild(colText10);
                }
                if (semaine.lundi.couloir.resident1 === tabName[n] || semaine.lundi.couloir.resident2 === tabName[n]){
                    col.appendChild(colText4);
                }
                if (semaine.lundi.frigo.resident1 === tabName[n] || semaine.lundi.frigo.resident2 === tabName[n]){
                    col.appendChild(colText8);
                }
                if (semaine.lundi.cuisine.resident1 === tabName[n] || semaine.lundi.cuisine.resident2 === tabName[n] || semaine.lundi.cuisine.resident3 === tabName[n]){
                    col.appendChild(colText1);
                }
                if (semaine.lundi.ramasse.resident1 === tabName[n] || semaine.lundi.ramasse.resident2 === tabName[n] || semaine.lundi.ramasse.resident3 === tabName[n]){
                    col.appendChild(colText9);
                }
             }
             if (col.id == 2){
                 if (semaine.mardi.wc.resident === tabName[n]){
                     col.appendChild(colText7);
                 }
                 if (semaine.mardi.salleGt.resident === tabName[n]){
                     col.appendChild(colText3);
                 }
                 if (semaine.mardi.salleAManger.resident === tabName[n]){
                     col.appendChild(colText2);
                 }
                 if (semaine.mardi.couloir.resident1 === tabName[n] || semaine.mardi.couloir.resident2 === tabName[n]){
                     col.appendChild(colText4);
                 }
                 if (semaine.mardi.frigo.resident1 === tabName[n] || semaine.mardi.frigo.resident2 === tabName[n]){
                     col.appendChild(colText8);
                 }
                 if (semaine.mardi.cuisine.resident1 === tabName[n] || semaine.mardi.cuisine.resident2 === tabName[n] || semaine.mardi.cuisine.resident3 === tabName[n]){
                     col.appendChild(colText1);
                 }
                 if (semaine.mardi.ramasse.resident1 === tabName[n] || semaine.mardi.ramasse.resident2 === tabName[n] || semaine.mardi.ramasse.resident3 === tabName[n]){
                     col.appendChild(colText9);
                 }
             }
             if (col.id == 3){
                 if (semaine.mercredi.wc.resident === tabName[n]){
                     col.appendChild(colText7);
                 }
                 if (semaine.mercredi.salleGt.resident === tabName[n]){
                     col.appendChild(colText3);
                 }
                 if (semaine.mercredi.salleAManger.resident === tabName[n]){
                     col.appendChild(colText2);
                 }
                 if (semaine.mercredi.couloir.resident1 === tabName[n] || semaine.mercredi.couloir.resident2 === tabName[n]){
                     col.appendChild(colText4);
                 }
                 if (semaine.mercredi.frigo.resident1 === tabName[n] || semaine.mercredi.frigo.resident2 === tabName[n]){
                     col.appendChild(colText8);
                 }
                 if (semaine.mercredi.cuisine.resident1 === tabName[n] || semaine.mercredi.cuisine.resident2 === tabName[n] || semaine.mercredi.cuisine.resident3 === tabName[n]){
                     col.appendChild(colText1);
                 }
                 if (semaine.mercredi.ramasse.resident1 === tabName[n] || semaine.mercredi.ramasse.resident2 === tabName[n] || semaine.mercredi.ramasse.resident3 === tabName[n]){
                     col.appendChild(colText9);
                 }
             }
             if (col.id == 4){
                 if (semaine.jeudi.wc.resident === tabName[n]){
                     col.appendChild(colText7);
                 }
                 if (semaine.jeudi.salleGt.resident === tabName[n]){
                     col.appendChild(colText3);
                 }
                 if (semaine.jeudi.salleAManger.resident === tabName[n]){
                     col.appendChild(colText2);
                 }
                 if (semaine.jeudi.couloir.resident1 === tabName[n] || semaine.jeudi.couloir.resident2 === tabName[n]){
                     col.appendChild(colText4);
                 }
                 if (semaine.jeudi.frigo.resident1 === tabName[n] || semaine.jeudi.frigo.resident2 === tabName[n]){
                     col.appendChild(colText8);
                 }
                 if (semaine.jeudi.cuisine.resident1 === tabName[n] || semaine.jeudi.cuisine.resident2 === tabName[n] || semaine.jeudi.cuisine.resident3 === tabName[n]){
                     col.appendChild(colText1);
                 }
                 if (semaine.jeudi.ramasse.resident1 === tabName[n] || semaine.jeudi.ramasse.resident2 === tabName[n] || semaine.jeudi.ramasse.resident3 === tabName[n]){
                     col.appendChild(colText9);
                 }
             }
             if (col.id == 5){
                 if (semaine.vendredi.cave.resident === tabName[n]){
                     col.appendChild(colText5);
                 }
                 if (semaine.vendredi.wc.resident === tabName[n]){
                     col.appendChild(colText7);
                 }
                 if (semaine.vendredi.salleGt.resident === tabName[n]){
                     col.appendChild(colText3);
                 }
                 if (semaine.vendredi.salleAManger.resident === tabName[n]){
                     col.appendChild(colText2);
                 }
                 if (semaine.vendredi.poubelle.resident === tabName[n]){
                     col.appendChild(colText6);
                 }
                 if (semaine.vendredi.ext.resident === tabName[n]){
                     col.appendChild(colText10);
                 }
                 if (semaine.vendredi.couloir.resident1 === tabName[n] || semaine.vendredi.couloir.resident2 === tabName[n]){
                     col.appendChild(colText4);
                 }
                 if (semaine.vendredi.frigo.resident1 === tabName[n] || semaine.vendredi.frigo.resident2 === tabName[n]){
                     col.appendChild(colText8);
                 }
                 if (semaine.vendredi.cuisine.resident1 === tabName[n] || semaine.vendredi.cuisine.resident2 === tabName[n] || semaine.vendredi.cuisine.resident3 === tabName[n]){
                     col.appendChild(colText1);
                 }
                 if (semaine.vendredi.ramasse.resident1 === tabName[n] || semaine.vendredi.ramasse.resident2 === tabName[n] || semaine.vendredi.ramasse.resident3 === tabName[n]){
                     col.appendChild(colText9);
                 }
             }
             if (col.id == 6) {
                 if (semaine.samedi.wc.resident === tabName[n]){
                     col.appendChild(colText7);
                 }
                 if (semaine.samedi.salleAManger.resident === tabName[n]){
                     col.appendChild(colText2);
                 }
                 if (semaine.samedi.frigo.resident === tabName[n] ){
                     col.appendChild(colText8);
                 }
                 if (semaine.samedi.cuisine.resident1 === tabName[n] || semaine.samedi.cuisine.resident2 === tabName[n] ){
                     col.appendChild(colText1);
                 }
             }
             if (col.id == 7){
                 if (semaine.dimanche.wc.resident === tabName[n]){
                     col.appendChild(colText7);
                 }
                 if (semaine.dimanche.salleAManger.resident === tabName[n]){
                     col.appendChild(colText2);
                 }
                 if (semaine.dimanche.frigo.resident1 === tabName[n] ){
                     col.appendChild(colText8);
                 }
                 if (semaine.dimanche.cuisine.resident1 === tabName[n] || semaine.dimanche.cuisine.resident2 === tabName[n] || semaine.dimanche.cuisine.resident3 === tabName[n]){
                     col.appendChild(colText1);
                 }
             }
        }
    // }
         
}}}).catch(error => console.error(error));   