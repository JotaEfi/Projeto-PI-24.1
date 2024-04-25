import "../../styles/css/style.css";
import "../../styles/css/queries.css";
import NavBar from '../components/nav-bar.js';
function Loja() {
  return (
    <div className="container">
      {NavBar()}
      <section>
        <h1>Loja</h1>
      </section>
    </div>
  );
}

export default Loja;
