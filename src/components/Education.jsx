import styles, { layout } from '../style';
import { features } from '../constants';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px]
  ${index !== features.length - 1 ? "mb-6":"mb-0"}`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain "/>
    </div>
    
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-pink-300 text-[18px]
      leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[18px]
      leading-[23px] mb-1">
        {content}
      </p>
    </div>

  </div>
)

const Education = () => {
  return (
    <section id="education" className={layout.section}>
      <div className={layout.sectionInfo}>
       <h2 className={styles.heading2}>
          Education
       </h2>
       <p className={styles.heading3}>
          Systems Plus Computer College
          <p className={`${styles.paragraph} max-w-[470px]`}>
              Caloocan Branch, Manila, Philippines 
              <br classname="sm:block hidden"/>
              Graduate of K-12 Curriculum, A.Y. 2018-2020
              <br classname="sm:block hidden"/>
              Took Science, Technology, Engineering and Mathematics Strand
          </p>
       </p>
       <p className={styles.heading3}>
       Polytechnic University of the Philippines
          <p className={`${styles.paragraph} max-w-[480px]`}>
              Sta.Mesa, Manila, Philippines 
              <br classname="sm:block hidden"/>
              Taking Diploma in Computer Engineering Technology
              <br classname="sm:block hidden"/>
              (Will be a graduate of Computer Engineering with a Bachelor's
              Degree in the next two(2) years, 2023-2025) 
          </p>
       </p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        <h2 className={styles.heading2}>My Hobbies</h2>
        {features.map((feature, index) => (<FeatureCard key={feature.id}
        {...feature} index={index} />))} 
      </div>
    </section>
  )
}

export default Education