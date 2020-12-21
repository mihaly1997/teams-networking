
function insertPerson(persons){
    const tbody = document.querySelector('#list tbody');
    tbody.innerHTML = getPersonsHtml(persons); 
}

function getPersonsHtml(persons){

    return persons.map ( getPersonHtml).join("");
}

function getPersonHtml (persons){
    const gitHub = persons.gitHub;
    return `
    <tr >
    <td>${persons.firstName}</td>
    <td>${persons.lastName}</td>
    <td><a href="https://github.com/${gitHub}">
    <img src="github.png" aalt="" width="20px"></a></td>
</tr> `;
}

let allPersons = [];

fetch('persons.json')
.then(res=> res.json())
.then(data=>{
    allPersons= data;
   insertPerson ( data)
});

function searchPersons(text){
    text= text.toLowerCase();
    console.warn("serch", text, allPersons );
    return allPersons.filter(person => {
        console.info({person});
        return person.firstName.toLowerCase().indexOf(text) > -1 ||
        person.lastName.toLowerCase().indexOf(text) > -1 ;

    });
}

const search = document.getElementById('search')
search.addEventListener("input", e => {
    const text = e.target.value
    const filtrate = searchPersons(text);
    insertPerson(filtrate);
})