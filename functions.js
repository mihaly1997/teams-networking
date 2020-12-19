console.log("sal")

function insertPeron ( data){
    const tbody = document.querySelector('#list tbody');
    const firstName = data[0].firstName;
    const lastName = data[0].lastName;
    const gitHub = data[0].gitHub;

    console.log({firstName,lastName,gitHub})
    tbody.innerHTML =`
    <tr >
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td><a href="https://github.com/${gitHub}"><img src="github.png" aalt="" width="20px"></a></td>
</tr> `;
}
// printPeron (data);


fetch('persons.json')
.then(res=> res.json())
.then(data=>{
   insertPeron ( data)
});

