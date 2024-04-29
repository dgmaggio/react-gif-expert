import { useState } from 'react';


export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setinputValue] = useState('');

    // const onInputChange = (event) => {
    //     console.log(event.target.value);
    //     setinputValue(event.target.value);
    // }
    // se puede desestructurar y extraer el target y escribirlo así:
    const onInputChange = ( {target} ) => {
        setinputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <=1 ) return;
        // setCategories ( categories => [inputValue, ...categories] );
        setinputValue('');
        onNewCategory( inputValue.trim().toLowerCase() );
    }
    
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                // como el primer argumento es igual al q le mando a la función a ejecutar, se puede obviar
                // onChange={ ( event ) => onInputChange( event ) }
                onChange={ onInputChange }
            />
        </form>
    )
}