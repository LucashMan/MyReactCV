import '../Styles/Projets.css'
import vblogo from '../Assets/img/vbscore.png';
import POlogo from '../Assets/img/POlogo.png';
import Epilogo from '../Assets/img/Python.png';
/*import CSlogo from '../Assets/img/CSlogo.png';*/
import HKlogo from '../Assets/img/hackaton.png';

function Projets() {
    const projets = [
        {
            titre: "Volleyball score App",
            image: vblogo,
            description: "Développement d'une application mobile pour compter le score entre deux equipes durant un match de volley-ball.",
            langage: "Java/Android Studio",
            lien: "https://github.com/LucashMan/VolleyApp",
            isUpdate: "yes"
        },
        {
            titre: "Project Overland",
            image: POlogo,
            description: "Développement d'une application sur le logiciel Unreal Engine dans le cadre d'un projet sur trois ans au sein de mon école. L'application a pour but de mettre en version numérique les jeux de rôle (jdr) sur table afin de faciliter l'accès aux joueurs et de permettre une meilleure immersion grâce à l'interface graphique.",
            langage: "Unreal Engine/C++",
            lien: "https://epitechfr-my.sharepoint.com/:f:/r/personal/adam_mellakh_epitech_eu/Documents/build?csf=1&web=1&e=pnlSkM",
            isUpdate: "yes"
        },
        {
            titre: "Epiquest",
            image: Epilogo,
            description: "Création d’un jeu 3D interactif permettant d’apprendre le langage Python en résolvant des défis de programmation.\nLe projet combine jeu vidéo et éducation il est destiné aux débutants en programmation.",
            langage: "Unreal Engine/C++",
            lien: "https://drive.google.com/drive/folders/1A0cJnrf7v9ugSh3KqxaRWTit7im6u-B9?usp=sharing",
            isUpdate: "yes"
        },
        // {
        //     titre: "Counter Strat",
        //     image: CSlogo,
        //     description: "Passionnée de jeux video et nottanment du jeux Counter Strike, j'ai décidé de developpé un strat book pour s'ameliorer au jeu et ainsi mieux jouer en equipe.",
        //     langage: "Stack MERN",
        //     lien: "https://drive.google.com/drive/folders/1A0cJnrf7v9ugSh3KqxaRWTit7im6u-B9?usp=sharing",
        //     isUpdate: "no"
        // },
        {
            titre: "Hackatons realisé",
            image: HKlogo,
            description: ">Hackaton Bibliotheca 2022 (2eme place) *La bibliothéque du futur* avec la ville de Nice  \n>Hackaton Inclusion 2023 (2eme place) *La technologie au service de l’inclusion* avec le What06 \n>Hackaton Tech for tourism 2023 (2eme place) *La technologie et le tourisme de demain* avec Cannes is UP",
            langage: "Hackaton",
            lien: null,
            isUpdate: "no"
        }
    ];

    return (
        <div className="mcv-projets">
            <div className="mcv-projettitle">
                <h2>Mes Principaux Projets</h2>
            </div>
            <div className="mcv-cards">
                {projets.map((projet, index) => (
                    <div key={index} className="mcv-card">
                        <h3>{projet.titre}</h3>
                        <a href={projet.lien} target="_blank" rel="noopener noreferrer">
                            <img src={projet.image} alt={projet.titre} className="mcv-logo" />
                        </a>
                        <p className="p-space">{projet.description}</p>
                        <p className="p-bolder">{projet.langage}</p>
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