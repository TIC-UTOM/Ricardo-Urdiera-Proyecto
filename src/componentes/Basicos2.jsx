import React from 'react';

const Basico = () => {
    return (
        <div class="text-right">
        <div class="alert alert-success" role="alert">
            A simple success alert—check it out! </div>
        <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!</div>

        <button type="button" class="btn btn-primary position-relative" >Inbox
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        99+<span class="visually-hidden">unread messages</span></span></button>
        
      
        <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
            <a class="page-link" href="#">Siguiente</a>
            </li>
        </ul>
</nav>
        </div>
        
    );
}

export default Basico;