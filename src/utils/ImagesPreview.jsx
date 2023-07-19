import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const ImagesPreview = ({ imgUrl, styles }) => {
    const { attributes, listeners, setNodeRef, transform, transition} = useSortable({id: imgUrl});
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }
  return (
    <img ref={setNodeRef} {...listeners} {...attributes} style={style} src={imgUrl} className={styles}/>
  )
}

export default ImagesPreview