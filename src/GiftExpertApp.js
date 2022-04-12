import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

  /* const categories = ['Dragon ball', 'Kimetsu no yaiba', 'Kenja no mago', 'Naruto', 'Bleach', 'Tokyo revengers'] */
  /* const [categories, setCategories] = useState(['Dragon ball', 'Kimetsu no yaiba', 'Kenja no mago', 'Naruto', 'Bleach', 'Tokyo revengers']); */

  const [categories, setCategories] = useState(['Vegeta']);



  /* 
    const addCategory = () => {
    // setCategories( [...categories,'Shingeky no kyojin'] );
    // setCategories( ['Shingeky no kyojin',...categories] ); -> Para que este el elemento de primero en la lista
    // Tambien es posible hacerlo con un arrow function
    setCategories( categ => [...categ, 'Shingeky no Kyojin']) //Asi se hace por callback
    } 

  */

  return (
    <>
    
    <h2>GiftExpertApp</h2>
    <AddCategory setCategories={ setCategories }/> 
    <hr />
    <ul>
    { categories.map( category => (
      <GifGrid 
      key={ category }
      category={ category }
      />
    ))}
    </ul>
    </>
  )
}
