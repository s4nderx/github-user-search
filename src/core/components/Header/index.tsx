import { Link } from 'react-router-dom';
import './styles.scss';

const Header  = () => {
  return (
    <div className="header-container">
      <Link to="/" className="header-title">
        <h1>Bootcamp DevSuperior</h1>
      </Link>
    </div>
  );
}

export default Header;