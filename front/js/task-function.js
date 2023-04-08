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

function Lundi (cuisine, salleAManger, salleGt, couloir, cave, poubelle, wc, frigo, ramasse, ext){
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
function Mardi (cuisine, salleAManger, salleGt, couloir,wc, frigo, ramasse){
    this.cuisine = cuisine;
    this.salleAManger = salleAManger;
    this.salleGt = salleGt;
    this.couloir = couloir;
    this.wc = wc;
    this.frigo = frigo;
    this.ramasse = ramasse;
}

function Samedi (cuisine, salleAManger,wc, frigo){
    this.cuisine = cuisine;
    this.salleAManger = salleAManger;
    this.wc = wc;
    this.frigo = frigo;
}

function Day (lundi, mardi, mercredi, jeudi, vendredi,samedi, dimanche ){
    this.lundi = lundi;
    this.mardi = mardi;
    this.mercredi = mercredi;
    this.jeudi = jeudi;
    this.vendredi = vendredi;
    this.samedi = samedi;
    this.dimanche = dimanche;
}
function Three (resident1,resident2,resident3){
    this.resident1 = resident1;
    this.resident2 = resident2;
    this.resident3 = resident3;
}
function Two (resident1, resident2){
    this.resident1 = resident1;
    this.resident2 = resident2;
}
function One (resident){
    this.resident = resident;
}

export {Lundi, Mardi,Samedi, Day, getRandomInt, createObjetResident};