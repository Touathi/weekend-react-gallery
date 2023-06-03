import { useState } from 'react'
import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList(props) {
    

    return (
        <div>
            <p>Gallery goes here</p>
            {props.Gallery.map(image => 
                <GalleryItem 
                    key={image.id}
                    getGallery={props.getGallery}
                    image={image}
                    path={image.path}
                    description={image.description}
                    likes={image.likes}

                />
            )}

        </div>
    )
}

export default GalleryList