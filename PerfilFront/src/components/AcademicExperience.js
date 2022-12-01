import React from 'react'

const AcademicExperience = (props) => {
  return (
    <div>
        <div className=''>
            <h6 > {props.cargo}</h6>
            <h6>{props.año}</h6>
            <p className='text-justify' style={{fontSize:'13px'}}>{props.description}</p>
        </div>
    </div>
  )
}

export default AcademicExperience