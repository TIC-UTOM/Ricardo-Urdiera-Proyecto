import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';


//https://gateway.marvel.com:443/v1/public/characters?apikey=56ab2fc363b80a913fb64717d874677a

//Key privada: 07f7d92066fa124b4c4bc91a42ed84741ea40f98
//key publica: 56ab2fc363b80a913fb64717d874677a
//ts:1

//107f7d92066fa124b4c4bc91a42ed84741ea40f9856ab2fc363b80a913fb64717d874677a

//hast: b33de898da505df96aa5c1ae9e2392df

  const Marvel = () => {

    const [personajes, setPersonajes]=useState([])

    useEffect(()=>{
        axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=56ab2fc363b80a913fb64717d874677a&hash=b33de898da505df96aa5c1ae9e2392df').then(res=>{
            setPersonajes(res.data.data.results)
           
        }).catch(error => console.log(error))
    },[])


    console.log(personajes)

    return (
      <div>
        <h1 className="Hol">Api de Marvel</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4">

            { personajes.map( per=>(

                <div class="col mt-2" key={per.id}>
                <div className="card" style={{width: "18rem;", height: "18rem"}}>
                <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" style={{width:"80%", height:"80%"}}/>
                <div className="card-body">
                    <p className="card-text">{per.name}</p>
                </div>
                </div>
                </div>
            ))

        

                }

        </div>
    </div>      
    );
}
export default Marvel;
