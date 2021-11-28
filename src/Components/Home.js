import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div>
        <h2>You're invited to our Saint Agathas' Reunion Celebration!!</h2>
        <h3>
          <Link to="/form" style={{ textDecoration: "none" }}>
            Click here to access form
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default Home;
