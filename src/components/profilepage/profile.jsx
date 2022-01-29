import React from 'react';
import '../profilepage/profile.css'
import { useStateValue } from "../../StateProvider";
function Profile() {
    const [{ user}] = useStateValue();
  return (<div> 
      
          <section className='profile_section'>
          <div className="right">
          <h2 className='profile_h2'>Order Table</h2>
          <div className="table-wrapper">
          <table className="fl-table">
        <thead>
        <tr>
            <th>Order Number</th>
            <th>Order</th>
            <th>Order image</th>
            <th>Order Price</th>
            <th>Order Date</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
        </tr>
      
        </tbody>
    </table>
          </div>
          </div>
          <div className='left'>
  
          <h2 className='profile_h2' style={{textAlign:"center"}}>User Profile</h2>

<div className="card">
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="John" style={{width:"50%"}}/>
  <h1>{user?.email}</h1>
  <p className="title">{user?.phone}</p>
  <p>Harvard University</p>
  <div style={{margin: '24px 0'}}>
   
  </div>
  <p><button className='change_info'>Contact</button></p>
</div>



            </div>
             
          </section>

  </div>)
}
export default Profile