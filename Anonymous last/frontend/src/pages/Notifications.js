import { Link } from "react-router-dom";


const Notifications = () => {
    return (
        <div className="container">
            <h1>HelloFromNotifications</h1>
            <Link to="/contract" className="btn btn-success" >You need To Check Your Contract</Link>
        </div>
    );



}
export default Notifications