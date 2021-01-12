import './ContactInfo.css';
import { EMAIL } from '../../constants/CONSTANTS';

const ContactInfo = () => {
  return (
      <a href="mailto:{freshcombomusic@gmail.com}" >
        <div className="contact">{ EMAIL } </div>
      </a>
  );
}

export default ContactInfo;
