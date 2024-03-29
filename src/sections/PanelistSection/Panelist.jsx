import styles from "./Panelist.module.css";
import { Link } from 'react-router-dom';

const {
  mainDiv,
  panelHeadingDiv,
  panelHeading,
  panelDiv,
  panelInfo,
  panelImage,
  panelistName,
  panelistsDesignation
} = styles;

const Panelist = () => {
  const panel = [
    {
      img: "/panelist/a.jpg",
      link: "https://www.linkedin.com/",
      panelistName: "hey",
      panelistsDesignation: "director",
      reverseOrder: true,
      height: "250px",
    },
    {
      img: "/panelist/a.jpg",
      link: "https://www.linkedin.in/",
      panelistName: "hey",
      panelistsDesignation: "director",
      reverseOrder: true,
      height: "250px",
    },
    {
      img: "/panelist/a.jpg",
      link: "https://www.linkedin.in/",
      panelistName: "hey",
      panelistsDesignation: "director",
      reverseOrder: true,
      height: "250px",
    },
    {
      img: "/panelist/a.jpg",
      link: "https://www.linkedin.in/",
      panelistName: "hey",
      panelistsDesignation: "director",
      reverseOrder: true,
      height: "250px",
    },
    {
      img: "/panelist/a.jpg",
      link: "https://www.linkedin.in/",
      panelistName: "hey",
      panelistsDesignation: "director",
      reverseOrder: true,
      height: "250px",
    },


  ];

  return (
    <div className={mainDiv} id="campus">
      <div className={panelHeadingDiv}>
        <h1 className="heading" id={panelHeading}>
          Our Panelists
        </h1>
      </div>
      <div className={panelDiv}>
        {panel.map((panel, index) => (
          <div className={panelInfo} key={index}>
            <Link target="_blank" to={panel.link}>
              <img className={panelImage} src={panel.img} alt={panel.name} />
              <div className={panelistName}>
                <p>{panel.panelistName}</p>
              </div>
              <div className={panelistsDesignation}>
                <p>{panel.panelistsDesignation}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
 );
};

export default Panelist;
