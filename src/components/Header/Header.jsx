import './Header.scss';

function Header() {
  return (
    <header id="header" className="header">
      <h1>Jean-Baptiste Besançon</h1>
      <nav>
        <ul>
          <li>
            <a href="header">Home</a>
            <ul className="sous">
              <li>
                <a href="profil">Profil</a>
              </li>
              <li>
                <a href="projects">Portfolio</a>
              </li>
              <li>
                <a href="skills">Skills</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
