import React from 'react'

const isUrgent = title => {
  if (title[0] === '!') {
    return true
  }

  if (title[title.length - 1] === '!') {
    return true
  }

  return false
}

const Button = ({title, onClick}) => (
  <button className={`Button ${isUrgent(title) && 'urgent'}`}  onClick={onClick}>
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

      .Button.urgent {
        background-color: red;
      }
    `}</style>
  </button>
)

export {Button}
