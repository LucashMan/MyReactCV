import "../Styles/DownloadCv.css"


const DownloadCV = () => {
    return (
      <a href="/LucasManciniCV.pdf" download="LucasManciniCV.pdf">
        <button className="download-button">Télécharger mon CV</button>
      </a>
    );
  };
  
  export default DownloadCV;