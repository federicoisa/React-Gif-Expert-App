import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);


    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;

        // categories.push('valorant').. evitarlo a menos que sepa para que se usa, se usa para mutaciones.
        // setCategories(['Valorant',...categories]);
        setCategories([ newCategory, ...categories ]);
        
    }
    
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value) }
                // currentCategories={ categories }
            
            />

            {/* Listado de Gif */}

            
            {
                categories.map(( category )=> (
                        
                        <GifGrid 
                            key={ category } 
                            category= {category}
                        />

                )) 
            }
            
                
        </>
    )
}


