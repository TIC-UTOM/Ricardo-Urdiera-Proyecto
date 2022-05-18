import React from 'react';

const Lista_desplegable = () => {
    return (
        <div class="btn-group">
            <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Más paginas</a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Inicio</a></li>
                <li><a class="dropdown-item" href="#">Modo Basico</a></li>
                <li><a class="dropdown-item" href="#">React js</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Contactanos</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Instagram</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Fotos</a>
            </li>
            </ul>

        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Desplegable</button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Contacta</a></li>
            <li><a class="dropdown-item" href="#">Utom</a></li>
            <li><a class="dropdown-item" href="#">Clubs</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Accede a instagram</a></li>
        </ul>

            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
            <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
            </nav>
        </div>

);
}

export default Lista_desplegable;