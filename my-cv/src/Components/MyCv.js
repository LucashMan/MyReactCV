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
      </div>
    </div>
  );
}

export default MyCv;