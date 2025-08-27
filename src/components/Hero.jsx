import styles from '../style'
import {  abcd } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            RWANDA <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>BOXING</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          FEDERATION
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
     We foster excellence in the ring and beyond—developing athletes, uplifting communities, and growing Rwanda's boxing culture with integrity and passion.  
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={abcd}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5] rounded-xl'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero
