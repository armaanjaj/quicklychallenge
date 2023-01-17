import React from 'react'
import { Link } from 'react-router-dom';

function Page401() {
  return (
    <div className="grid text-center mt-5 container h-75 mt-5 w-25 border rounded shadow py-5 px-3 mb-5 bg-white">
      <div className="g-col-4"></div>
      <div className="g-col-4">
        <div>
          <div>Error 401 - Unauthorized</div>
          <div>You are not authorized to access this page.</div>
          <div><Link to={"/login"}>Login</Link> if you have an account with us, else</div>
          <div><Link to={"/signup"}>Signup</Link> here!</div>
        </div>
      </div>
      <div className="g-col-4"></div>
    </div>
  )
}

export default Page401;
