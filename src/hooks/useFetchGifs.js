import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    
    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }

    useEffect( () => {
        getImages();
    }, [] );

    return {
        // mando las imágenes así
        // images: images,
        // cuando tenés una propiedad que apunta a una variable con el mismo nombre se puede dejar así
        images,
        setImages,
        isLoading
    }
}


