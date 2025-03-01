import React from 'react';
import logo from '../images/logo.svg';
import bgStyle from '../images/bgStyle.svg';
import parisPic from '../images/parisPic.svg';
import vocations from '../images/vocations.svg';
import honeymoon from '../images/honeymoon.svg';
import musicialEvents from '../images/musicialEvents.svg';
import oyster from '../images/oyster.svg';
import barcelona from '../images/barcelona.svg';
import tomorrowLand from '../images/tomorrowLand.svg';
import switzerland from '../images/switzerland.svg';
import losAngelas from '../images/losAngelas.svg';
import rioDeGenero from '../images/rioDeGenero.svg';
import barcelona2 from '../images/barcelona2.svg';
import India from '../images/India.svg';
import barcelona3 from '../images/barcelona3.svg';
import maldives from '../images/maldives.svg';
import barcelona4 from '../images/barcelona4.svg';
import pakistan from '../images/pakistan.svg';
import hat from '../images/hat.svg';



export default function AboutUs() {
  return (
    <>
      <div className="first-section h-[766px] w-full">
        <div className='flex pt-[81px] text-[17px] text-white items-center justify-around'>
          <img src={logo} alt="logo" />
          <div className="flex gap-[60px]">
            <a href="#">Home</a>
            <a href="#">About</a>
          </div>
          <button className="w-[152px] h-[58px] bg-[#DF6951] text-white rounded-[10px]">
            Get in Touch
          </button>
        </div>
        <div className='text-center  text-white mt-[150px]'>
          <div>Read</div>
          {/* Изменить шрифт */}
          <div className='text-[157.43px] mt-[-90px]'>About Us</div>
        </div>
      </div>

      <div className='second-section h-[766px] flex justify-center items-center gap-[50px]'>

        <div className='second-section-left ml-[150px]'>
          <div className='text-[#DF6951]'>
            PROMOTION
          </div>


          <div className='text-[50px] text-[#181E4B]'>
            We Provide You Best <br /> Europe Sightseeing Tours
          </div>


          <div className='text-[16px] mt-[20px]'>
            Et labore harum non nobis ipsum eum molestias mollitia et corporis<br /> praesentium a laudantium internos.
            Non quis eius quo eligendi corrupti<br /> et fugiat nulla qui soluta recusandae
            in maxime quasi aut ducimus <br />illum aut optio quibusdam!
          </div>

          <button
            className="absolute w-[176.561px] h-[56.416px] bg-[#DF6951] text-white rounded-[10px] mt-[20px]  gap-[10.45px] "
          >
            View Packages
          </button>


        </div>

        <div className='second-section-right'>
          <img src={bgStyle} alt="bgStyle" />

        </div>


      </div>


      <div className='third-section h-[594px]  w-full text-center '>
        <div className='pt-[200px] text-white text-[157.43px]'>Wanderlust</div>

      </div>

      <div className='gap-[140px] flex items-center justify-center fourth-section h-[1000px]'>

        <div className='fourth-section-left ml-[-250px]'>
          <img src={parisPic} alt="parisPic" />

        </div>

        <div className='fourth-section-right'>
          <img src={oyster} alt="oyster" className='translate-x-[480px] translate-y-[140px]' />

          <div className='fourth-section-right-top'>
            <div className='text-[18px] text-[#DF6951]'>TREND</div>
            <div className='text-[50px]'> Our Popular Tour Plans</div>
            <div>Et labore harum non nobis ipsum eum molestias mollitia et corporis <br />
              praesentium a laudantium. Et labore harum non nobis ipsum eum <br /> molestias
              mollitia et corporis praesentium a laudantium.</div>
          </div>

          <div className='fourth-section-right-bottom flex justify-between gap-[50px] mt-[50px]'>
            <img src={vocations} alt="vocations" />
            <img src={honeymoon} alt="honeymoon" />
            <img src={musicialEvents} alt="musicialEvents" />

          </div>


        </div>


      </div>


      <div className='fifth-section'>

        <div className=' text-center'>
          <div className='text-[18px] text-[#DF6951]'>  EXPLORE MORE</div>
          <div className='text-[50px]'> Our Popular Tour Plans</div>
        </div>

        <div>
          <div className="upperRow flex">
            <div className="firstBlock ">
              <div className="firstUp">
                <img src={barcelona} alt="barcelona" />

              </div>
              <div className="firstDown">
                <img src={tomorrowLand} alt="tomorrowLand" />

              </div>
            </div>



            <div className="secondBlock">
              <div className="secondUp">
                <img src={switzerland} alt="switzerland" />

              </div>
              <div className="secondDown">
                <img src={losAngelas} alt="losAngelas" />

              </div>
            </div>

            <div className="thirdBlock">
              <img src={rioDeGenero} alt="rioDeGenero" />

            </div>


            <div className="fourthBlock">

              <div className="fourthUp">
                <img src={barcelona2} alt="barcelona" />

              </div>

              <div className="fourthDown">
                <img src={India} alt="India" />

              </div>
            </div>
          </div>

          <div className="downRow flex">


            <div className="fifthBlock">
              <img src={barcelona3} alt="barcelona" />

            </div>

            <div className="sixthBlock">
              <img src={maldives} alt="maldives" />

            </div>

            <div className="seventhBlock">
              <img src={barcelona4} alt="barcelona" />

            </div>
            <div className="eightthBlock">
              <img src={pakistan} alt="pakistan" />

            </div>
          </div>


        </div>




      </div>

      <div className='sixth-section h-[766px] w-full relative'>
        <img src={hat} alt="hat" className="absolute bottom-0 left-0" />

        <div className='text-[18px] text-[#DF6951] text-center pt-[150px]'>PROMOTION</div>
        <div className='text-[50px] text-center '> See What Our Clients Say</div>
        <div className='text-[50px] text-center '>About Us</div>



      </div>

      <div className='footer'>


      </div>




    </>

  );
}
