const sendEmailMandrill = (el) => {
    $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
            'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
            'message': {
                "html": `<div>
          <p>Estimado colaborador, gracias por estar al día con el seguimiento de la incidencia registrada
          en la región:  ${el.Region}.
         Recuerde, que estamos para apoyarlo.</p>
				 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Logo-engie.svg/1200px-Logo-engie.svg.png" width="100" height="50" class="d-inline-block" alt="engie">
         Atte.
         Empresa ENGIE
         </div>`,

                "text": "Example text content",
                "subject": `Visita de `,
                "from_email": "lucero.g@laboratoria.la",
                "from_name": "ENGIE REPORTA INCIDENCIAS",
                "to": [
                    {
                        "email": `${el.email}`,
                        "name": "Grecia G.A.",
                        "type": "to"
                    }
                ],
                "headers": {
                    "Reply-To": "gutierrezanicamalucero@gmail.com",
                }
            },
            "async": false,
            "ip_pool": "Main Pool",
            "send_at": "2018-10-10 10:00:00"
        }
    });
}

firebase.database().ref().child('Incidencia').on('value', data => {
    const incident = Object.values(data.val());
    content.innerHTML = '';
    incident.forEach((ele) => {
        Object.values(ele).forEach(el => {
            if (el.status = 100) {
                sendEmailMandrill(el);
            }
        })
    })
})
