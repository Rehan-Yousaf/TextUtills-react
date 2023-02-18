import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:"50px"}}>
    {props.alert && <div style={{ height: "20px", borderRadius: "0px"}} className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
                <div><strong>{props.alert.type}</strong>: {props.alert.msg}</div>
            </div>}
    </div>
  )

}
