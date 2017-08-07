import React from 'react'

const ScreenFrame = ({children}) => (
  <div className='ScreenFrame'>
    {children}

    {/*language=CSS*/}
    <style jsx>{`
      .ScreenFrame {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }
    `}</style>
  </div>
)

export default ScreenFrame
