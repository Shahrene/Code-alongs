import React from 'react'

export default function DumbLikeButton(props) {
  return <div>
   <button onClick={props.onLike}>Like</button> {props.count}
   </div>
}
