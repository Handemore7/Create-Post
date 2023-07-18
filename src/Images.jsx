
const UploadAndDisplayImage = ({data, setData}) => {

  function onImageChange(event) {
        console.log(event.target.files);
        let newImages = [...data.images];
        for (let i = 0; i < event.target.files.length; i++) {
            newImages.push(URL.createObjectURL(event.target.files[i]))
        }
        console.log(newImages);
        setData({...data, [event.target.name]: newImages})
  }

  return (
    <>
      <input type="file" multiple accept="image/*" name='images' onChange={onImageChange} />
      <div className="flex">
      {data.images.map((imageSrc) => (
        <img key={imageSrc} src={imageSrc} alt="not fount" className="h-[10vh]" />
      ))}
      </div>
    </>
  );
};

export default UploadAndDisplayImage;