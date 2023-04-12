export let urlBase = 'http://127.0.0.1:5500/';
export let urlImg = 'http://localhost/projet-edvo/application-edvo-v-1.5/front/img/picture-resident/';

export let urlAuth = 'http://localhost:8080/auth/sign-in';
let urlBaseApi = 'http://localhost:8080/edvo/api';

//-------resident 
export let urlGetAllResident = urlBaseApi+'/residents';
export let urlGetResident = urlBaseApi+'/resident/';
export let urlAddResident = urlBaseApi+'/resident/add';
export let urlUpdateResident = urlBaseApi+'/resident/update/';
export let urlDeleteResident = urlBaseApi+'/resident/delete/';
//------tasks 
export let urlGetAllTask = urlBaseApi+'/tasks';
export let urlGetTask = urlBaseApi+'/task/';
export let urlAddTask = urlBaseApi+'/task/add';
export let urlUpdateTask = urlBaseApi+'/task/update/';
export let urlDeleteTask = urlBaseApi+'/task/delete/';


export let headers = {headers: {
    "Content-Type": "multipart/form-data",
    "Authorization": localStorage.getItem('AuthToken'),
}};