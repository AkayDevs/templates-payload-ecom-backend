import React from 'react'

const BeforeLogin: React.FC = () => {
  return (
    <div>
      <p>
        <b>Welcome to Craft Decor Admin!</b>
        <br />
        Manage your craft Decor store here.
        <a style={{marginLeft : '10px'}} href={`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/login`}>Or log in to the site instead</a>
      </p>
    </div>
  )
}

export default BeforeLogin
