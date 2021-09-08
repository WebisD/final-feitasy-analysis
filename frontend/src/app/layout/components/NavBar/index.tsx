import ImgDS from '../../../assets/img/icon.svg';
import ImgDsTitle from '../../../assets/img/title.svg';

const NavBar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
        <div className="container">
          <nav className="my-2 my-md-0 mr-md-3">
            <img src={ImgDS} alt="Final Feitasy" width="50" />
            <img src={ImgDsTitle} alt="Titulo" width="50" />
          </nav>
        </div>
      </div>
    );
  }
  
  export default NavBar;