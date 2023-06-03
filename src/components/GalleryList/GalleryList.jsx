import { useState } from 'react'
// import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList(props) {
    

    return (
        <div>
            <p>Gallery goes here</p>
            {props.Gallery.map(image => 
                <img src={image.path}></img>
            )}

        </div>
    )
}

export default GalleryList