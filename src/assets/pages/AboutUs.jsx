import React from 'react';
import aboutUs from '../images/aboutUs.svg';
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
import photo from '../images/photo.svg';
import navLeft from '../images/navLeft.svg';
import navRight from '../images/navRight.svg';
import footerLogo from '../images/footerLogo.svg';
import socials from '../images/socials.svg';
import ellipse from '../images/ellipse.svg';
import mountains from '../images/mountains.svg';
import wanderlust from '../images/wanderlust.svg';

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
        <div className='text-center text-white mt-[150px]'>
          <div>READ</div>
          <div className="flex justify-center">
            <img src={aboutUs} alt="aboutUs" />
          </div>
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
            className="absolute w-[176.561px] h-[56.416px] bg-[#DF6951] text-white rounded-[10px] mt-[20px]  gap-[10.45px] " >
            View Packages
          </button>
        </div>
        <div className='second-section-right'>
          <img src={bgStyle} alt="bgStyle" className='relative translate-x-[-50px] translate-y-[600px]' />
          <img src={ellipse} alt="ellipse" className='relative translate-x-[50px] translate-y-[-00px]' />
          <img src={mountains} alt="mountains" className='relative translate-x-[78px] translate-y-[-585px]' />
        </div>
      </div>
      <div className='third-section h-[594px]  w-full text-center '>
      <div className="flex justify-center pt-[200px]">
            <img src={aboutUs} alt="aboutUs" />
          </div>
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
      <div className='fifth-section '>
        <div className=' text-center '>
          <div className='text-[18px] text-[#DF6951]'>  EXPLORE MORE</div>
          <div className='text-[50px]'> Our Popular Tour Plans</div>
        </div>
      <div className="flex justify-center">
        <div >
          <div className="upperRow flex  gap-8">
            <div className="firstBlock ">
              <div className="firstUp ">
                <img src={barcelona} alt="barcelona" />
                <div className="flex justify-around translate-y-[-50px] text-[white] font-bold text-xl">
                  <div>Barcelona</div>
                  <div>840 $</div>
                </div>
              </div>
              <div className="firstDown">
                <img src={tomorrowLand} alt="tomorrowLand" />
                <div className="flex justify-around translate-y-[-50px] text-[white] font-bold text-xl">
                  <div>Tomorrow Land</div>
                  <div>840 $</div>
                </div>
              </div>
            </div>
            <div className="secondBlock">
              <div className="secondUp">
                <img src={switzerland} alt="switzerland" />
                <div className="flex justify-around translate-y-[-50px] text-[white] font-bold text-xl">
                  <div>Switzerland</div>
                  <div>840 $</div>
                </div>
              </div>
              <div className="secondDown">
                <img src={losAngelas} alt="losAngelas" />
                <div className="flex justify-around translate-y-[-50px] text-[white] font-bold text-xl">
                  <div>Los Angelas</div>
                  <div>840 $</div>
                </div>
              </div>
            </div>
            <div className="thirdBlock">
              <img src={rioDeGenero} alt="rioDeGenero" className='w-[97%]' />
              <div className="flex justify-around translate-y-[-50px] text-[white] font-bold text-xl">
                <div>Rio De Genero</div>
                <div>840 $</div>
              </div>
            </div>
            <div className="fourthBlock">
              <div className="fourthUp">
                <img src={barcelona2} alt="barcelona" />
                <div className="flex justify-around translate-y-[-50px] text-[white] font-bold text-xl">
                  <div>Barcelona</div>
                  <div>840 $</div>
                </div>
              </div>
              <div className="fourthDown">
                <img src={India} alt="India" />
                <div className="flex justify-around translate-y-[-50px] text-[white] font-bold text-xl">
                  <div>India</div>
                  <div>840 $</div>
                </div>
              </div>
            </div>
          </div>
          <div className="downRow flex  gap-8">
            <div className="fifthBlock">
              <img src={barcelona3} alt="barcelona" />
              <div className="flex justify-around translate-y-[-50px] text-[white] font-bold text-xl">
                <div>Barcelona</div>
                <div>840 $</div>
              </div>
            </div>
            <div className="sixthBlock">
              <img src={maldives} alt="maldives" />
              <div className="flex justify-around translate-y-[-50px] text-[white] font-bold text-xl">
                <div>Maldives</div>
                <div>840 $</div>
              </div>
            </div>
            <div className="seventhBlock">
              <img src={barcelona4} alt="barcelona" />
              <div className="flex justify-around translate-y-[-50px] text-[white] font-bold text-xl">
                <div>Barcelona</div>
                <div>840 $</div>
              </div>
            </div>
            <div className="eightthBlock">
              <img src={pakistan} alt="pakistan" />
              <div className="flex justify-around translate-y-[-50px] text-[white] font-bold text-xl">
                <div>Pakistan</div>
                <div>840 $</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className='sixth-section h-[766px] w-full relative'>
        <img src={hat} alt="hat" className="absolute bottom-0 left-0" />
        <div className='text-[18px] text-[#DF6951] text-center pt-[150px]'>PROMOTION</div>
        <div className='text-[50px] text-center '> See What Our Clients Say</div>
        <div className='text-[50px] text-center '>About Us</div>
        <div class="w-[538px] h-[277px] rounded-[17px] bg-[#FFFFFF] absolute left-1/2 -translate-x-1/2 mt-[80px] flex flex-col justify-center items-center">
          <img src={photo} alt="photo" class="max-w-full max-h-full translate-y-[-10px] " />
          <div class="flex gap-[400px] translate-x-[-60px] translate-y-[20px]">
            <img src={navLeft} alt="navLeft" class="relative" />
            <img src={navRight} alt="navRight" class="relative" />
          </div>
          <div className='relative translate-y-[-100px] mx-[50px] mt-[-60px] text-center'>Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam
            et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus
            impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.</div>
          <div className="font-bold translate-y-[-50px]">Christine Beckam - Designer</div><br />
        </div>
      </div>
      <div className='footer h-[500px]'>
        <div class="w-[1202px] h-[346px] absolute left-1/2 -translate-x-1/2 mt-[80px] flex flex-col justify-center items-center">
          <div className='flex gap-30 '>
            <div>
              <img src={footerLogo} alt="footerLogo" />
              <div> Travel helps companies <br />
                manage payments easily.</div>
              <img src={socials} alt="socials" className='mt-[20px]' />
            </div>
            <div className=''>
              <div className='font-bold text-[21px]'>Company</div>
              <div>About Us</div>
              <div>Careers</div>
              <div>Blog</div>
              <div>Pricing</div>
            </div>
            <div>
              <div className='font-bold text-[21px]'>Destination</div>
              <div>Maldives</div>
              <div>Los Angelas</div>
              <div>Las Vegas</div>
              <div>Torronto</div>
            </div>
            <div>
              <div className='font-bold text-[21px]'>Join Our Newsletter</div>
              <div>
                <input type="email" placeholder="Your email address" class="h-[52px] bg-gray-200" />
                <button className="w-[149] h-[52px] bg-[#DF6951] text-white rounded-[10px]">
                  Subscribe
                </button>
              </div>
              <div className='mt-[20px]'>*  Will send you weekly updates for your better<br />
                tour packages.</div>
            </div>
          </div>
          <div class="w-full h-[1px] bg-[#E5E5EA] mt-[40px]"></div>
          <div className='mt-[40px]'>
            Copyright @ Xpro 2022. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}
