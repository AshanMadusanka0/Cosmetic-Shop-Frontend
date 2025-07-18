import { Link } from 'react-router-dom';
import './homePage.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple homepage styled with CSS.</p>
      <button>Explore More</button>
      
      <Link to="/login">Login</Link>
      
    </div>
  );
}
