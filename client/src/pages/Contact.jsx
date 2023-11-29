import React from "react";

const Contact = () => {
    return (
        <section id="contact" style={containerStyle}>
            <h2 style={headingStyle}>
                Contact Us
            </h2>
            <p style={paragraphStyle}>
                If you have any questions about the application or anything else, don't hesitate to contact us! Below, we've posted our information for you to reach out.
            </p>
            <div style={contactInfoContainer}>
                <div style={contactInfoStyle}>
                    <span style={labelStyle}></span> 
                    <a href="mailto:chavez.garcia.santi@gmail.com" style={linkStyle}>Email Santiago Garcia-Chavez</a>
                </div>
                <div style={contactInfoStyle}>
                    <span style={labelStyle}>GitHub:</span> 
                    <a href="https://github.com/Disastris" style={linkStyle}>github.com/Disastris</a>
                </div>
                <div style={contactInfoStyle}>
                    <span style={labelStyle}></span> 
                    <a href="mailto:ramireznancy.686@gmail.com" style={linkStyle}>Email Nancy Ramirez</a>
                </div>
                <div style={contactInfoStyle}>
                    <span style={labelStyle}>GitHub:</span> 
                    <a href="https://github.com/nramirez686" style={linkStyle}>github.com/nramirez686</a>
                </div>
                <div style={contactInfoStyle}>
                    <span style={labelStyle}></span> 
                    <a href="mailto:tayascamp@yahoo.com" style={linkStyle}>Email Taylor Campanelli</a>
                </div>
                <div style={contactInfoStyle}>
                    <span style={labelStyle}>GitHub:</span> 
                    <a href="https://github.com/Camparooni" style={linkStyle}>github.com/Camparooni</a>
                </div>
                <div style={contactInfoStyle}>
                    <span style={labelStyle}></span> 
                    <a href="mailto:tayascamp@yahoo.com" style={linkStyle}>Email Stephan Gemberling</a>
                </div>
                <div style={contactInfoStyle}>
                    <span style={labelStyle}>GitHub:</span> 
                    <a href="https://github.com/Villzies" style={linkStyle}>github.com/Villzies</a>
                </div>
            </div>
        </section>
    );
};

const containerStyle = {
    padding: '20px',
    backgroundColor: '#242129',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '400px', // Adjust the width as needed
    margin: 'auto', // Center the container horizontally
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the content vertically
};

const headingStyle = {
    color: '#FFF',
};

const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
};

const contactInfoContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: '10px',
};

const contactInfoStyle = {
    marginBottom: '15px',
};

const labelStyle = {
    fontWeight: 'bold',
    marginRight: '8px',
};

const linkStyle = {
    color: '#96b09a',
    textDecoration: 'none',
};

export default Contact;