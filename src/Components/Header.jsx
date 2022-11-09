import { faArrowRight, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo2.png";
import "../Styles/Header.css";

export default function Header() {

    const navigate = useNavigate();

    const ulRef = useRef();

    return (
        <nav>

            <div className="nav-icon" onClick={() => {
                console.log(ulRef);
                ulRef.current.classList.toggle("show")}
            }>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <ul ref={ulRef}>

                <li className="first" onClick={() => navigate("/")}>
                    <img src={logo} alt="logo image" />
                </li>
                <li>About</li>
                <li>Services</li>
                <li>Testimonials</li>
                <li>Support</li>
                {!localStorage.getItem("logged") ? 
                    (<li className="last" onClick={() => navigate("/sign-in")}>Sign In 
                        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                    </li> )
                : (
                    <li className="last account-last" onClick={() => navigate("/account")}>
                        <FontAwesomeIcon icon={faUser} />
                        Account
                    </li>
                )}
                
            </ul>
        </nav>
    );
};