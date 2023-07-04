import React from 'react'

export default function Card(props) {
    return (
        /* 
           props.children  表示组件的标签体
              
        */
        <div className={`card ${props.className}`}>
            {props.children}
        </div>
    )
}
