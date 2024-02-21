import React from 'react'

export default function Image(props) {
  return (
    <>
      <img src={props.img} alt={`Image No. ${props.id} `} />
    </>
  )
}
