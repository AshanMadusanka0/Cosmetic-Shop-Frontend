import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className='w-full h-screen bg-amber-600 flex justify-center items-center'>
      <div className='w-[450px] h-[450px] bg-green-700 flex flex-col justify-center items-center'>
        <img src='/logo.png' className='w-[120px] '/>
       
            <span>Email</span>
            <input type="text" placeholder="Enter E-mail" className='bg-amber-50'/>

            <span>Password</span>
            <input type="password" placeholder="Enter password" className='bg-amber-50'/>
            <button>Login</button>
          

      </div>

    </div>
  );
}
