import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page1">
      <div className="Home">
        <div className="page1-text">
          <h1>LETS MEET</h1>
          <h1>CATCH UP</h1>
          <h1>AND</h1>
          <h1>CELEBRATE</h1>
          <h5>You are invited to join us for our </h5>
          <h3>Saint Agathas' Reunion Celebration</h3>
          <h5>Saturday, Auguest 25th</h5>
          <h5>
            <strong>4 PM</strong>
          </h5>
          <h5>Bonafide Lounge</h5>
          <h5>Bronx, NY 10456</h5>
          <h3>
            <Link to="/form" style={{ textDecoration: "none" }}>
              Click here to RSVP
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
