import React from 'react'

const Technologies = ({tec}) => {
  return (
    <div>
        <ul className='text-justify'>
            {tec.map((item => 
                <li className='mb-2' style={{fontSize:'13px'}}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Technologies