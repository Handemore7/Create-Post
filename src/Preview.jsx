/* eslint-disable react/prop-types */
const Preview = ( {data} ) => {

    console.log(data.images);

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
          <img className=' rounded-[50%] w-[30vh] h-[30vh] absolute bottom-[-0vh] right-[-5vh]' src={`${data.images != 0 ? data.images[0] : "./img1.jpeg"}`} alt="" />
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
  )
}

export default Preview