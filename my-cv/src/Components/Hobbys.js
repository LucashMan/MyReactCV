import ReactCardFlip from 'react-card-flip'
import '../Styles/Hobbys.css';
import { useState } from 'react';
import vbimage from '../Assets/img/sporticon.png'
import tripimage from '../Assets/img/tripicon.png'
import gamesimage from '../Assets/img/gamesicon.png'
import devimage from '../Assets/img/devgames.png'

function Hobbys() {
    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className='mcv-hobbys'>
            <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped}>
                <div className='card' onClick={flipCard}>
                    <img src={vbimage} alt="SportIcon" className="volleyballicon" />
                    <h2>Sport</h2>
                </div>
                <div className='card card-back' onClick={flipCard}>
                <p>J'adore le volley</p>
                </div>
            </ReactCardFlip>
            <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped}>
                <div className='card' onClick={flipCard}>
                    <img src={tripimage} alt="SportIcon" className="volleyballicon" />
                    <h2>Voyage</h2>
                </div>
                <div className='card card-back' onClick={flipCard}>
                    <p>J'adore voyager</p>
                </div>
            </ReactCardFlip>
            <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped}>
                <div className='card' onClick={flipCard}>
                    <img src={gamesimage} alt="SportIcon" className="volleyballicon" />
                    <h2>Jeux videos</h2>
                </div>
                <div className='card card-back' onClick={flipCard}>
                    <p>J'adore les jeux videos</p>
                </div>
            </ReactCardFlip>
            <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped}>
                <div className='card' onClick={flipCard}>
                    <img src={devimage} alt="SportIcon" className="volleyballicon" />
                    <h2>Developper jeux videos</h2>
                </div>
                <div className='card card-back' onClick={flipCard}>
                    <p>J'aime creer et developper des jeux videos</p>
                </div>
            </ReactCardFlip>
        </div>

    );
};


export default Hobbys;