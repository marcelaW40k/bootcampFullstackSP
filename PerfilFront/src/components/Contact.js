import React from 'react'

const Contact = (props) => {
  return (
    <div>
        <div className='content-icon ml-4 '>
            <p>{props.icon}</p>
            <h6 className='ml-2'>{props.description} </h6>
        </div>
        
    </div>
  )
}

export default Contact