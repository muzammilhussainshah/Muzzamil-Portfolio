import { FC, useState } from "react";
import Slider from "react-slick";


const CustomDot = ({ onClick, active }: any) => (
  <div
    className={`${active && 'border-2 flex justify-center items-center sm:py-1 lg:p-8 sm:p-0 -mb-[50px] sm:mb-0 border-[#4e0d53] rounded-full'}`}
    onClick={onClick}
  >
    <span className={`sm:w-[10px] w-[7px] h-[7px] sm:h-[10px] inline-block rounded-full cursor-pointer ${active ? 'bg-[#5c0e61]' : 'bg-[grey]'}`}
    ></span>
  </div>
);


const ScreenShots: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    centerMode: true,
    slidesToScroll: 1,
    customPaging: (i: number) => {
      return (
        <div>
          <span className="text-[black]" key={i}><CustomDot onClick={() => setActiveIndex(i)} active={i === activeIndex} /></span>
        </div>
      )
    },
    afterChange: (index: number) => {
      setActiveIndex(index);
    },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]

  };
  return (
    <section>
      <div className="maincontainer">
        <div className="flex flex-col gap-y-2 items-center lg:items-start">
          <div className="font-poppins font-bold lg:body1 text-white py-2 w-[10rem] rounded-[1.2rem] bg-[#4e0d53] text-center">Applicaltion</div>
          <div className="font-bold  text-head text-center text-[#4e0d53] text-h3 md:text-h2 lg:text-left">Screenshots</div>
          <div className="font-poppins font-semibold text-center text-li lg:text-left">Bistrochat does NOT require you to login before using it! Enjoy!</div>
        </div>
        <div className="slider-container my-16 flex justify-center text-[black]">
          <div className="w-[95%]  block">
            <Slider {...settings} focusOnSelect>
              <div >
                <img style={{ aspectRatio: '5/10', transition: 'transform 0.2s ease-in-out', }} className={`${activeIndex == 0 ? 'scale-100 border-[5px]  sm:border-[6px]  md:border-[7px] lg:border-8   rounded-[12px] sm:rounded-[25px] md:rounded-[30px]' : 'scale-75'} carousalmageSize`} src="images/bistrochat/screen1.png" alt="Chattopotatologo" />
              </div>
              <div >
                <img style={{ aspectRatio: '5/10', transition: 'transform 0.2s ease-in-out' }} className={`${activeIndex == 1 ? 'scale-100 border-[5px]  sm:border-[6px]  md:border-[7px] lg:border-8   rounded-[12px] sm:rounded-[25px] md:rounded-[30px]' : 'scale-75'} carousalmageSize`} src="images/bistrochat/screen2.png" alt="Chattopotatologo" />
              </div>
              <div >
                <img style={{ aspectRatio: '5/10', transition: 'transform 0.2s ease-in-out' }} className={`${activeIndex == 2 ? 'scale-100 border-[5px]  sm:border-[6px]  md:border-[7px] lg:border-8   rounded-[12px] sm:rounded-[25px] md:rounded-[30px]' : 'scale-75'} carousalmageSize`} src="images/bistrochat/screen3.png" alt="Chattopotatologo" />
              </div>
              <div >
                <img style={{ aspectRatio: '5/10', transition: 'transform 0.2s ease-in-out' }} className={`${activeIndex == 3 ? 'scale-100 border-[5px]  sm:border-[6px]  md:border-[7px] lg:border-8   rounded-[12px] sm:rounded-[25px] md:rounded-[30px]' : 'scale-75'} carousalmageSize`} src="images/bistrochat/screen4.png" alt="Chattopotatologo" />
              </div>
              <div >
                <img style={{ aspectRatio: '5/10', transition: 'transform 0.2s ease-in-out' }} className={`${activeIndex == 4 ? 'scale-100 border-[5px]  sm:border-[6px]  md:border-[7px] lg:border-8   rounded-[12px] sm:rounded-[25px] md:rounded-[30px]' : 'scale-75'} carousalmageSize`} src="images/bistrochat/screen5.png" alt="Chattopotatologo" />
              </div>
              <div >
                <img style={{ aspectRatio: '5/10', transition: 'transform 0.2s ease-in-out' }} className={`${activeIndex == 5 ? 'scale-100 border-[5px]  sm:border-[6px]  md:border-[7px] lg:border-8   rounded-[12px] sm:rounded-[25px] md:rounded-[30px]' : 'scale-75'} carousalmageSize`} src="images/bistrochat/screen6.png" alt="Chattopotatologo" />
              </div>
              <div >
                <img style={{ aspectRatio: '5/10', transition: 'transform 0.2s ease-in-out' }} className={`${activeIndex == 6 ? 'scale-100 border-[5px]  sm:border-[6px]  md:border-[7px] lg:border-8   rounded-[12px] sm:rounded-[25px] md:rounded-[30px]' : 'scale-75'} carousalmageSize`} src="images/bistrochat/screen7.png" alt="Chattopotatologo" />
              </div>
              <div >
                <img style={{ aspectRatio: '5/10', transition: 'transform 0.2s ease-in-out' }} className={`${activeIndex == 7 ? 'scale-100 border-[5px]  sm:border-[6px]  md:border-[7px] lg:border-8   rounded-[12px] sm:rounded-[25px] md:rounded-[30px]' : 'scale-75'} carousalmageSize`} src="images/bistrochat/screen8.png" alt="Chattopotatologo" />
              </div>
              <div >
                <img style={{ aspectRatio: '5/10', transition: 'transform 0.2s ease-in-out' }} className={`${activeIndex == 8 ? 'scale-100 border-[5px]  sm:border-[6px]  md:border-[7px] lg:border-8   rounded-[12px] sm:rounded-[25px] md:rounded-[30px]' : 'scale-75'} carousalmageSize`} src="images/bistrochat/screen9.png" alt="Chattopotatologo" />
              </div>
              <div >
                <img style={{ aspectRatio: '5/10', transition: 'transform 0.2s ease-in-out' }} className={`${activeIndex == 9 ? 'scale-100 border-[5px]  sm:border-[6px]  md:border-[7px] lg:border-8   rounded-[12px] sm:rounded-[25px] md:rounded-[30px]' : 'scale-75'} carousalmageSize`} src="images/bistrochat/screen10.png" alt="Chattopotatologo" />
              </div>
              <div >
                <img style={{ aspectRatio: '5/10', transition: 'transform 0.2s ease-in-out' }} className={`${activeIndex == 10 ? 'scale-100 border-[5px]  sm:border-[6px]  md:border-[7px] lg:border-8   rounded-[12px] sm:rounded-[25px] md:rounded-[30px]' : 'scale-75'} carousalmageSize`} src="images/bistrochat/screen11.png" alt="Chattopotatologo" />
              </div>
              <div >
                <img style={{ aspectRatio: '5/10', transition: 'transform 0.2s ease-in-out' }} className={`${activeIndex == 11 ? 'scale-100 border-[5px]  sm:border-[6px]  md:border-[7px] lg:border-8   rounded-[12px] sm:rounded-[25px] md:rounded-[30px]' : 'scale-75'} carousalmageSize`} src="images/bistrochat/screen12.png" alt="Chattopotatologo" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};




export default ScreenShots;
