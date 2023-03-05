import { upload } from '$services/function';
import React from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import './style.css';
const imageUpload = ({ id, fn }: { id: string, fn: (formData:FormData) => Promise<void> }) => {
  const [images, setImages] = React.useState<ImageListType>([]);
  const maxNumber = 69;
  const uploadImg = () => {
    const formData = new FormData();
    images.map(img => {
      if (img.file)
        formData.append('file', img.file)
    })
    fn(formData)
    setImages([])
  }
  return (
    <div className="">
      <ImageUploading
        multiple
        value={images}
        onChange={(imageList) => setImages(imageList)}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {images.length===0&&<button
              className='btn btn-primary btn-sm'
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>}
            &nbsp;
            <button
              className='btn btn-primary btn-sm'
              onClick={uploadImg}>Upload image</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button className='btn btn-primary btn-sm' onClick={() => onImageUpdate(index)}>Update</button>
                  <button className='btn btn-primary btn-sm' onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
export default imageUpload;