import react from 'react';

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
        
      
        </div>
        
    );
}

export default Basico;