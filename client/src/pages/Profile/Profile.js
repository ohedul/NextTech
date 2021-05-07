import React from 'react'


function Profile() {
    
    return (
      <div className="Profile">
        <h1>{localStorage.getItem("username")}</h1>
        
      </div>
    );
  }
  
  export default Profile;