const table = document.getElementById('table');
firebase.database().ref().child('Incidencia').on('value', function (data) {
    const incident = Object.values(data.val());
    table.innerHTML = '';
    incident.forEach((ele) => {
        Object.values(ele).forEach(el => {
            table.innerHTML += `
   <tr><th scope="row">${el.nro}</th>
   <td>${el.Responsable}</td>
   <td>${el.Description}</td>
   <td>${el.deadline}</td>
   <td>${el.Region}</td>
   <td>${el.Sede}</td>
   <td>${el.Sector}</td>
   </tr>
`
        })
    })
});


