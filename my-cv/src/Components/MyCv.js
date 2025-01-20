import '../Styles/MyCv.css';
import Aboutme from './Aboutme';
import Competences from './Competences';
import Experience from './Experience';

function MyCv() {
  return (
    <div className='mcv-cv'>
      <div className='bg-opacity'>
      <Aboutme/>
      <Competences/>
      <div className='mcv-experience'>
        <Experience />
      </div>
      <h2>Projets</h2>
      <h3>Titre h3</h3>
      <p>paragraphe 3</p>
      </div>
    </div>
  );
}

export default MyCv;