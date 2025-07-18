import './loginPage.css';

export default function LoginPage() {
  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <input type="text" placeholder="Enter your Username" />
      <input type="password" placeholder="Enter your Password" />
      <button>Login</button>
    </div>
  );
}
