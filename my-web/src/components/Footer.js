import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    let year = new Date().getFullYear();

    return (
        <footer>
            {/* socials: github, youtube, linkedin, instagram */}
            <div className="socials">
                <div className="icon" onClick={() => window.open("https://github.com/MyeongseongKim", "_blank")}>
                    <FontAwesomeIcon icon={faGithub} className="logo color github" />
                    <FontAwesomeIcon icon={faGithub} className="logo bw github" />
                </div>
                <div className="icon" onClick={() => window.open("https://www.youtube.com/channel/UCNO9pBEjRyb-8NW2R75SeUQ", "_blank")}>
                    <FontAwesomeIcon icon={faYoutube} className="logo color youtube" />
                    <FontAwesomeIcon icon={faYoutube} className="logo bw youtube" />
                </div>
                <div className="icon" onClick={() => window.open("https://www.linkedin.com/in/myeongseong-kim-27a30015b", "_blank")}>
                    <FontAwesomeIcon icon={faLinkedin} className="logo color linkedin" />
                    <FontAwesomeIcon icon={faLinkedin} className="logo bw linkedin" />
                </div>
                <div className="icon" onClick={() => window.open("https://www.instagram.com/", "_blank")}>
                    <FontAwesomeIcon icon={faInstagram} mask={faSquareFull} inverse className="logo color instagram" />
                    <FontAwesomeIcon icon={faInstagram} className="logo bw instagram" />
                </div>
            </div>

            {/* a copyright */}
            <div className="copyright">
                © {year} Myeongseong Kim
            </div>
        </footer>
    );
}

export default Footer;
