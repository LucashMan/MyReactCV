import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";

function Experience() {
  return (
    <div className="mcv-experience">
      <h2>Expériences Professionnelles</h2>
      <VerticalTimeline>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mars 2024 - Août 2024"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title">Développeur Web</h3>
          <h4 className="vertical-timeline-element-subtitle">Entreprise X</h4>
          <p>Développement d’applications en React.js et intégration d'API.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sept 2023 - Février 2024"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Stagiaire Développement</h3>
          <h4 className="vertical-timeline-element-subtitle">Startup Y</h4>
          <p>Création de composants réutilisables en React et refonte du design.</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
