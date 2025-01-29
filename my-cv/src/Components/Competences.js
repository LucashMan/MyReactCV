import '../Styles/Competences.css';
import jsLogo from '../Assets/img/javascript.png';
import reactLogo from '../Assets/img/reactjs.png';
import nodeLogo from '../Assets/img/nodejsrmbg.png';
import mysqlLogo from '../Assets/img/mysql.png';
import git from '../Assets/img/github.png'
import ReactNativeLogo from '../Assets/img/react-native.png';
import EXLogo from '../Assets/img/expressjsrmbg.png';
import MongoLogo from '../Assets/img/mongodb.png'


function Competences() {
    const logos = [
        { src: jsLogo, alt: "JavaScript" },
        { src: reactLogo, alt: "React" },
        { src: nodeLogo, alt: "Node.js" },
        { src: git, alt: "Git" },
        { src: ReactNativeLogo, alt: "ReactNative" },
        { src: EXLogo, alt: "Express" },
        { src: mysqlLogo, alt: "MySQL" },
        { src: MongoLogo, alt: "MongoDB" },
    ];

    return (
        <div className='mcv-competence'>
            <h2>Mes Compétences :</h2>
            <div className='competence-grid'>
            {logos.map((logo, index) => (
                    <img 
                        key={index} 
                        src={logo.src} 
                        alt={logo.alt} 
                        title={logo.alt} 
                        className="competence-logo" 
                    />
                ))}
            </div>
        </div>
    );
}

export default Competences;