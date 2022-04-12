import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
/* import { useState, useEffect } from 'react'; */ //useEffect -> permite ejecutar cierto codigo de manera condicional
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( { category } ) => {

  const { data: images, loading } = useFetchGifs( category );


/*   const [images, setImages] = useState([]);

  useEffect( () => { //Solo permite que se ejecute esa instruccion cuando el componente es generado por primera vez

    getGifs( category )
    .then(imgs => setImages( imgs ))

  }, [ category ]) //recibe un arreglo de dependencias */
  

  return (
    <>
    <h3 className='category animate__animated animate__fadeIn'> { category } </h3>

    { loading && <h3 className='animate__animated animate__zoomInDown'> Cargando imagenes...</h3> }



    <section className='gif__grid'>

        { images.map( img => ( //Cuando se manda una etiqueta de componente es mejor hacerlo como un objeto.
          <GifGridItem 
          key={ img.id}
          { ...img } 
          />
        )) }
      
    </section>
    </>
  )
}
