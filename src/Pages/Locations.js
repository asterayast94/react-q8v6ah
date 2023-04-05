import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { sum, ShowUSerNAme, checkUserLogedInStatus,ShowText ,TestFunction} from '../component/sessionManager.js';
export default function Locations(props) {
  checkUserLogedInStatus();
  TestFunction( );

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Main PAge </h3>

          {/* <button onClick={changePage}>Home</button> 
          <button onClick={changePage2}>in</button> */}

          <div className="text-center">
         
            <span className="link-primary" onClick={ }>
             Main PAge  { }
            </span>
          </div>

          <div>
    <h2>5 + 5 = {sum(5, 5)}</h2>
    <hr />

    <h4> : {ShowText()}</h4>
    <h2>Logged in user name is : {ShowUSerNAme()}</h2>


  </div>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
   
        </div>
      </form>
    </div>
  );
}
// const Sheeps = () => {
//   return (
//     <div>
//       <h3>Sheeps real PAge dg</h3>
//       <div>
//         {/* <img src="./sheeps.png" />
//         <img src="./sheeps.jpg" /> */}
//       </div>
//     </div>
//   );
// };
// export default Sheeps;
