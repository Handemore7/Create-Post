import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import React from 'react'

const ImageContainer = ( props ) => {
  
    const { attributes, listeners, setNodeRef, transform, transition} = useSortable({id: props.url});
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

  return (
        <img ref={setNodeRef} style={style} {...attributes} {...listeners} src={props.url} className='h-[10vh]'/>
  )
}

export default ImageContainer