import React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Application homepage" />
      </Helmet>
      {/* <span>HomePage container</span> */}

      <form method="POST" action="http://localhost:3001/api/users/signup">
        <h4>Register</h4>
        <div>
          <label >First Name</label>
          <input type='text' name="fname"/>
        </div>
        <div>
          <label >Last Name</label>
          <input type='text' name="lname"/>
        </div>
        <div>
          <label >Email Address</label>
          <input type='text' name="email"/>
        </div>
        <div>
          <label >Mobile</label>
          <input type='text' name="mobile"/>
        </div>
        <div>
          <label >Username</label>
          <input type='text' name="username"/>
        </div>
        <div>
          <label >Password</label>
          <input type='password' name="password"/>
        </div>
        {/* <div>
          <label >Confirm Password</label>
          <input type='password' name='password'/>
        </div> */}
        <button>Submit</button>
      </form>
    </>
  );
}
