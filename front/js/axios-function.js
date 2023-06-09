import {urlBase} from './global-config.js';

function auth (data, url) {
    axios.post(url, data)
        .then(response => {
            localStorage.setItem('AuthToken', response.data.token);
            window.location.assign('html/home.html');
        })
        .catch(error => console.error(error));
};


function addResident (data, url) {
    axios.post(url, data, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": localStorage.getItem('AuthToken'),
        }})
        .then(response => {
        alert(data.get('resident_name') + " a été ajouter avec succés")
        if (alert){
            window.location.href = urlBase+'html/home.html';
        }
            
    }).catch(error => console.error(error));
};


function updateResident (url, data){
    axios.post(url, data, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": localStorage.getItem('AuthToken'),
        }})
        .then(response => {
            alert(data.get('resident_name') + " a été modifier avec succés")
            if (alert){
                window.location.href = urlBase+'html/home.html';
            }
        })
        .catch(error => console.error(error));
}

export {auth, addResident, updateResident};