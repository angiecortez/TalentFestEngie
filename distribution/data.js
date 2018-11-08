const select = document.getElementById('select');
const countries = document.getElementById('countries');
const content = document.getElementById('content');

firebase.database().ref().child('Meses').on('value', function (data) {
  const dataMeses = Object.values(data.val());
  dataMeses.forEach(element => {
    select.innerHTML += `<option>${element}</option>`;
  });
})
const selectMonth = (e) => {
  const val = e.target.value;
  firebase.database().ref().child('Incidencia').on('value', data =>  {
    const numberIncident = Object.keys(data.val());
    const incident = Object.values(data.val());
    let templ = '';
    incident.forEach((ele) => {
      Object.values(ele).forEach((el) => {
        if (val === el.Mes) {
          templ += `
          <div class="card">
          <div class="card-body">
          <div><p>${el.Responsable}<p>
          <p>${el.Sector}<p>
          <p>${el.deadline}<p>
          <p>${el.status}<p></div>
          </div>
          </div>`;
        }
      })
      // if (val === numberIncident) {
        
      // }
    })
    content.innerHTML = templ;
  })
}
select.addEventListener('change', selectMonth);
firebase.database().ref().child('Paises').on('value', function (data) {
  const dataPaises = Object.keys(data.val());
  dataPaises.forEach(el => {
    countries.innerHTML += `<option>${el}</option>`;
  });
})
const selectCountries = (e) => {
  const value = e.target.value;
  firebase.database().ref().child('Incidencia').on('value', function (data) {
    const incidents = Object.values(data.val());
    let template = '';
    incidents.forEach((element) => {
      Object.values(element).forEach((e) => {
        if (value === e.Region) {
          // console.log(value);
          template += `
          <div class="card">
          <div class="card-body">
          <div><p>${e.Responsable}<p>
          <p>${e.Sector}<p>
          <p>${e.deadline}<p>
          <p>${e.status}<p></div>
          </div>
          </div>`;
        }
      })
    })
    content.innerHTML = template;
  })
}
countries.addEventListener('change', selectCountries)



