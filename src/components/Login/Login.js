"use client"

import { useState } from 'react';
import style from './Login.module.css'
import { useRouter } from 'next/navigation';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [companyName, setCompanyname] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [token,setToken]=useState('')


    const [emailEntered,setEmailEntered]=useState(false)
    const [emailVerified,setEmailVerified]=useState(false)
    const [signupSuccesfull,setSignupSuccesfull]=useState(false)
    const [loginSuccesfull,setLoginSuccesfull]=useState(false)

    const router = useRouter()

    const handleSubmit = (e) => {
      console.log(email,token,password,username)
      if(!emailEntered){
        setEmailEntered(true)
      }
      else if(emailEntered && !emailVerified){
        setEmailVerified(true)
      }
      else if(emailEntered && emailVerified){
        setPassword('')
        setSignupSuccesfull(true)
        router.push('/student/home')
      }
      e.preventDefault();
      if (isLogin) {
        router.push('/student/home')
      }
       else {
      }
     
    };
  
    return (

<div className='bg-gray-700 py-12'>
<h1 className={`text-4xl font-bold mb-12 text-center text-gray-50 ${style.heading}`}>Campus Recruitment Sytem</h1>

<div className="grid sm:grid-cols-1 lg:sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 2xl:md:grid-cols-2">

  <div className="flex-1 bg-gray-100 p-10 h-auto flex flex-row items-center">
    <img src="/Assets/form/form-image.jpg" alt="Your Image" className="w-full h-auto" />
  </div>

  <div className="flex-1  p-6 sm:px-16">
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-50">{isLogin ? 'Login' : 'Sign Up'}</h2>
      {!isLogin && emailVerified && (
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-400 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
      )}
      {!isLogin && emailVerified && isChecked && (
        <div className="mb-4">
          <label htmlFor="companyname" className="block text-gray-400 text-sm font-bold mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="companyname"
            value={companyName}
            onChange={(e) => setCompanyname(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
      )}
      {isLogin?
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      :
      !emailEntered &&
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      }
      {!isLogin && emailEntered &&  !emailVerified && (
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-400 text-sm font-bold mb-2">
            Token
          </label>
          <input
            type="text"
            id="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
      )}
      {isLogin?<div className="mb-6">
        <label htmlFor="password" className="block text-gray-400 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      :
      emailVerified && <div className="mb-6">
      <label htmlFor="password" className="block text-gray-400 text-sm font-bold mb-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
      }
      {!isLogin && emailVerified && (
        <div className="mb-4">
          <label htmlFor="terms" className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="mr-2 leading-tight"
            />
            <span className="text-sm text-gray-400">I am a company</span>
          </label>
        </div>
      )}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {isLogin ? 'Login' : !emailEntered?'Next':emailEntered && !emailVerified?'VerifyEmail':emailEntered && emailVerified && 'signin'}
      </button>
    </form>
    <p className="mt-4">
      {isLogin ? "Don't have an account?" : 'Already have an account?'}
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="ml-2 text-blue-500 hover:underline focus:outline-none"
      >
        {isLogin ? 'Sign Up' : 'Login'}
      </button>
    </p>
  </div>
</div>

</div>
    );
}

export default Login