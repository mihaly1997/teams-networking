const API = {
    CREATE: {
        URL: "http://localhost:3000/teams-json/create",
        METHOD: "POST" 
    },
    READ: {
        URL: "http://localhost:3000/teams-json",
        METHOD: "GET"
    },
    UPDATE: {
       URL: "http://localhost:3000/teams-json/update",
        METHOD: "PUT"
    },
    DELETE: {
        URL: "http://localhost:3000/teams-json/delete",
        METHOD: "DELETE"
    }
};
function insertPerson(persons){
    const tbody = document.querySelector('#list tbody');
    tbody.innerHTML = getPersonsHtml(persons); 
}

function getPersonsHtml(persons){

    return persons.map ( getPersonHtml).join("");
}

function getPersonHtml (person){
    const gitHub = person.gitHub;
    return `
    <tr >
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td><a href="https://github.com/${gitHub}">
    <img src="github.png" alt="" width="20px"></a></td>
    <td> <a href="#" class="delete-row" data-id="${person.id}">&#10006</a>
    </td>
</tr> `;
}

let allPersons = [];

function loadList(){
    fetch(API.READ.URL)
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

function vaveTeamMember() {
    const firstName = document.querySelector("input[name=firstName").value;
    const lastName = document.querySelector("input[name=lastName").value;
    const gitHub = document.querySelector("input[name=gitHub").value;
    
    const person = {
        firstName, lastName,  gitHub
    };
    console.info('saving: ', person, JSON.stringify(person))

    fetch(API.CREATE.URL,{
        method: API.CREATE.METHOD,
        headers: {
            "Content-Type": "application/json"
          },
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
function deleteTermMember (id){
    fetch("http://localhost:3000/teams-json/delete", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ id })
});
}
   

function addEventListener(){

    const search = document.getElementById('search')
    search.addEventListener("input", e => {
        const text = e.target.value
        const filtrate = searchPersons(text);
        insertPerson(filtrate);
    });
    
    
    
    
    const savebtn = document.querySelector("#list tfoot button"); 
    savebtn.addEventListener("click", () => {
        vaveTeamMember();
    });

    const table = document.querySelector("#list tbody ");
    table.addEventListener("click", (e) => {
        const target =e.target
        if(target.matches("a.delete-row")) {
            console.warn( "click" .target );
            const id=target.getAttribute("data-id");
            deleteTermMember(id);      
          }
        
    });
}

addEventListener()
