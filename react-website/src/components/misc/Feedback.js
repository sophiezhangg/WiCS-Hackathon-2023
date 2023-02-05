import React from 'react'

const Feedback = () => {
  return (
    
                <div className="textArea"> 

                        <form id="contact" action="">
                        <h2>Feedback</h2>
                    <p>
                        We would love to hear from you!<br/>
                        For any comments or suggestions, feel free to drop us an email!
                    </p>
                            <h4>Leave us a message</h4>
                            <fieldset>
                                <input placeholder="Your Name" type="text" tabIndex="1" required autoFocus />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Subject" type="text" tabIndex="2" required autoFocus />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Email Address" type="email" tabIndex="3" required />
                            </fieldset>
                            <fieldset>
                                <input placeholder="Your Phone Number" type="tel" tabIndex="4" required />
                            </fieldset>
                            <fieldset>
                                <textarea placeholder="Type your Message Here...." tabIndex="5" required></textarea>
                            </fieldset>
                            <fieldset>
                                <button style={{maxWidth:"90%"}} name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                            </fieldset>
                        </form>
                        </div>   
                      
                    
      
  )
}

export default Feedback