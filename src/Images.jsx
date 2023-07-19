import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import ImageContainer from "./utils/imageContainer";

const UploadAndDisplayImage = ({data, setData}) => {

  function onImageChange(event) {
        let newImages = [...data.images];
        for (let i = 0; i < event.target.files.length; i++) {
            newImages.push(URL.createObjectURL(event.target.files[i]))
        }
        setData({...data, [event.target.name]: newImages})
  }

  function handleDragEnd(event) {
    const {active, over} = event;
    console.log('active: ' +active.id);
    console.log('disabled: ' +over.id);
    if (active.id !== over.id) {
      setData((items) => {
        const activeIndex = items.images.indexOf(active.id);
        const overIndex = items.images.indexOf(over.id);
        
        return {...data, images: arrayMove(items.images, activeIndex, overIndex)}
      })
    }
  }

  return (
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} >
      <input type="file" multiple accept="image/*" name='images' onChange={onImageChange} />
        <SortableContext items={data.images} strategy={rectSortingStrategy} >
          <div className="flex">
            {data.images.map(imageSrc => <ImageContainer key={imageSrc} url={imageSrc}/>)}
          </div>
        </SortableContext>
      </DndContext>
  );
};

export default UploadAndDisplayImage;