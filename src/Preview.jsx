import { DndContext, closestCenter, TouchSensor, useSensor, useSensors, MouseSensor } from "@dnd-kit/core";
import ImagesPreview from "./utils/ImagesPreview"
import { arrayMove, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable"

/* eslint-disable react/prop-types */
const Preview = ( {data, setData} ) => {

    const imagesStyles = {
      main: "rounded-[50%] w-[30vh] h-[30vh] absolute bottom-[-10vh] right-[-5vh]",
      second: "border-2 border-white w-[12vh] h-[12vh] rounded-full absolute left-[1vh] top-[-2vh] z-30",
      third: "border-2 border-white w-[11vh] h-[11vh] rounded-full absolute left-[8vh] top-[-5vh] z-20",
      fourth: "border-2 border-white w-[10vh] h-[10vh] rounded-full absolute left-[1vh] top-[-9vh] z-10",
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

  return (
    <div className='overflow-hidden relative w-[300px] h-[300px] bg-gradient-to-r from-black to-red-600'>
        <div className='text-white absolute top-2 left-2'>
          <h1 className='font-bold text-lg'>{data.titulo}</h1>
          <h3>{data.descripcion}</h3>
        </div>
        <h2 className='text-white absolute left-[60%] top-10'>$ {(data.valor+".").toString().replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h2>
        <div className='text-white absolute top-[4rem] left-2 text-xs'>
          {
            data.caracteristicas ? 
            data.caracteristicas.split(",").map((feature) => 
            <ul key={feature}>{feature}</ul>
            ): null
          }
        </div> 
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            
            <div className='absolute bottom-0 right-0 w-[70%] h-[18%] z-50'>
              <img src="./FondoInfo.svg" alt="" className='absolute'/>
              <div className='absolute bottom-2 right-[1vh] text-white font-semibold flex justify-between w-[75%] mt-2 '>      
                <div className="relative text-white flex flex-col text-xs text-right ">
                  <span>314 877 9909</span>
                  <span>www.luxa.inmo.co</span>
                </div>
                <img src="./LuxaBlanco.png" className='w-[50px] relative z-0' alt="" />
              </div>
            </div>
            <div className='relative mt-[75%]'>
              <SortableContext items={data.images} strategy={rectSortingStrategy}>
                <ImagesPreview imgUrl={data.images[0]} styles={imagesStyles.main}/>
                <ImagesPreview imgUrl={data.images[1]} styles={imagesStyles.second}/>
                <ImagesPreview imgUrl={data.images[2]} styles={imagesStyles.third}/>
                <ImagesPreview imgUrl={data.images[3]} styles={imagesStyles.fourth}/>
              </SortableContext>
            </div>
          </DndContext>
    </div>
  )
}

export default Preview