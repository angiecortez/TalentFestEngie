google.load('visualization', '1.0', { 'packages': ['corechart'] });
google.setOnLoadCallback(dibujar);
function dibujar() {
    firebase.database().ref().child('Incidencia').on('value', function (data) {

        const dat = Object.keys(data.val());
        console.log(data.val())
        dat.forEach((e) => {
            console.log(Object.values(data.val()[e]).length);
        })
    })
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Pais');
    data.addColumn('number', 'visitas');
    data.addRows(
        [
            ['I1', 452],
            ['I2', 378],
            ['I3', 311],
            ['I4', 200]
        ]
    );
    let opciones = {
        'title': 'incidencias',
        'width': 1000,
        'height': 300,
    }
    let grafico = new google.visualization.PieChart(document.getElementById('chart'));
    grafico.draw(data, opciones);
}
//

google.load('visualization', '1.0', { 'packages': ['corechart'] });
google.setOnLoadCallback(draw);
function draw() {

    firebase.database().ref().child('Incidencia').on('value', function (snap) {
        const dat = Object.values(snap.val());
        let countG = 0;
        let countD = 0;
        let countS = 0;
        dat.forEach((e) => {
            const ar = Object.values(e)
            ar.forEach((el) => {
                console.log(el.Sector)
                if (el.Sector === 'Generación de Energía') {
                    countG += 1
                }
                else if (el.Sector === 'Distribución de Gas Natural') {
                    countD += 1
                }
                else {
                    countS += 1
                }
            });
        })
        let dato = new google.visualization.DataTable();
        dato.addColumn('string', 'Pais');
        dato.addColumn('number', 'visitas');
        dato.addRows(
            [
                ['Generación de energía', 100 + countG],
                ['Distribución de gas natural', 100 + countD],
                ['Servicios', 100 + countS],
            ]
        );
        let opc = {
            'title': 'Cantidad de hipos presentados',
            'width': 1000,
            'height': 300,
        }
        let grafico = new google.visualization.PieChart(document.getElementById('chartHipos'));
        grafico.draw(dato, opc);
    })
}