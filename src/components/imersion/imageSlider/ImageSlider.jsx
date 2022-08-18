import React, { useState } from 'react';
import { useImgPackData } from '../../../hooks/ImgPackDataHook';
import "../../../assents/css/slider.css"

function ImageSlider () {
  const {ImgPackData, setImgPackData} = useImgPackData();
  const [current, setCurrent] = useState(0);
  const length = ImgPackData.length;
  var SlidesContent = []

  for (var i =0 ; i < length; i++){
    SlidesContent.push(ImgPackData[i]["image"])
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SlidesContent) || SlidesContent.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <img className={"left-arrow"}  style={{
        transform:"scaleX(-1)",
      }} onClick={prevSlide} src={"https://cdn4.iconfinder.com/data/icons/arrows-set-12/512/rightarrowr-256.png"}  />
      <img className={"right-arrow"} onClick={nextSlide} src={"https://cdn4.iconfinder.com/data/icons/arrows-set-12/512/rightarrowr-256.png"}  />

      {SlidesContent.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
