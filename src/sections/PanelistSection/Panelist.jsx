import styles from "./Panelist.module.css";
import { Link } from "react-router-dom";

const {
  mainDiv,
  panelHeadingDiv,
  panelHeading,
  panelDiv,
  panelInfo,
  panelInfoLink,
  panelImage,
  panelistName,
  panelistsDesignation,
} = styles;

const Panelist = () => {
  const panel = [
    // {
    //   img: "/panelist/vivekShridhar.png",
    //   link: "https://www.linkedin.com/in/vivsridh/",
    //   panelistName: "Vivek Sridhar",
    //   panelistsDesignation: "CTO at Microsoft for Startups | Microsoft",
    //   reverseOrder: true,
    //   height: "250px",
    // },
    {
      img: "/panelist/maharshiBanerjee.png",
      link: "https://www.linkedin.com/in/maharshibanerjee/",
      panelistName: "Maharshi Banerjee",
      panelistsDesignation: "Consultant Cyber Security | TCS",
      reverseOrder: true,
      height: "250px",
    },
    {
      img: "/panelist/venkataSatishGuttula.png",
      link: "https://www.linkedin.com/in/venkatasatishguttula/",
      panelistName: "Venkata Satish Guttula",
      panelistsDesignation:
        "Co-Founder and CEO | Suven Cybersecurity Private Limited",
      reverseOrder: true,
      height: "250px",
    },
    {
      img: "/panelist/anmolWassan.png",
      link: "https://www.linkedin.com/in/anmolwassan/",
      panelistName: "Anmol Wassan",
      panelistsDesignation: "Senior Product Manager | Lemnisk",
      reverseOrder: true,
      height: "250px",
    },
    {
      img: "/panelist/profile.jpg",
      link: " ",
      panelistName: "Lt. Col Anand Waiker",
      panelistsDesignation: " ",
      reverseOrder: true,
      height: "250px",
    },
  ];

  return (
    <div className={mainDiv} id="panel">
      <div className={panelHeadingDiv}>
        <h1 className="heading" id={panelHeading}>
          Our Panelists
        </h1>
      </div>
      <div className={panelDiv}>
        {panel.map((panel, index) => (
          <div className={panelInfo} key={index}>
            <Link className={panelInfoLink} target="_blank" to={panel.link}>
              <img className={panelImage} src={panel.img} alt={panel.name} />
              <div className={panelistName}>{panel.panelistName}</div>
              <div className={panelistsDesignation}>
                {panel.panelistsDesignation}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Panelist;
