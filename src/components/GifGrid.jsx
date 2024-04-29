import { GifItem } from './GifItem'
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category, onDeleteCategory }) => {

    const { images, setImages, isLoading  } = useFetchGifs( category );    

    const handleClick = (key) => {
        console.log(`Clic en el botón con ID: ${key}`);                
        let newImages = images.filter(item => item.id !== key);   
        setImages( newImages )
      };
    

      
    return (
    <>        
        <h3>{ category }</h3>
        <button
            onClick={ () => onDeleteCategory( category ) }
        > X </button>

        {
            isLoading && ( <p>Cargando...</p> )
        }
        

        <div className="card-grid">
            {
                images.map( ( image ) => (
                    <GifItem
                        onButtonClick={handleClick}
                        key={ image.id } 
                        // title={ image.title } 
                        // url={ image.url } 
                        // esto hace esparcir las props properties con el operador spread
                        { ...image }
                    />
                ))
            }
        </div>
    </>
  )
}


/*
useEffect es un hook de react q sirve para disparar efectos secundarios.
efecto secundario: algún proceso q quiero ejecutar cuando suceda algo

88: como meter un is loading con un usestate
*/