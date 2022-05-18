import React from 'react';

const Hola = () => {
    return (
        <div class="px-4 py-5 my-5 text-center">
     
            <img class="d-block mx-auto mb-4" src="https://www.cambio16.com/wp-content/uploads/2017/04/fotos-impresionantes-imagenes-que-parecen-modificadas-con-photoshop-11.jpeg" alt="" />
                <h1 class="display-5 fw-bold">Hola, ¿que tal?</h1>
                <div class="col-lg-6 mx-auto">
                <h1>Titulo con un H1</h1>
                <h2>Titulo con H2 en react</h2>
                <h3>Titulo con un h3 en react</h3>
                <p class="lead mb-4">Esta es la tarea 3 y 4 de comandos y primeras vistas, componentes basicos en 
                en el framework, saludo.</p>

                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Tu nombre</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Nombre de usuario" aria-describedby="basic-addon1"/>
                </div>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Inicio</button>
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3"> Cancelar</button>
            </div>
            </div>
      </div>
    );
}

export default Hola;