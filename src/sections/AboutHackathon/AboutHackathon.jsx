import styles from "./AboutHackathon.module.css";

const {
  mainDiv,
  headingSpan,
  content,
  contentText,
  contentPointer,
  contentPointers,
  contentPointerHeading,
  contentPointerText,

  // backgroundVectors,
  // sphereLogo,
  // cubeLogo,
} = styles;

const AboutHackathon = () => {
  return (
    <div className={mainDiv} id="about">
      <h1 className="heading">
        <span className={headingSpan}>About</span> <br />
        Hackathon 3.0
      </h1>

      <div className={content}>
        <div className={contentText}>
          UPES-Cloud Security Alliance Student Chapter is ecstatic to announce
          the 3rd Iteration of our flagship event, &quot;HACKATHON 3.0,&quot;
          which aims to be a catalyst of technical advancement and societal
          upliftment. Our mission is to inspire innovation and empower
          individuals to tackle societal challenges using technology as a tool
          to pioneer change.
          <br />
          <br />
          Our event will explore multifaceted themes including &quot;Redefining
          Urban Horizons with Innovation&quot; and &quot;Secure Digital
          Environment and Privacy,&quot; among others. &quot;HACKATHON 3.0&quot;
          will provide a platform for participants to tackle issues ranging from
          urban development to cybersecurity, offering opportunities to delve
          into multifaceted challenges and propose innovative solutions. This
          iteration of our flagship event is supported by the esteemed Microsoft
          Azure, Azure Developers Community and Reskill. Their invaluable
          support has been instrumental in bringing this event to fruition.
          <br />
          <br />
          This is your canvas to paint the future, an opportunity to blend
          innovation with purpose, and truly transform ideas into reality.
          &quot;HACKATHON 3.0,&quot; is where your solutions become the stepping
          stones for societal advancement.
          <br />
          <br />
        </div>
        <div className={contentPointers}>
          <div className={contentPointer}>
            <h1 className={contentPointerHeading}>Challenge</h1>
            <div className={contentPointerText}>
              Join hands with your team of 2-4 members and solve real world
              problems in limited time!
            </div>
          </div>
          <div className={contentPointer}>
            <h1 className={contentPointerHeading}>Perks</h1>
            <div className={contentPointerText}>
              Exciting Prizes, Internship &amp; Connection opportunities. Stay
              tuned for more updates!
            </div>
          </div>
          <div className={contentPointer}>
            <h1 className={contentPointerHeading}>Theme</h1>
            <div className={contentPointerText}>
              Redefining Urban Horizons with Innovation &amp; Secure Digital
              Environment and Privacy
            </div>
          </div>
        </div>
      </div>

      {/* <img
        src="/illustrations/sphere-dark.png"
        alt="sphere"
        id={sphereLogo}
        className={backgroundVectors}
      />

      <img
        src="/illustrations/cube-dark.png"
        alt="cube"
        id={cubeLogo}
        className={backgroundVectors}
      /> */}
    </div>
  );
};

export default AboutHackathon;
