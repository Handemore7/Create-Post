import { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';

function App() {

  const domEl = useRef(null);

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);
 
    // download image
    const link = document.createElement('a');
    link.download = "html-to-img.png";
    link.href = dataUrl;
    link.click();
  }

  //State that manages all the image info
  const [data, setData] = useState({
      titulo: "",
      descripcion: "",
      valor: 12000000,
      logo: "url",
      caracteristicas: ""
  })

  var newCaracteristicas = data.caracteristicas.split(",")

  function onChangeValue(event) {
    setData({...data, [event.target.name]: event.target.value})
  }

  return (
    <>
      {/* Image visualization */}
      <div ref={domEl} className='overflow-hidden relative w-[300px] h-[300px] bg-gradient-to-r from-black to-red-600'>
        
        <div className='text-white absolute top-2 left-2'>
          <h1 className='font-bold text-lg'>{data.titulo}</h1>
          <h3>{data.descripcion}</h3>
        </div>
        <h2 className='text-white absolute left-[60%] top-10'>$ {(data.valor+".").toString().replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h2>
        <div className='text-white absolute top-[4rem] left-2 text-xs'>
          {
            newCaracteristicas.map((feature) => 
            <ul key={feature}>{feature}</ul>
            )
          }
        </div>
          <img className=' rounded-[50%] w-[30vh] h-[30vh] absolute bottom-[-0vh] right-[-5vh]' src="./img1.jpeg" alt="" />
          <div className='absolute bottom-0 right-0 w-[75%] h-[18%]'>
              <img src="./LuxaBlanco.png" className='w-[50px] top-2 right-2 absolute' alt="" />
            <div className='absolute text-white left-[28%] bottom-3 flex flex-col text-xs justify-end text-right'>
              <span>314 877 9909</span>
              <span>www.luxa.inmo.co</span>
            </div>
            <img src="./FondoInfo.svg" alt="" className=''/>
          </div>
          <div className='relative mt-[75%]'>
            <img className='border-2 border-white w-[10vh] h-[10vh] rounded-full absolute left-[1vh] top-[-9vh]' src="./img4.jpeg" alt="" />
            <img className='border-2 border-white w-[11vh] h-[11vh] rounded-full absolute left-[8vh] top-[-5vh]' src="./img3.jpeg" alt="" />
            <img className='border-2 border-white w-[12vh] h-[12vh] rounded-full absolute left-[1vh] top-[-2vh]' src="./img2.jpeg" alt="" />
          </div>
      </div>


      {/* Form data */}
      <form className='m-5'>
        <div className='flex flex-col mb-5'>
          <span>Titulo</span>
          <input value={data.titulo} onChange={(e) => {onChangeValue(e)}} type="text" name='titulo' placeholder='Título' className='border'/>
        </div>
        <div className='flex flex-col mb-5'>
          <span>Descripcion</span>
          <input value={data.descripcion} onChange={(e) => {onChangeValue(e)}} type="text" name='descripcion' placeholder='Descripción' className='border'/>
        </div>
        <div className='flex flex-col mb-5'>
          <span>Caracteristicas (separadas por una coma)</span>
          <input value={data.caracteristicas} onChange={(e) => {onChangeValue(e)}} type="text" name='caracteristicas' placeholder='Zona universitaria, 2 habitaciones, 4 alcobas' className='border'/>
        </div>
        <div className='flex flex-col mb-5'>
          <span>Valor (Solo el nùmero, sin puntos ni nada)</span>
          <input value={data.valor} onChange={(e) => {onChangeValue(e)}} type="number" name='valor' placeholder='Valor' className='border'/>
        </div>
        
        <button type='submit' className='bg-gray-100 border border-black p-5 rounded-2xl' onClick={
            (e)=>{
              downloadImage();
              e.preventDefault();
            }
            }>Descargar imagen</button>
      </form>
    </>
  )
}

export default App
