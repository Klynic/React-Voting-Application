import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './Components/images/ECN_logo-1.png';

const Logins = () => {
  const AllowedUsers = [
    'Randomid-1a',
    'Randomid-2b',
    'Randomid-3c',
    'Randomid-4e',
    'Randomid-5a',
    'Randomid-6y',
    'Randomid-7i',
    'Randomid-8o',
    'Randomid-9w',
    'Randomid-10e',
  ];

  const [username, setUsername] = useState('');
  const [hasVoted, setHasVoted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has voted when component mounts
    const storedHasVoted = localStorage.getItem(username);
    if (storedHasVoted === 'true') {
      setHasVoted(true);
    }
  }, [username]);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (AllowedUsers.includes(username)) {
      if (!hasVoted) {
        alert('User Can Vote');
        // Update localStorage to indicate that the user has voted
        localStorage.setItem(username, 'true');
        setHasVoted(true);
        navigate('/dashboard');
      } else {
        alert('User has already voted');
      }
    } else {
      alert('User Can not Vote');
    }
  };

  return (
    <div className="lg:bg-slate-950 h-screen flex justify-center items-center">
      <div>
        <div className="lg:bg-white lg:w-[50rem] h-[30rem] rounded-3xl flex justify-center items-center px-5  lg:px-20">
          <div className="lg:w-full">
            <div className="w-32 flex m-auto py-5">
              <img src={logo} alt="" />
            </div>
            <form action="" onSubmit={handleSubmit}>
              <h2 className="text-center pb-5 text-slate-950 lg:text-slate-950">Please input your unique ID</h2>
              <input
                type="text"
                required
                value={username}
                onChange={handleChange}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button
                className="btn btn-active  btn-primary bg-slate-900 text-white border-none hover:bg-slate-800 py-3 px-10 mt-5 w-full"
                disabled={hasVoted}
              >
                Verify Unique ID
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logins;
