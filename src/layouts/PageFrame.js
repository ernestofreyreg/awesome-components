import React from 'react'

const PageFrame = ({children}) => (
  <div className='PageFrame'>
    {children}

    {/*language=CSS*/}
    <style jsx>{`
      .PageFrame {
        display: inline-flex;
        flex-grow: 1;
        flex-direction: column;
        width: 1024px;
        align-items: flex-start;
      }

      @media screen and (max-width:480px) {
        .PageFrame {
          width: 100%;
        }
      }

      @media screen and (max-width: 1024px) {
        .PageFrame {
          width: 100%;
        }
      }
    `}</style>
  </div>
)

export default PageFrame
