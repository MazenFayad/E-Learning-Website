import { Link } from "react-router-dom";

const Policiy = () => {
    return (
        <div className="container">
            <div class="jumbotron">
                <p>
                    <h3 style={{color:'#2a9d8f'}}>Terms and Conditions</h3>
                    <p style={{color:'#0f4c5c'}}>
                        Welcome to AnonymousWebsite <br></br>
                        These terms and conditions outline the rules and regulations for the use of Company Name's Website
                        , located at AnonymousWebsite.com. <br></br>
                        By accessing this website we assume you accept these terms and conditions.
                        Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page.
                    </p>
                    <h3 style={{color:'#2a9d8f'}}>Refund Policy</h3>
                    <p style={{color:'#0f4c5c'}}>
                        You will get a refund for any course if you have not completed more than 50% of the course.
                    </p>
                </p>
                <pre><strong >HR team AnonymousWebsite</strong></pre>
            </div>
        </div>
    );
}
export default Policiy;