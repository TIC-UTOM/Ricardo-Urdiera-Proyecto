import react from 'react';

const Hola = () => {
    return (
        <div class="px-4 py-5 my-5 text-center">
     
            <img class="d-block mx-auto mb-4" src="https://www.cambio16.com/wp-content/uploads/2017/04/fotos-impresionantes-imagenes-que-parecen-modificadas-con-photoshop-11.jpeg" alt="" />
                <h1 class="display-5 fw-bold">Hola, ¿que tal?</h1>
                <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">Esta es la tarea 3 y 4 de comandos y primeras vistas, componentes basicos en 
                en el framework, saludos</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Inicio</button>
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3"> Cancelar</button>
            </div>
            </div>
      </div>
    );
}

export default Hola;