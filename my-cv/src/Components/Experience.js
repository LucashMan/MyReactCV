import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineComputer } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import '../Styles/Experience.css'

function Experience() {
  return (
    <div className="mcv-experience">
      <h2>Expériences Professionnelles</h2>
      <VerticalTimeline lineColor="#b0f2b6">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#b0f2b6', color: '#000000', border: '3px solid #000000' }}
          contentArrowStyle={{ borderRight: '7px solid  #000000' }}
          date="Septembre 2021 - Decembre 2021"
          iconStyle={{ background: '#b0f2b6', color: '#000000', border: '3px solid  #000000,' }}
          icon={<MdOutlineComputer />}
        >
          <h3 className="vertical-timeline-element-title">Developpeur/Integrateur Web</h3>
          <h4 className="vertical-timeline-element-subtitle">Tendance Locale</h4>
          <p>
            Développement de site web pour des clients.
            Développement bot automatisation des taches.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#b0f2b6', color: '#000000', border: '3px solid #000000' }}
          contentArrowStyle={{ borderRight: '7px solid  #000000' }}
          date="Mai 2023 - Aout 2023"
          iconStyle={{ background: '#b0f2b6', color: '#000000', border: '3px solid  #000000,' }}
          icon={<FaMobileAlt />}
        >
          <h3 className="vertical-timeline-element-title">Développeur applications mobiles vidéo ludique</h3>
          <h4 className="vertical-timeline-element-subtitle">ASCII RAINBOW</h4>
          <p>
            Developpement d'application mobile video ludique pour enfant
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
