import './Profil.scss';
import img from '../../assets/grincheux.jpg';

function Profil() {
  return (
    <div id="profil" className="profil">
      <img src={img} alt="Photo de Jean-Baptiste Besançon" />
      <p>Mon texte de présentation</p>
    </div>
  );
}

export default Profil;
