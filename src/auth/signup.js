import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = (response) => {
    // Handle Google OAuth success
    console.log('Google login success:', response);
    // Redirect or perform other actions
  };

  const handleGoogleFailure = (response) => {
    // Handle Google OAuth failure
    console.error('Google login failed:', response);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    navigate('/shop'); // Redirect to dashboard after sign-up
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form
          onSubmit={handleSignUp}
          className="mb-4">
          <div className="mb-4">
            <label
              className="block mb-1"
              htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-1"
              htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Sign Up
          </button>
        </form>
        <div className="text-center mb-4">or</div>
        <GoogleLogin
          clientId="366480223374-u4rtm4q42p7pi6513n6fvs34i9sull5a.apps.googleusercontent.com"
          buttonText="Continue with Google"
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
          cookiePolicy={'single_host_origin'}
          className="w-full"
        />
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;