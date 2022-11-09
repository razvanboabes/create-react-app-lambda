import Header from "./Header";
import "../Styles/Home.css";
import paw from "../images/paw.png";
import petSharingImage from "../images/pet_sharing.jpg";
import dogWalk from "../images/dog-walk.jpeg";
import petFamily from "../images/pet_family.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faHome, faLink, faPaw } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <div className="container">
            <Header />
            <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
            <div className="first-part">
                <div className="title-content">
                    <h2 className="title">Pet sharing. <FontAwesomeIcon icon={faPaw} className="paw-icon" /><br /> <span>Platform</span> that connects pet owners with pet sitters.</h2>

                </div>

                <div className="layout"></div>
                {/* <div className="title-image">
                    <img src={petSharingImage} alt=""/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L60,192C120,192,240,192,360,160C480,128,600,64,720,32C840,0,960,0,1080,21.3C1200,43,1320,85,1380,106.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div> */}
            </div>
                
            <div className="second-part">
                <h2 className="second-part-title">Petaway. The <span>better way.</span></h2>
                <p>Connection between pet owner and pet sitter.</p>
                <div className="card-container">
                    <div className="card">
                        <h2 className="card-title">I want to let my pet to someone who loves it.</h2>
                        <p>Petaway is intended for those who don't have any option where to leave their pet. This is the platform where these people can find pet-sitters.</p>
                        <div className="dominant-container-icon">
                            <FontAwesomeIcon icon={faDog} className="dominant-icon"/>
                        </div>
                    </div>

                    <div className="connector">
                        <FontAwesomeIcon icon={faLink} className="connector-icon"/>
                    </div>

                    <div className="card">
                        <h2 className="card-title">I want to spend time and play with pets.</h2>
                        <p>Petaway is also intended for those who ocasionally want to play, spend time and take care of pets but don't have any opportunity to do it. This is the platform where those people can find pet owners.</p>

                        <div className="dominant-container-icon">
                            <FontAwesomeIcon icon={faHome} className="dominant-icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="third-part">
                <div className="text-container">
                    <h2 className="coloured-title">Trustful and safe houses.</h2>
                    <p className="normal-text">Every pet-sitter on this platform is here because they love taking care of pets and spending time with them. It's a connection between human and pet. You can choose which pet-sitter is best for your companion animal.</p>
                </div>
                <div className="image-container">
                    <img src={petFamily} className="dog-sitting-image" alt="dog sitting image" />
                </div>
            </div>

            <div className="fourth-part">

                <div className="image-container">
                    <img src={dogWalk} alt="dog walking image" />
                </div>

                <div className="text-container">
                    <h2 className="coloured-title">Your pet will not feel any difference in his routine.</h2>
                    <p className="normal-text">Pet-owner can communicate the pet's routine that must be respected by the pet-sitter. This way, the pet won't feel the transition from his owner to his pet-sitter.</p>
                </div>
            </div>
        </div>
    );
};