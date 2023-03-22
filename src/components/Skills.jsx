import styles, { layout } from '../style';

const Skills = () => {
  return (
    <section id="skills" className={layout.section}>
      <div className={layout.sectionInfo}>
       <h2 className={styles.heading2}>
          My Skills
       </h2>
       <p className={styles.heading3}>
          ✤ Data Entry
          <br classname="sm:block hidden"/>
          ✱  Front End Development (Website, UI)
          <br classname="sm:block hidden"/>
          ✤ Programming Languages (HTML, CSS,
          Python & Java)
          <br classname="sm:block hidden"/>
          ✱  Microsoft Offices (Word, Powerpoint,
          Publisher, Excel)
          <br classname="sm:block hidden"/>
          ✤ Adobe Photoshop
          <br classname="sm:block hidden"/>
          ✱  Basic Graphic Design
       </p>
      </div>
    </section>
  )
}

export default Skills