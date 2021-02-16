import { FaSoundcloud } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { SiBeatport } from 'react-icons/si';

import { SOCIAL_LINKS } from '../../constants/CONSTANTS';
import './MainNav.css';

const MainNav = () => {
  return (
    <IconContext.Provider value={{ className: "social-icons" }}>
        <div className="icon-wrapper">
            <a href={SOCIAL_LINKS.spotifyURL} target="_blank" rel="noreferrer">
                <FaSpotify className="spotify" />
            </a>

            <a href={SOCIAL_LINKS.soundcloudURL} target="_blank" rel="noreferrer">
                <FaSoundcloud className="soundcloud" />
            </a>

            <a href={SOCIAL_LINKS.instagramURL} target="_blank" rel="noreferrer">
                <FaInstagram className="instagram" />
            </a>

            <a href={SOCIAL_LINKS.beatportURL} target="_blank" rel="noreferrer">
                <SiBeatport className="beatport" />
            </a>

            <a href={SOCIAL_LINKS.facebookURL} target="_blank" rel="noreferrer">
                <FaFacebook className="facebook" />
            </a>
        </div>
    </IconContext.Provider>
  );
}

export default MainNav;
