import React from 'react'

import styles from "./Login.module.css"
import group from "../photo/group.png"



const Login = () => {
 
  return (
    <div>
        <div className={styles.logindiv}>Login</div>
        <div className={styles.maincontainer}>
                <div className={styles.container1}>
                    <div className={styles.welcome}>Welcome To App Name</div>
                    <div className={styles.get}>Get ahead of the curve. Join the next generation of health hero</div>
                    <div className={styles.imagecontainer1}><img src={group} alt="group" /></div>
                </div>
                <div className={styles.container2}>
                    <div className={styles.signdiv}>
                       <div className={styles.loginto}>Login to your account</div>
                          <input type="text" className={styles.inputform} />
                          <input type="password" className={styles.inputform1} />
                          <select  className={styles.inputform2}></select>
                    </div>
                  <button className={styles.submit}>Sign In</button>
                    
                </div>
        </div>
    </div>
  )
}

export default Login