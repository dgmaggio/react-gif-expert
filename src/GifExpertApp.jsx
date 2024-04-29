import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( [ 'one punch' ] );

    const onAddCategory = ( newCategory ) => {

        newCategory = newCategory.toLowerCase()

        if ( categories.includes( newCategory ) ) return;
        
        setCategories ( [  newCategory, ...categories ] );
        // otra manera:
        // setCategories( cat => [ ...cat, 'Valorant' ] );
    }

    const onDeleteCategory = ( category ) => {
        
        setCategories ( categories.filter(item => item !== category ) );

    }

    return (    
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={ setCategories } 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/* esto tenía un return y llaves pero se puede obviar */}
            {
                categories.map( ( category ) => (
                <GifGrid
                    key={ category }
                    category = { category } 
                    onDeleteCategory={ (value) => onDeleteCategory(value) }
                />
                ))
            }

        </>
    )
}
