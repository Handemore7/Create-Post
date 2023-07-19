import UploadAndDisplayImage from './Images';

const Form = ({data, setData, downloadImage}) => {

    function onChangeValue(event) {
          setData({...data, [event.target.name]: event.target.value})
      }

  return (
    <>
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

        <UploadAndDisplayImage data={data} setData={setData}/>
        
        <button type='submit' className='bg-gray-100 border border-black p-5 rounded-2xl mt-10' onClick={
            (e)=>{
              downloadImage();
              e.preventDefault();
            }
            }>Descargar imagen</button>
      </form>
    </>
  )
}

export default Form