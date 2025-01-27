import "../Styles/DownloadCv.css"


const DownloadCV = () => {
    return (
      <a href="/cv_LucasM.pdf" download="cv_LucasM.pdf">
        <button className="download-button">Télécharger mon CV</button>
      </a>
    );
  };
  
  export default DownloadCV;