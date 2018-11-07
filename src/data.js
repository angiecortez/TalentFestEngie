const select = document.getElementById('select');

firebase.database().ref().child('Paises').on('value', function (data) {
  console.log(data.val());
})
firebase.database().ref().child('Meses').on('value', function (data) {
  const dataMeses = Object.values(data.val());
  dataMeses.forEach(element => {
    select.innerHTML += `<option>${element}</option>`;
  });
})
const change = (e) => {
  const value = e.target.value;
  firebase.database().ref().child('Incidencia').on('value', function (data) {
    const incidents = Object.values(data.val())
    incidents.forEach((element) => {
      Object.values(element).forEach((e) => {
        if (value === e.Mes) {
          console.log(e);
        }
      })
    })
  })
}
select.addEventListener('change', change)

