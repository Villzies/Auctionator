import React from "react";
// Here we could import images from our ../assets/images page like our headshots

const About = () => {
    return (
        <section id="about" style={containerStyle}>
            <div style={aboutInfoStyle}>
                <h2 style={headingStyle}>About the team!</h2>
                <p style={paragraphStyle}>
                    Hi, We are four students currently studying at one of the UT immersive full stack coding bootcamps. We made this application and others to better comprehend and extend our knowledge in coding to achieve and acquire our respective dream positions in the tech field.
                </p>
                <p style={paragraphStyle}>
                    We are proficient in a variety of languages in both Front and Back-End devlopment such as HTML, CSS, Javascipt, Node.js, SQL, ORM, MongoDB, and React.
                </p>
            </div>
        </section>
    );
};

const containerStyle = {
    padding: '20px',
    backgroundColor: '#242129',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '400px', 
    margin: 'auto', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
};

const aboutInfoStyle = {
    marginBottom: '15px',
};

const headingStyle = {
    color: '#FFF',
};

const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    padding: '5px'
};

export default About;