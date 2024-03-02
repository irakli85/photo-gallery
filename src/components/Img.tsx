import { ImgProps } from "../types";

const Img = ({image, setSelectedImage, setModalOpen}: ImgProps) => {
  return (
    <div className="image-box">
        <img className='image'                            
            src={image.urls?.thumb}
            alt={image?.alt_description}
            onClick={() => {
              setSelectedImage(image);
              setModalOpen(true);
          }}                    
        />
        <p>Photo By <strong className="name">{image.user?.name}</strong></p>
    </div>
  )
}

export default Img