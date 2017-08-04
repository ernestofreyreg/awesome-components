import React from 'react'

const Button = ({title, onClick}) => (
  <button className='Button' onClick={onClick}>
    {title}

    {/*language=CSS*/}
    <style jsx>{`
      .Button {
        background-color: #007dff;
        color: white;
        padding: 4px 10px;
        font-size: 14px;
        border: none;
        border-radius: 4px;
      }
    `}</style>
  </button>
)

export {Button}
