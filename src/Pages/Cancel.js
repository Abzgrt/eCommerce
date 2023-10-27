import React, { useState, useEffect }from 'react'

const Cancel = () => {
    return (
        <div className="cancel-box">
            <h1 style={{color: "red"}}>Something went wrong!</h1>
            <span style={{color: "red", margin: "60px"}}>Please try again later!</span>
            <div className="cancel-img"> 
              <img src="../images/Cancel.png" width="150px" height="150px"/>
            </div>
        </div>
    )
}

export default Cancel