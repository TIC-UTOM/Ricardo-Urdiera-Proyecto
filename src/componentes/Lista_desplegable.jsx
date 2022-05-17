import react from 'react';

const Lista_desplegable = () => {
    return (
        <div class="btn-group">
        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Action
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Contacta</a></li>
            <li><a class="dropdown-item" href="#">Utom</a></li>
            <li><a class="dropdown-item" href="#">Clubs</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Accede a instagram</a></li>
        </ul>
        </div>

);
}

export default Lista_desplegable;