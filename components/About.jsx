import React from "react";
import Image from "next/image";
import AboutAIESEC from "../public/assets/images/landing/asl-img-min.jpg";

function About() {
  return (
    <div id="about" className="sm:flex  items-center px-10 sm:px-60 pt-14">
      <div className="text-right text-sm pt-11">
        <p>
          <span className="text-aiesec-blue font-semibold"><i>AIESEC</i></span> is the world’s largest youth-led organization,<br />
          currently presentin over 110 nations with a vision to<br />
          achieve peace and fulfilment of human kind’s potential.
        </p>
        <br />
        <p>
          <span className="text-aiesec-blue font-semibold"><i>In Sri Lanka,</i></span> AIESEC has been creating a positive impact since 1995.<br />
          We empower the nation's youth by providing a powerful network of cross-cultural exchanges<br />
          from global volunteering projects to professional internships,<br />
          giving students the practical skills and global perspective to build a brighter future.
        </p>
        <br />
        <p>
        <span className="text-aiesec-blue font-semibold"><i>University of Peradeniya's AIESEC</i></span> chapter is a passionate team of Pera students dedicated to empowering our peers.<br />
          We bring global opportunities directly to you, run impactful projects right here on campus,<br />
          and open the door for you to challenge yourself, develop your potential,<br />
          and become a leader—whether at home or abroad.
        
        </p>
        <br />
      </div>
      <div className="pl-7">
        <Image src={AboutAIESEC} alt="AIESEC Logo" width={500} />
      </div>
    </div>
  );
}

export default About;
