import { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import Preview from './Preview';

function App() {

  const domEl = useRef(null);

  // download image
  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);
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
      caracteristicas: "",
      images: []
  })

  function onChangeValue(event) {
    if (event.target.name == "images") {
      let newImages = [...data.images];
      newImages.push(URL.createObjectURL(event.target.files[0]))
      setData({...data, [event.target.name]: newImages})
    } else {
      setData({...data, [event.target.name]: event.target.value})
    }
  }

  return (
    <>
      {/* Image visualization */}
      <div ref={domEl}>
        <Preview data={data}/>
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

        <div className='flex flex-col mb-5'>
          <span>Imagen principal</span>
          <input onChange={(e) => {onChangeValue(e)}} type="file" name='images' className='border'/>
          <span>Imagen 2</span>
          <input onChange={(e) => {onChangeValue(e)}} type="file" name='images' className='border'/>
          <span>Imagen 3</span>
          <input onChange={(e) => {onChangeValue(e)}} type="file" name='images' className='border'/>
          <span>Imagen 4</span>
          <input onChange={(e) => {onChangeValue(e)}} type="file" name='images' className='border'/>
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
