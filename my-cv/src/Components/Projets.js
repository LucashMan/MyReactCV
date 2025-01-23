import '../Styles/Projets.css'
import vblogo from '../Assets/img/vbscore.png';
import POlogo from '../Assets/img/POlogo.png';
import Epilogo from '../Assets/img/Python.png';
import CSlogo from '../Assets/img/CSlogo.png';

function Projets() {
    const projets = [
        {
            titre: "Volleyball score App",
            image: vblogo,
            description: "J'ai fait ce projet dans le but d'apprendre à comment faire et developper une application mobile.",
            langage: "Java/Android Studio",
            lien: "https://github.com/LucashMan/VolleyApp",
            isUpdate: "yes"
        },
        {
            titre: "Project Overland",
            image: POlogo,
            description: "Développement d'un jeu vidéo sur le logiciel Unreal Engine dans le cadre d'un projet sur 3 ans au sein de mon ecole. Le jeu a pour theme de mettre en version digital les jdr afin de faciliter l'accées à plus de monde",
            langage: "Unreal Engine/C++",
            lien: "https://exemple.com/projet2",
            isUpdate: "yes"
        },
        {
            titre: "Epiquest",
            image: Epilogo,
            description: "Création d'un jeu video ludique ou l'on peut apprendre le langage informatique Python.",
            langage: "Unreal Engine/C++",
            lien: "https://drive.google.com/drive/folders/1A0cJnrf7v9ugSh3KqxaRWTit7im6u-B9?usp=sharing",
            isUpdate: "yes"
        },
        {
            titre: "Counter Strat",
            image: CSlogo,
            description: "Passionnée de jeux video et nottanment du jeux Counter Strike, j'ai décidé de developpé un strat book pour s'ameliorer au jeu et ainsi mieux jouer en equipe.",
            langage: "Stack MERN",
            lien: "https://drive.google.com/drive/folders/1A0cJnrf7v9ugSh3KqxaRWTit7im6u-B9?usp=sharing",
            isUpdate: "no"
        },
        {
            titre: "Hackaton1",
            image: CSlogo,
            description: "Passionnée de jeux video et nottanment du jeux Counter Strike, j'ai décidé de developpé un strat book pour s'ameliorer au jeu et ainsi mieux jouer en equipe.",
            langage: "Stack MERN",
            lien: "https://drive.google.com/drive/folders/1A0cJnrf7v9ugSh3KqxaRWTit7im6u-B9?usp=sharing",
            isUpdate: "no"
        },
        {
            titre: "Hackaton2",
            image: CSlogo,
            description: "Passionnée de jeux video et nottanment du jeux Counter Strike, j'ai décidé de developpé un strat book pour s'ameliorer au jeu et ainsi mieux jouer en equipe.",
            langage: "Stack MERN",
            lien: "https://drive.google.com/drive/folders/1A0cJnrf7v9ugSh3KqxaRWTit7im6u-B9?usp=sharing",
            isUpdate: "no"
        },
        {
            titre: "Hackaton3",
            image: CSlogo,
            description: "Passionnée de jeux video et nottanment du jeux Counter Strike, j'ai décidé de developpé un strat book pour s'ameliorer au jeu et ainsi mieux jouer en equipe.",
            langage: "Stack MERN",
            lien: "https://drive.google.com/drive/folders/1A0cJnrf7v9ugSh3KqxaRWTit7im6u-B9?usp=sharing",
            isUpdate: "no"
        }
    ];

    return (
        <div className="mcv-projets">
            <div className="mcv-projettitle">
                <h2>Mes Projets</h2>
            </div>
            <div className="mcv-cards">
                {projets.map((projet, index) => (
                    <div key={index} className="mcv-card">
                        <h3>{projet.titre}</h3>
                        <a href={projet.lien} target="_blank" rel="noopener noreferrer">
                            <img src={projet.image} alt={projet.titre} className="mcv-logo" />
                        </a>
                        <p>{projet.description}</p>
                        <p>{projet.langage}</p>
                        {/* <div className='mcv-btmbanner'>
                            {(() => {
                                if (projet.isUpdate === "yes") {
                                    return <p>Projet à jour !</p>;
                                } else {
                                    return <p>En cours de maintenance</p>;
                                }
                            })()}
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projets;