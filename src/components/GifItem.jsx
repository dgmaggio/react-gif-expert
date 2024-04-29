import React from 'react'
import { useState } from 'react';

export const GifItem = ( { title, url, id, onButtonClick } ) => {

    const onDeleteItem = ( id ) => {
        onButtonClick(id)
    }
    


    return (
    <div className="card">
        <img src={ url } alt={ title } />
        <div>{ title }</div>
        <button
            onClick={ () => onDeleteItem( id ) }
        >X</button>
    </div>
    )
}
