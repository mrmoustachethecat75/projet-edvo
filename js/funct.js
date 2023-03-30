import {One, Two, Three} from './obj.js';

function addResident (data, url) {
    axios.post(url, data, {
        headers: {
            "Content-Type": "multipart/form-data",'Authorization': 'Bearer'+localStorage.getItem('adminToken'),
        }})
        .then(response => {
            window.location.reload();
            

        })
        .catch(error => console.error(error));
};

function dellResident (id, url){
    axios.post(url+id, {
    headers: {
    "Content-Type": "multipart/form-data",'Authorization': 'Bearer'+localStorage.getItem('adminToken'),
    }})
    .then(response => {
    window.location.reload()
    })
    .catch(error => console.error(error));
    
};

function updateResident (url, data){
    axios.post(url, data, {
        headers: {
            "Content-Type": "multipart/form-data",'Authorization': 'Bearer'+localStorage.getItem('adminToken'),
        }})
        .then(response => {
            window.location.reload();
        
        })
        .catch(error => console.error(error));
}
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
    if (nbRes === 1){
        let objetRes = new One (tab[index1]);
        return objetRes;
    }
    if (nbRes === 2){
        let objetRes = new Two (tab[index1],tab[index2]);
        return objetRes;
    }
    if (nbRes === 3){
        let objetRes = new Three (tab[index1],tab[index2],tab[index3]);
        return objetRes;
    }
    
}




export {addResident, dellResident, updateResident, getRandomInt, createObjetResident};



