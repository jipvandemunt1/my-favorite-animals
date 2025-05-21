import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faOtter } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header>
      <nav>
        <FontAwesomeIcon icon={faOtter} style={{color: "#ffffff", fontSize: "2rem",}} />
        <h1>My Favorite Animals</h1>
      </nav>
    </header>
  );
}
