import styles from '../style';
import { logo } from '../assets';
import { footerLinks} from '../constants';

const Contacts = () =>  (
    <section id="contacts" className={`${styles.flexCenter} ${styles.paddingY}`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img 
            src={logo}
            alt="adelaine"
            className="w-[266px] h-[72px] objext-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            ^ My logo :) <br classname="sm:block hidden"/>
            - Soon to be a Computer Engineer and Junior Front-End Developer wannabe
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between
        flex-wrap md:mt-0 mt-0">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className="flex flex-col
            ss:my-0 my-4 min-w-[150px]">
              <h4 className={`font-poppins font-medium text-[18px]
                  leading-[27px] text-white`}>
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li key={link.name}
                  className={`font-poppins font-normal text-[16px]
                  leading-[24px] text-dimWhite hover:text-secondary
                  cursor-pointer 
                  ${index !==footerLink.links.length -1 ? 'mb-4' : 'mb-0'}`}
                >
                  {link.name}
                </li>

              ))}
              </ul>
            </div>

          )) }
        </div>
      </div>
    </section>
  )

export default Contacts