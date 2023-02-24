import { useState } from "react";

import { Link } from "react-router-dom";
const DropDownCountry = ({ setCountry ,country,countryCode, setCountryCode}) => {
    function displayRadioValue() {
        var ele = document.getElementsByName('question5');

        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked){
                switch(ele[i].value){
                    case 'Egypt':setCountryCode("EGP");break;
                    case 'Germany':setCountryCode("EUR");break;
                    case 'Afghanistan':setCountryCode("AFN");break;
                    case 'USA':setCountryCode("USD");break;
                    case 'Belgium':setCountryCode("EUR");break;
                    case 'Chile':setCountryCode("CLP");break;
                    case 'Croatia':setCountryCode("HRK");break;
                    default:break;
                }

                return ele[i].value;


            }
        }
    }
    // const [x, setX] = useState('Title');
    // <button class="dropdown-item" name="dropdownitem" value="Egypt" > Egypt</button>
    // <button class="dropdown-item" name="dropdownitem" value="Germany"  href="#">Germany</button>
    // <button class="dropdown-item" name="dropdownitem" value="Afghanistan"  href="#">Afghanistan</button>
    // <button class="dropdown-item" name="dropdownitem" value="USA"  href="#">USA</button>
    // <button class="dropdown-item" name="dropdownitem" value="Albania"  href="#">Albania</button>
    // <button class="dropdown-item" name="dropdownitem" value="Belgium"  href="#">Belgium</button>
    // <button class="dropdown-item" name="dropdownitem" value="Chile"  href="#">Chile</button>
    // <button class="dropdown-item" name="dropdownitem" value="Croatia"  href="#">Croatia</button>
    return (
        <div className="dropdown">

            <Link className="nav-link"  id="dropdownMenuButton"
                data-bs-toggle="dropdown" aria-expanded="false" >
               {country}|{countryCode}
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="Egypt" id="Checkme1" name="question5" onChange={() => {
                                // setX(displayRadioValue());
                                setCountry(displayRadioValue())
                            }} />
                            <label className="form-check-label" htmlFor="Checkme1">Egypt</label>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="Germany" id="Checkme2" name="question5" onChange={() => {
                                // setX(displayRadioValue());
                                setCountry(displayRadioValue());
                            }} />
                            <label className="form-check-label" htmlFor="Checkme2">Germany</label>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="Afghanistan" id="Checkme3" name="question5" onChange={() => {
                                // setX(displayRadioValue());
                                setCountry(displayRadioValue())
                            }} />
                            <label className="form-check-label" htmlFor="Checkme3">Afghanistan</label>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="USA" id="Checkme4" name="question5" onChange={() => {
                                // setX(displayRadioValue());
                                setCountry(displayRadioValue())
                            }} />
                            <label className="form-check-label" htmlFor="Checkme3">USA</label>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="Albania" id="Checkme5" name="question5" onChange={() => {
                                // setX(displayRadioValue());
                                setCountry(displayRadioValue())
                            }} />
                            <label className="form-check-label" htmlFor="Checkme3">Albania</label>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="Belgium" id="Checkme5" name="question5" onChange={() => {
                                // setX(displayRadioValue());
                                setCountry(displayRadioValue())
                            }} />
                            <label className="form-check-label" htmlFor="Checkme3">Belgium</label>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="Chile" id="Checkme5" name="question5" onChange={() => {
                                // setX(displayRadioValue());
                                setCountry(displayRadioValue())
                            }} />
                            <label className="form-check-label" htmlFor="Checkme3">Chile</label>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="Croatia" id="Checkme5" name="question5" onChange={() => {
                                // setX(displayRadioValue());
                                setCountry(displayRadioValue())
                            }} />
                            <label className="form-check-label" htmlFor="Checkme3">Croatia</label>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default DropDownCountry