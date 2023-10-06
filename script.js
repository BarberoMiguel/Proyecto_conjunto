let formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = event.target.usuario.value;
    const contrasena = event.target.contrasena.value;

    let mensaje = [];

    if (usuario.length < 2 || usuario.length > 30) {
        mensaje.push('Formato de usuario introducido inválido.');
        console.log('Formato de usuario introducido inválido.')
    }

    if (contrasena.length < 2 || contrasena.length > 30) {
        mensaje.push('Formato de contraseña introducido inválido.');
        console.log('Formato de contraseña introducido inválido.')
    }

    if (mensaje != []) {
        let section = document.createElement('section');
        section.setAttribute('id', 'mensajeProblemas');
        document.body.appendChild(section);
        for (i = 0; i < mensaje.length; i++) {
            let parr = document.createElement('p');
            let texto = document.createTextNode(`${mensaje[i]}`);
            section.appendChild(parr);
            parr.appendChild(texto);
        }
    }
})