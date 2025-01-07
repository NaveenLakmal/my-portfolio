import React from 'react'

type ButtonProps = {
  text: string; // Define text as a string
  link: string; // Define link as a string
};

function Button({text,link}:ButtonProps) {
  return (
    <a href={link} className='btn '>{text}</a>
  )
}

export default Button