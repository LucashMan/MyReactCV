import '../Styles/Projets.css'
import logo from '../Assets/img/POlogo.png';

function Projets() {
    return (
		<div className='mcv-projets'>
            <div className='mcv-projettitle'>
			<h2>Mes Projets</h2>
            </div>  
            <div className='mcv-card'>
                <h3>Project Overland</h3>
                <img src={logo} alt='LogoProjectOverland' className='mcv-logo'/>
                <p>J'ai fais ce projet dans le but de mon ecole afin de la valider car cest sympa def aire des projets a lecole pas vrai heied ddsd</p>

            </div>
		</div>
	);
}

export default Projets;