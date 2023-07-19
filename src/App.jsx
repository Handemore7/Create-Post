import { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import Preview from './Preview';
import Form from './Form';

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


  return (
    <>
      <div ref={domEl}>
        <Preview data={data} setData={setData}/>
      </div>

      <Form data={data} setData={setData} downloadImage={downloadImage}/>
    </>
  )
}

export default App
