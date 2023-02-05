import React from 'react'
import Header from '../misc/Header'
import Feedback from '../misc/Feedback'
import './page.css'
const Home = () => {
    return (
        
        <React.Fragment>
            
            <Header />
            <section className="content-container">
            
                <div style={{textAlign:"left"}}  className="textArea"> 
                    <h2 style={{fontSize:"3em"}}>We're here for you</h2>
                    <ul style={{fontSize:"1.5em"}}>
                        <li style={{marginBottom:"0.5em"}}>61% of women who have children while in community college drop out</li>
                        <li style={{marginBottom:"0.5em"}}>70% of women take some form of maternity leave</li>
                        <li style={{marginBottom:"0.5em"}}>Generally, women drop out/slow their career due to being primary caregivers</li>
                    </ul>
                    {/* <h2 style={{fontSize:"2em"}}>&nbsp;We understand, and we're here to help.</h2> */}
                    <h2 style={{fontSize:"1.5em"}}>&nbsp;&nbsp;Head to the 'Start' tab to get started with WiCE.</h2>
                    <hr size="20" ></hr>
                <Feedback/>
                </div>
                
            </section>
            
            
        </React.Fragment>

    )
}

export default Home;
