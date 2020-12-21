console.log("sal")

function insertPeron(persons){
    const tbody = document.querySelector('#list tbody');
    tbody.innerHTML = getPersonsHtml(persons); 
}

function getPersonsHtml(persons){
    return getPersonHtml(persons[0]) + getPersonHtml(persons[1]);
}

function getPersonHtml (persons){
    const gitHub = persons.gitHub;
    return `
    <tr >
    <td>${persons.firstName}</td>
    <td>${persons.lastName}</td>
    <td><a href="https://github.com/${gitHub}"><img src="github.png" aalt="" width="20px"></a></td>
</tr> `;
}


fetch('persons.json')
.then(res=> res.json())
.then(data=>{
   insertPeron ( data)
});

