import styles from '../style';

import {iciang} from '../assets';

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col
    ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col
      xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4
         mb-2 ">
          <p className={`${styles.paragraph}`}>
            <span className=" text-white">A Computer Engineering Student</span>
          </p>
        </div>

        <div className='flex flex-row justify-between items-center
        w-full'>
          <h1 className='flex-1 font-poppins font-semibold
          ss:text-[72px] text-[52px] text-pink-300
          ss:leading-[100px] leading-[75px]'>
             Tricia <br className='sm:block hidden'/>{""}
             <span
              className='text-gradient'
             >Adelaine</span> {""} <br className='sm:block hidden'/>{""}
          </h1> 
          </div>

          <h1 className=' font-poppins font-semibold
          ss:text-[68px] text-[52px] text-pink-300
          ss:leading-[100px] leading-[75px] w-full'>D. Romero</h1>
           <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
            Eager to learn and explore more in the industry.
            Wanted to expose her skills and be able to contribute hugely in the industry.
            Consider herself as responsible and easy to get along with.
            Looking forward for her first work experience.</p>
      </div> 

          <div>
            <img src={iciang} alt="my photo" className='w-[100%] h-[100%]
            relative z-[5]'/>
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
            <div className="absolute z-[1] w-[80%] h-[80%] rounded full bottom-40
            white__gradient"/>
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 pink_gradient"/>
          </div>

    </section>
  )

export default Hero