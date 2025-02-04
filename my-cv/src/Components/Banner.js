import { Typewriter } from 'react-simple-typewriter';
import '../Styles/Banner.css';
import lucasimg from '../Assets/img/lucasIMG.jpg';

function Banner() {
    const title = 'Lucas Mancini - Étudiant 5ème année Epitech';

    return (
        <div className='mcv-banner'>
            <div className='mcv-header'>
                <img src={lucasimg} alt='Mon Cv' className='mcv-profile' />
                <h1 className='mcv-title'>{title}</h1>
            </div>
            <p className='mcv-typing'> Je recherche un stage en  
                <Typewriter 
                    words={[
                        " Développement Web !",
                        " Développement Mobile !",
                        " Full Stack !"
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={2000}
                />
            </p>
        </div>
    );
}

export default Banner;


