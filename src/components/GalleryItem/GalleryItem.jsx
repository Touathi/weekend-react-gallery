import { useState } from 'react'
import axios from 'axios'

function GalleryItem(props ) {
    
    const [selected, setSelected] = useState(false)

    const likeMyPic = () => {
        axios.put(`/gallery/like/${props.image.id}`)
        .then ( response => {
            console.log(response);
            {props.getGallery()}
        })
        .catch ( err => {
            console.log(err);
        })
    }


    return (
        <>
        <div onClick={ () => setSelected( !selected )}>
            { selected ? ( 
                <p>{props.description}</p>
                ) : ( 
                <img src={props.path}></img>
                )
            }
        </div>
        <button onClick={likeMyPic}>like!!</button>
        <p>{props.likes} liked this!!!</p>
        </>
    )
}


export default GalleryItem