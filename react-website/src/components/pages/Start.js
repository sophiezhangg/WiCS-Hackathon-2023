import React from 'react'
import HeaderStart from '../misc/HeaderStart';
const Start = () => {
  return (
    <React.Fragment>
        <HeaderStart/>
        <section className="content-container">
        
        <div className="textArea"> 
            <h1>Here is how this works:</h1>
            <ul>
                <li>Complete the short survey below about your background and goals</li>
                <li>Our algorithm will design a custom learning plan based on your responses</li>
                <li>We will output the user stats along with a list of resources and a description of their benefits</li>
            </ul>
            

        </div>
        <iframe src="https://utexas.qualtrics.com/jfe/form/SV_4UEDAq5XwQcxnh4" height="800px" width="100%"></iframe>
        </section>
    </React.Fragment>
 
    
  )
}

export default Start;
