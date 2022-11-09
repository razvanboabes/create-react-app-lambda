import Header from "./Header";
import "../Styles/SignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faEnvelope, faIdCard, faKey, faPaw } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const url = window.location.href.split(":")[0] + ":" + window.location.href.split(":")[1];
    

    // const submit = async () => {
    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             firstName: firstName,
    //             lastName: lastName,
    //             email: email,
    //             password: password
    //         })
    //     };
    //     console.log(url);
    //     const responseJSON = await fetch(`${url}:8080/sign-up`, options);
    //     const response = await responseJSON.json();
    //     console.log(response.message, response.error);
    //     if (response.message) {
    //         localStorage.setItem("logged", true);
    //         navigate("/");
    //     }
    // };

    return (
        <div className="signin-page">
            <Header />

            <div>
          <form
          name="add-subscriber"
          id="myForm"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          enctype="application/x-www-form-urlencoded">
            <input type="hidden" name="form-name" value="add-subscriber" />
            <input type="email" name="userEmail" v-model="formData.userEmail"/>
            <button type="submit" name="button">Subscribe</button>
          </form>
        </div>
            
        </div>
    );
};