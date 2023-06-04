import { useState } from 'react'
import GalleryItem from "../GalleryItem/GalleryItem"
import './GalleryList.css'


function GalleryList(props) {
    

    return (
        <>
        <div className="image-block">
            {props.Gallery.map(image => 
        <GalleryItem 
        key={image.id}
        image = {image}
        path = {image.path}
        description = {image.description}
        likes=  {image.likes}
        getGallery = {props.getGallery}
        
        />
    
            )}
        </div>
        </>
    )
}

export default GalleryList