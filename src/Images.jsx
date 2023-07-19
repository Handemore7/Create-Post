import { DndContext, closestCenter, TouchSensor, useSensor, useSensors, MouseSensor } from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import ImageContainer from "./utils/ImageContainer";

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

    if (active.id !== over.id) {
      setData((items) => {
        const activeIndex = items.images.indexOf(active.id);
        const overIndex = items.images.indexOf(over.id);
        
        return {...data, images: arrayMove(items.images, activeIndex, overIndex)}
      })
    }
  }
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });
  const mouseSensor = useSensor(MouseSensor);

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
  );

  return (
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} >
      <input type="file" multiple accept="image/*" name='images' onChange={onImageChange} />
        <SortableContext items={data.images} strategy={rectSortingStrategy} >
          <div className="flex flex-wrap">
            {data.images.map((imageSrc, i) => <ImageContainer key={imageSrc} url={imageSrc} value={i}/>)}
          </div>
        </SortableContext>
      </DndContext>
  );
};

export default UploadAndDisplayImage;