console.log("sal")

function printPeron (){
    const tbody = document.querySelector(`#list tbody`);
    tbody.innerHTML = `
    <tr >
    <td>
        Mihaly
    </td>
    <td>
        Kadar
    </td>
    <td>
        <a href="https://github.com/mihaly1997"><img src="github.png" aalt="" width="20px"></a>
    </td>
</tr>`;
}

printPeron();

fetch('persons.json')
.then(res=> res.json())
.then(data=>{
    console.log(`data:`,data);

    printPeron
});

