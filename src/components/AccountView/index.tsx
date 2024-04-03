import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaIdCard } from "react-icons/fa";




import './index.scss';


const AccountInfo = ({
    id, 
    initialState, 
    isLoading, 
    onSave, 
    user, 
    data, 
    hasSavePermission
}) => {

  return (
    <div className='main-container'>
        
        <div>
          <button type='button' className='back-btn' onClick={() => window.location.href = '/'}>
            <IoIosArrowRoundBack style={{fontSize : '25px'}}/>
            <span> Home </span>
          </button>
        </div>

        <div className='basic-details'>
          <div className='avatar'>
            A
          </div>

          <div>
            <div className='details'>
              <h3>
                {'Akshat Sharma'}
              </h3>
              <p style={{height : '6px', width : '6px', borderRadius : '50%', backgroundColor : 'white'}} ></p>
              <h5> 
                <MdAdminPanelSettings style={{marginRight : '6px', fontSize : '1.5rem'}} />
                {'Admin'} 
              </h5>
            </div>

            <div className='meta-detail'>
                <p> Age : {24} </p>
                <p style={{height : '6px', width : '6px', borderRadius : '50%', backgroundColor : 'gray'}} ></p>
                <p> {'Ghaziabad'}, {'India'} </p>
            </div>
          </div>
        </div>

        <div className='time-id'>
          <div style={{display : 'flex', alignItems : 'center', gap : '10px'}}>
            <SlCalender />
            <h5>
              {'March, 2024'}
            </h5>
          </div>

          <div style={{display : 'flex', alignItems : 'center', gap : '10px'}}>
            <FaIdCard />
            <h5>
              {id}
            </h5>
          </div>
        </div>

        <div className='contact-info'>
          <button>
            {user.email}
          </button>

          <button>
            {"+91 8130589389"}
          </button>
        </div>
    </div>
  )
}

export default AccountInfo