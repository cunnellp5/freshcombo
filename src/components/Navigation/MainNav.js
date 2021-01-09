import { FaSoundcloud, FaInstagram, FaFacebook, FaSpotify } from 'react-icons/fa';
import { SiBeatport } from 'react-icons/si';
import { IconContext } from "react-icons";
import './MainNav.css';

const MainNav = () => {
  return (
    <IconContext.Provider value={{ className: "social-icons" }}>
        <div className="icon-wrapper">
            <a href="https://open.spotify.com/artist/0lMtFfBLU428h17QQ7pD3C" target="_blank" rel="noreferrer">
                <FaSpotify className="spotify" />
            </a>

            <a href="https://soundcloud.com/freshcombo" target="_blank" rel="noreferrer">
                <FaSoundcloud className="soundcloud" />
            </a>

            <a href="https://www.instagram.com/freshcombo/" target="_blank" rel="noreferrer">
                <FaInstagram className="instagram" />
            </a>

            <a href="https://www.beatport.com/artist/fresh-combo/913072" target="_blank" rel="noreferrer">
                <SiBeatport className="beatport" />
            </a>

            <a href="https://www.facebook.com/freshcombomusic" target="_blank" rel="noreferrer">
                <FaFacebook className="facebook" />
            </a>
        </div>
    </IconContext.Provider>
  );
}

export default MainNav;
