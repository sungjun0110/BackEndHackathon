const getFormByTeamId = document.getElementById('getFormByTeamId');
const getFormByCompany = document.getElementById('getFormByCompany');
const getFormByTitle = document.getElementById('getFormByTitle');

getFormByTeamId.addEventListener('submit', (e) => getByTeamId(e));
getFormByCompany.addEventListener('submit', (e) => getByCompany(e));
getFormByTitle.addEventListener('submit', (e) => getByTitle(e));

const BASE_URL = "http://localhost:3000/app";

function getByTeamId(e) {
    e.preventDefault();
    const formData = new FormData(getFormByTeamId);
    const teamId = formData.get('teamId');
    fetch(BASE_URL + `/team/${teamId}`).then(res => res.json()).then(data => console.log(data));
}

function getByCompany(e) {
    e.preventDefault();
    const formData = new FormData(getFormByCompany);
    const company = formData.get('company');
    fetch(BASE_URL + `/company/${company}`).then(res => res.json()).then(data => console.log(data));
}

function getByTitle(e) {
    e.preventDefault();
    const formData = new FormData(getFormByTitle);
    const title = formData.get('title');
    fetch(BASE_URL + `/title/${title}`).then(res => res.json()).then(data => console.log(data));
}