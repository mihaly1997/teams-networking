console.log("sal")

function insertPeron ( data){
    const tbody = document.querySelector('#list tbody');
    const firstName = data.firstName;
    const lastName = data.lastName;
    const link = data.link;

    tbody.innerHTML =`
    <tr >
    <td>Mihaly</td>
    <td>Kadar</td>
    <td><a href="https://github.com/mihaly1997"><img src="github.png" aalt="" width="20px"></a></td>
</tr> `;
}
// printPeron (data);


fetch('persons.json')
.then(res=> res.json())
.then(data=>{
    console.log(`data:`,data);

    insertPeron ( data)
});

