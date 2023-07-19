import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const ImageContainer = ( props ) => {
  
    const { attributes, listeners, setNodeRef, transform, transition} = useSortable({id: props.url});
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

  return (
    <div className='h-[10vh] w-[10vh] flex relative border border-red-500'>
      <img ref={setNodeRef} className='w-full h-full object-cover' style={style} {...attributes} {...listeners} src={props.url}/>
      {props.value <= 3 ? 
        <div className='bg-white h-[2.5vh] w-[2.5vh] absolute align-middle flex'>
          <span className='text-black text-sm w-full text-center'>{props.value + 1}</span>
        </div>
        : ''
      }
    </div>
  )
}

export default ImageContainer