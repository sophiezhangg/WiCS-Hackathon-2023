import React from 'react'
import wics from '../../images/WiCS-logo.png'
import group from '../../images/group.jpg'

const AboutUs = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>About Us</h2>
                    {/* align="left" image goes here */}
                    <img style={{float: "center", alignSelf: "center", width: "25em", justifySelf: "center"}} src={group}/>
                    
                    <p>
                       Born from the work of four hackers at <a href="https://www.cs.utexas.edu/~wics/hackathon.html"> UT Austin WiCS Hacks 2023</a>, Women in Continued Education (WiCE) aims to streamline the process of re-entering education -- be it traditional or self-taught -- for women. With our personalized survey, women can receive recommendations for various courses, boot camps, and certifications based on their availability, interests, and education level. Our system classifies the needs of each participant and emails their results, which details a recommended lesson plan complete with resources from anything ranging from free code camps to college programs.
                    </p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default AboutUs;