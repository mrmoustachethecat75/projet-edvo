import {nav, createDivTitle} from './global-function.js';
import { urlGetAllTask, headers } from './global-config.js';
import { getAllResident, getAllTask } from './axios-function.js';

let container = document.getElementById('container');
container.setAttribute('class', 'container');
let tabListes = ['add','liste', 'task','trombinoscope', 'test'];
nav(container, tabListes);
let titleText = 'Page de test';
createDivTitle(titleText, container);

Promise.all([getAllTask(headers), getAllResident(headers)])
.then(res => {
    let nbTabtasks = (res[0].data.length) - 1;
    console.log()
    let tabOldCusine = res[0].data[nbTabtasks].tab_cuisine.split(',');
    let tabOldsalle = res[0].data[nbTabtasks].tab_salle.split(',');
    let tabOldGt = res[0].data[nbTabtasks].tab_gt.split(',');
    console.log(tabOldCusine);
    let dataTasks = JSON.parse(res[0].data[nbTabtasks].week_tasks);
    let dataResident = res[1].data;
    console.log(dataTasks);
    let tabName = [];
    let tabId = [];
    for (let n = 0; n<=dataResident.length-1; n++){
        if (dataResident[n].resident_status != 2){
            tabName.push(dataResident[n].resident_name);
            tabId.push(dataResident[n].id);
        }
        
    }

    
   
    let lundi = dataTasks.lundi;
    let lundiCuisine = lundi.cuisine;
    let lundiSalle = lundi.salle;
   
    let mardi = dataTasks.mardi;
    let mercredi = dataTasks.mercredi;
    let jeudi = dataTasks.jeudi;
    let vendredi = dataTasks.vendredi;
    let samedi = dataTasks.samedi;
    let dimanche = dataTasks.dimanche; 
    
    
   
})



