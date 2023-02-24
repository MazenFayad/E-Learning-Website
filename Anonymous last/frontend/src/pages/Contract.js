import { Link } from "react-router-dom";


const Contract = () => {
    return (
        <div className="container">
            <h1>Welcome To Our Family</h1>
            <h3>Contract:</h3>
            <div class="jumbotron">
                <p class="lead"><strong>By Accepting This Contract You Agree to give us the rights to all the materials and videos that you will upload
                to post them on our website in return to a percentage of 50% of profit came from these course 
                <h4>Where you are not allowed to Suit Us for using these material by signing this Contract according to what Stated Above</h4></strong></p>
                <pre>                                                                                                                    <strong >HR team AnonymousWebsite</strong></pre>
                <hr class="my-4"/>
                <pre><Link to='/'type="button" class="btn btn-primary">Accept</Link>    <Link to='/'type="button" class="btn btn-danger">Reject</Link> </pre>
            </div>
        </div>
    );
}
export default Contract