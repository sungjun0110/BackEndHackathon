const getForm = document.getElementById('getForm');

getForm.addEventListener('submit', (e) => testFunction(e));

const BASE_URL = "http://localhost:3000/app";

function testFunction(e) {
    e.preventDefault();
    const formData = new FormData(getForm);
    const attendeeId = formData.get('attendeeId');
    fetch("http://localhost:3000/app" + `/team/${attendeeId}`).then(res => res.json()).then(data => console.log(data));
}