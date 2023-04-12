import {nav, createDivTitle} from './global-function.js';
import { urlAddTask, headers} from './global-config.js';
import { getAllResident, getAllTask } from './axios-function.js';


let container = document.getElementById('container');
container.setAttribute('class', 'container');
let tabListes = ['home','add','liste', 'trombinoscope'];
nav(container, tabListes);
let titleText = 'Tasks';
createDivTitle(titleText, container);
let divBtnCreateTasks = document.createElement('div');
divBtnCreateTasks.setAttribute('class', 'div-form-add');
divBtnCreateTasks.setAttribute('id', 'div-form-add');
container.appendChild(divBtnCreateTasks);
let divVueTable = document.createElement('div');
divVueTable.setAttribute('class', 'div-vue-table');
container.appendChild(divVueTable);

function divTitle (tex){
    let tableTitle = document.createElement('h3');
    let tableTitleText = document.createTextNode(tex);
    tableTitle.appendChild(tableTitleText);
    return tableTitle;
}

function createTable (tabN, data) {    
    let divTable = document.createElement('div');
    divTable.setAttribute('class', 'div-table');
    let table = document.createElement('table');
    table.setAttribute('id', 'table');
    divTable.appendChild(table);
    let thead = document.createElement('thead');
    table.appendChild(thead);
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
    let tdNbTaskText = document.createTextNode('Nombres de tâches');
    tdNbTask.appendChild(tdNbTaskText);
    trTitle.appendChild(tdNbTask);
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    let nbtask = 0;
    for (let n=0; n<tabN.length; n++){
        let row = document.createElement('tr');
        row.setAttribute('id',"row-"+n);
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
        for(let cl = 0; cl <= 8;cl++){
            let col = document.createElement('td');
            col.setAttribute('id', cl);
            col.setAttribute('class', 'col');
            row.appendChild(col);
            if (col.id == 0){
            let colText = document.createTextNode(tabN[n]);
            col.appendChild(colText);
            }
            if (col.id == 1){
                if (data.lundi.cave.resident === tabN[n]){
                    col.appendChild(colText5);
                }
                if (data.lundi.wc.resident === tabN[n]){
                    col.appendChild(colText7);
                }
                if (data.lundi.salleGt.resident === tabN[n]){
                    col.appendChild(colText3);
                }
                if (data.lundi.salleAManger.resident === tabN[n]){
                    col.appendChild(colText2);
                }
                if (data.lundi.poubelle.resident === tabN[n]){
                    col.appendChild(colText6);
                }
                if (data.lundi.ext.resident === tabN[n]){
                    col.appendChild(colText10);
                }
                if (data.lundi.couloir.resident1 === tabN[n] || data.lundi.couloir.resident2 === tabN[n]){
                    col.appendChild(colText4);
                }
                if (data.lundi.frigo.resident1 === tabN[n] || data.lundi.frigo.resident2 === tabN[n]){
                    col.appendChild(colText8);
                }
                if (data.lundi.cuisine.resident1 === tabN[n] || data.lundi.cuisine.resident2 === tabN[n] || data.lundi.cuisine.resident3 === tabN[n]){
                    col.appendChild(colText1);
                }
                if (data.lundi.ramasse.resident1 === tabN[n] || data.lundi.ramasse.resident2 === tabN[n] || data.lundi.ramasse.resident3 === tabN[n]){
                    col.appendChild(colText9);
                }
            }
            if (col.id == 2){
                if (data.mardi.wc.resident === tabN[n]){
                    col.appendChild(colText7);
                }
                if (data.mardi.salleGt.resident === tabN[n]){
                    col.appendChild(colText3);
                }
                if (data.mardi.salleAManger.resident === tabN[n]){
                    col.appendChild(colText2);
                }
                if (data.mardi.couloir.resident1 === tabN[n] || data.mardi.couloir.resident2 === tabN[n]){
                    col.appendChild(colText4);
                }
                if (data.mardi.frigo.resident1 === tabN[n] || data.mardi.frigo.resident2 === tabN[n]){
                    col.appendChild(colText8);
                }
                if (data.mardi.cuisine.resident1 === tabN[n] || data.mardi.cuisine.resident2 === tabN[n] || data.mardi.cuisine.resident3 === tabN[n]){
                    col.appendChild(colText1);
                }
                if (data.mardi.ramasse.resident1 === tabN[n] || data.mardi.ramasse.resident2 === tabN[n] || data.mardi.ramasse.resident3 === tabN[n]){
                    col.appendChild(colText9);
                }
            }
            if (col.id == 3){
                if (data.mercredi.wc.resident === tabN[n]){
                    col.appendChild(colText7);
                }
                if (data.mercredi.salleGt.resident === tabN[n]){
                    col.appendChild(colText3);
                }
                if (data.mercredi.salleAManger.resident === tabN[n]){
                    col.appendChild(colText2);
                }
                if (data.mercredi.couloir.resident1 === tabN[n] || data.mercredi.couloir.resident2 === tabN[n]){
                    col.appendChild(colText4);
                }
                if (data.mercredi.frigo.resident1 === tabN[n] || data.mercredi.frigo.resident2 === tabN[n]){
                    col.appendChild(colText8);
                }
                if (data.mercredi.cuisine.resident1 === tabN[n] || data.mercredi.cuisine.resident2 === tabN[n] || data.mercredi.cuisine.resident3 === tabN[n]){
                    col.appendChild(colText1);
                }
                if (data.mercredi.ramasse.resident1 === tabN[n] || data.mercredi.ramasse.resident2 === tabN[n] || data.mercredi.ramasse.resident3 === tabN[n]){
                    col.appendChild(colText9);
                }
            }
            if (col.id == 4){
                if (data.jeudi.wc.resident === tabN[n]){
                    col.appendChild(colText7);
                }
                if (data.jeudi.salleGt.resident === tabN[n]){
                    col.appendChild(colText3);
                }
                if (data.jeudi.salleAManger.resident === tabN[n]){
                    col.appendChild(colText2);
                }
                if (data.jeudi.couloir.resident1 === tabN[n] || data.jeudi.couloir.resident2 === tabN[n]){
                    col.appendChild(colText4);
                }
                if (data.jeudi.frigo.resident1 === tabN[n] || data.jeudi.frigo.resident2 === tabN[n]){
                    col.appendChild(colText8);
                }
                if (data.jeudi.cuisine.resident1 === tabN[n] || data.jeudi.cuisine.resident2 === tabN[n] || data.jeudi.cuisine.resident3 === tabN[n]){
                    col.appendChild(colText1);
                }
                if (data.jeudi.ramasse.resident1 === tabN[n] || data.jeudi.ramasse.resident2 === tabN[n] || data.jeudi.ramasse.resident3 === tabN[n]){
                    col.appendChild(colText9);
                }
            }
            if (col.id == 5){
                if (data.vendredi.cave.resident === tabN[n]){
                    col.appendChild(colText5);
                }
                if (data.vendredi.wc.resident === tabN[n]){
                    col.appendChild(colText7);
                }
                if (data.vendredi.salleGt.resident === tabN[n]){
                    col.appendChild(colText3);
                }
                if (data.vendredi.salleAManger.resident === tabN[n]){
                    col.appendChild(colText2);
                }
                if (data.vendredi.poubelle.resident === tabN[n]){
                    col.appendChild(colText6);
                }
                if (data.vendredi.ext.resident === tabN[n]){
                    col.appendChild(colText10);
                }
                if (data.vendredi.couloir.resident1 === tabN[n] || data.vendredi.couloir.resident2 === tabN[n]){
                    col.appendChild(colText4);
                }
                if (data.vendredi.frigo.resident1 === tabN[n] || data.vendredi.frigo.resident2 === tabN[n]){
                    col.appendChild(colText8);
                }
                if (data.vendredi.cuisine.resident1 === tabN[n] || data.vendredi.cuisine.resident2 === tabN[n] || data.vendredi.cuisine.resident3 === tabN[n]){
                    col.appendChild(colText1);
                }
                if (data.vendredi.ramasse.resident1 === tabN[n] || data.vendredi.ramasse.resident2 === tabN[n] || data.vendredi.ramasse.resident3 === tabN[n]){
                    col.appendChild(colText9);
                }
            }
            if (col.id == 6) {
                if (data.samedi.wc.resident === tabN[n]){
                    col.appendChild(colText7);
                }
                if (data.samedi.salleAManger.resident === tabN[n]){
                    col.appendChild(colText2);
                }
                if (data.samedi.frigo.resident === tabN[n] ){
                    col.appendChild(colText8);
                }
                if (data.samedi.cuisine.resident1 === tabN[n] || data.samedi.cuisine.resident2 === tabN[n] ){
                    col.appendChild(colText1);
                }
            }
            if (col.id == 7){
                if (data.dimanche.wc.resident === tabN[n]){
                    col.appendChild(colText7);
                }
                if (data.dimanche.salleAManger.resident === tabN[n]){
                    col.appendChild(colText2);
                }
                if (data.dimanche.frigo.resident1 === tabN[n] ){
                    col.appendChild(colText8);
                }
                if (data.dimanche.cuisine.resident1 === tabN[n] || data.dimanche.cuisine.resident2 === tabN[n] || data.dimanche.cuisine.resident3 === tabN[n]){
                    col.appendChild(colText1);
                }
            }
            
            
            if (col.id == 8){
                console.log(data.nbTasks);
                let textNb = document.createTextNode(data.nbTasks[n]);
                    col.appendChild(textNb);
            
            }
    }}
    return divTable;
    }

Promise.all([getAllTask(headers), getAllResident(headers)])
.then(res => {
    let nbD = (res[0].data.length) - 1;
    let dataTasks = JSON.parse(res[0].data[nbD].week_tasks);
    console.log(dataTasks.nbTasks);
    let dataTasksDate = res[0].data[nbD].created_at;
    let dataResident = res[1].data.sort((x, y) => x.id - y.id);
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
    let divBeforeWeek = createTable(tabName, dataTasks);
    let titleOldTable = divTitle(dataTasksDate.slice(0,10));
    divBeforeWeek.prepend(titleOldTable);
    
    let btnCreateTasks = document.createElement('button');
    container.appendChild(btnCreateTasks);
    btnCreateTasks.innerHTML = 'Crée le tableau des tâches';
    divBtnCreateTasks.appendChild(btnCreateTasks);
    btnCreateTasks.onclick = function(){
    
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        function createObjetResident (tab, data){
            let res = data;
            let nbRes = res.length;
            let index1 = res[0];
            let index2 = res[1];
            let index3 = res[2];
            let objetRes = new NbTask(tab[index1],tab[index2],tab[index3],nbRes);
            return objetRes;
        }
        function CreateObjetDay (cuisine, salleAManger, salleGt, couloir, cave, poubelle, wc, frigo, ramasse, ext, nb){
            if (nb === 1){
                this.cuisine = cuisine;
                this.salleAManger = salleAManger;
                this.salleGt = salleGt;
                this.couloir = couloir;
                this.cave = cave;
                this.poubelle = poubelle;
                this.wc = wc;
                this.frigo = frigo;
                this.ramasse = ramasse;
                this.ext = ext;
            }
            if (nb === 2){
                this.cuisine = cuisine;
                this.salleAManger = salleAManger;
                this.salleGt = salleGt;
                this.couloir = couloir;
                this.wc = wc;
                this.frigo = frigo;
                this.ramasse = ramasse;
            }
            if (nb === 3) {
                this.cuisine = cuisine;
                    this.salleAManger = salleAManger;
                    this.wc = wc;
                    this.frigo = frigo;
            }
        }
        
        function Day (lundi, mardi, mercredi, jeudi, vendredi,samedi, dimanche , nbTasks){
            this.lundi = lundi;
            this.mardi = mardi;
            this.mercredi = mercredi;
            this.jeudi = jeudi;
            this.vendredi = vendredi;
            this.samedi = samedi;
            this.dimanche = dimanche;
            this.nbTasks = nbTasks;
        }
        function NbTask (resident1,resident2,resident3,nbTask) {
            if (nbTask === 1){  
                this.resident = resident1;
            }
            if (nbTask === 2){
                this.resident1 = resident1;
                this.resident2 = resident2;
            }
            if (nbTask === 3){
                this.resident1 = resident1;
                this.resident2 = resident2;
                this.resident3 = resident3;
            }
        }
        
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
        let lundi = new CreateObjetDay (createObjetResident(tabName,cuisine(3,tablundi)),createObjetResident(tabName,salle(1,tablundi)),createObjetResident(tabName,gt(1,tablundi)),createObjetResident(tabName,couloir(2,tablundi)),createObjetResident(tabName,cave(1,tablundi)),createObjetResident(tabName,poubelle(1,tablundi)),createObjetResident(tabName,wc(1,tablundi)),createObjetResident(tabName,frigo(2,tablundi)),createObjetResident(tabName,ramasse(3,tablundi)),createObjetResident(tabName,ext(1,tablundi)), 1);
        let mardi = new CreateObjetDay (createObjetResident(tabName,cuisine(3,tabMardi)),createObjetResident(tabName,salle(1,tabMardi)),createObjetResident(tabName,gt(1,tabMardi)),createObjetResident(tabName,couloir(2,tabMardi)),'cave','poubelle',createObjetResident(tabName,wc(1,tabMardi)),createObjetResident(tabName,frigo(2,tabMardi)),createObjetResident(tabName,ramasse(3,tabMardi)),'ext', 2);
        let mercredi = new CreateObjetDay (createObjetResident(tabName,cuisine(3,tabMercredi)),createObjetResident(tabName,salle(1,tabMercredi)),createObjetResident(tabName,gt(1,tabMercredi)),createObjetResident(tabName,couloir(2,tabMercredi)),'cave','poubelle',createObjetResident(tabName,wc(1,tabMercredi)),createObjetResident(tabName,frigo(2,tabMercredi)),createObjetResident(tabName,ramasse(3,tabMercredi)),'ext', 2);
        let jeudi = new CreateObjetDay (createObjetResident(tabName,cuisine(3,tabJeudi)),createObjetResident(tabName,salle(1,tabJeudi)),createObjetResident(tabName,gt(1,tabJeudi)),createObjetResident(tabName,couloir(2,tabJeudi)),'cave','poubelle',createObjetResident(tabName,wc(1,tabJeudi)),createObjetResident(tabName,frigo(2,tabJeudi)),createObjetResident(tabName,ramasse(3,tabJeudi)),'ext', 2);
        let vendredi = new CreateObjetDay (createObjetResident(tabName,cuisine(3,tabVendredi)),createObjetResident(tabName,salle(1,tabVendredi)),createObjetResident(tabName,gt(1,tabVendredi)),createObjetResident(tabName,couloir(2,tabVendredi)),createObjetResident(tabName,cave(1,tabVendredi)),createObjetResident(tabName,poubelle(1,tabVendredi)),createObjetResident(tabName,wc(1,tabVendredi)),createObjetResident(tabName,frigo(2,tabVendredi)),createObjetResident(tabName,ramasse(3,tabVendredi)),createObjetResident(tabName,ext(1,tabVendredi)), 1);
        let samedi = new CreateObjetDay (createObjetResident(tabName,cuisine(3,tabSamedi)),createObjetResident(tabName,salle(1,tabSamedi)),'gt','couloir','cave','poubelle',createObjetResident(tabName,wc(1,tabSamedi)),createObjetResident(tabName,frigo(2,tabSamedi)),'ramasse','ext', 3);
        let dimanche = new CreateObjetDay (createObjetResident(tabName,cuisine(3,tabDimanche)),createObjetResident(tabName,salle(1,tabDimanche)),'gt','couloir','cave','poubelle',createObjetResident(tabName,wc(1,tabDimanche)),createObjetResident(tabName,frigo(2,tabDimanche)),'ramasse','ext', 3);
        let tabAll = tabCuisine.concat(tabSalle,tabGt,tabCouloir,tabCave,tabPoubelle,tabWc,tabFrigo,tabRam,tabExt);
        console.log(tabAll.length);
        // tabAll.sort(function(a,b){
        //     return a-b;
        // });
        let tabNbTask = [];
        let count = 0;
        for (let y=0;y<=tabId.length;y++){
            for (let element of tabAll){
                console.log(element);
                if (element === y){
                    count++;
                }
                
            }
            tabNbTask.push(count);
            count = 0;
        }
        
        
        let semaine = new Day(lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche, tabNbTask);
        console.log(semaine);
        let date = new Date();
        let day = date.getDate();
        let mouth = (date.getMonth()+1);
        let year = date.getFullYear();
        let divNewWeek = createTable(tabName, semaine);
        divVueTable.appendChild(divNewWeek);
        let titleNewTable = divTitle(year+"-"+"0"+mouth+"-0"+day);
        divNewWeek.prepend(titleNewTable);
        
        
        
        console.log(tabNbTask);
      
        let dataTask = new FormData();
        dataTask.append('week_tasks', JSON.stringify(semaine));
        dataTask.append('tab_cuisine', tabCuisine);
        dataTask.append('tab_salle', tabSalle);
        dataTask.append('tab_gt',tabGt);
        dataTask.append('tab_couloir', tabCouloir);
        dataTask.append('tab_cave', tabCave);
        dataTask.append('tab_poubelle', tabPoubelle);
        dataTask.append('tab_wc', tabWc);
        dataTask.append('tab_frigo', tabFrigo);
        dataTask.append('tab_ramasse', tabRam);
        dataTask.append('tab_ext', tabExt);
        dataTask.append('tab_nb_tasks',tabNbTask);
        console.log(dataTask)
        // axios.post(urlAddTask, dataTask, {
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //         "Authorization": localStorage.getItem('AuthToken'),
        //     }})
        //     .then(response => {
                
        // }).catch(error => console.error(error));
       
        
        
    }
    divVueTable.appendChild(divBeforeWeek);
   
}).catch(error => console.error(error)); 




 
