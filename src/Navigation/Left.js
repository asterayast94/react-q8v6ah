import React from 'react';

import { sum, ShowUSerNAme, checkUserLogedInStatus,ShowText } from '../component/sessionManager.js';
import '../css/custom.css';
export default function DrawerPAge(props) {
  return (
    <div>
 
    
    <div className="Auth-form-content">
   
   <div className='d-flex align-items-center'>
<img
src='https://mdbootstrap.com/img/new/avatars/6.jpg'
alt=''
style={{ width: '45px', height: '45px' }}
className='rounded-circle'
/>
<div className='ms-3'>
<h3 className='fw-bold mb-1'>{ShowUSerNAme()}</h3>
<span className="link-primary" onClick={ }>
 <h2>  {ShowUSerNAme()} </h2>
 </span>
<p className='text-muted mb-0'>alex.ray@gmail.com</p>
</div>
</div>




<button style={{  width:100  }}   onClick={ }>Page 1</button>
<button style={{  width:100  }}   onClick={ }>Page 2</button>




</div>

   


 

 </div>
 );

}