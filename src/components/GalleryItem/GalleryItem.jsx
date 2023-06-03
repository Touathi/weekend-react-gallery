import { useState } from 'react'

function GalleryItem(props) {
    
    const [selected, setSelected] = useState(false)
    

    const likeMyPic = () => {
        
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
        <button>like!!</button>
        </>
    )
}


export default GalleryItem