const API = {
    CREATE: {
        URL: "create.json",
        METHOD: "GET" //POST
    },
    READ: {
        URL: "team.json",
        METHOD: "GET"
    },
    UPDATE: {
       URL: "",
        METHOD: "GET"
    },
    DELETE: {
        URL: "delete.json",
        METHOD: "GET"
    }
};
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
    <td> <a hre="${API.DELETE.URL}?id=${persons.id}">&#10006</a>
    </td>
</tr> `;
}

let allPersons = [];

function loadList(){
    fetch('persons.json')
    .then(res=> res.json())
    .then(data=>{
        allPersons= data;
       insertPerson ( data)
    });
    
}
loadList()
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
});

function vaveTeamMember() {
    const firstName = document.querySelector("input[name=firstName").value;
    const lastName = document.querySelector("input[name=lastName").value;
    const gitHub = document.querySelector("input[name=gitHub").value;
    
    const person = (
        firstName, lastName,  gitHub
    );
    console.info('saving...', person, JSON.stringify(person))

    fetch(API.CREATE.URL,{
        method: API.CREATE.METHOD,
        body:API.CREATE.METHOD === "GET" ? null : JSON.stringify(person)
    })
    .then(res => res.json())
    .then(r => {
        if (r.success){
            alert()
            loadList()
        }
    });
};

const savebtn = document.querySelector("#list button"); 
savebtn.addEventListener("click", () => {
    vaveTeamMember();
});