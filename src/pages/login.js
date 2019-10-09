import React, {Component} from 'react'
import styles from './login.css'

import {Login} from 'ant-design-pro'
import connect from 'dva'

const {UserName,Password, Submit} = Login;


export default class extends Component {
  render(){
    return (
      <div className = {styles.loginForm}>
        <img src="https://img.kaikeba.com/logo-new.png" className={styles.logo} alt=""/>
        <Login>
          <UserName
            name="username"
            placeholder="kaikeba"
            rules={[{required:true,message: "input your user name "}]}
          ></UserName>
          <Password 
          name="password"
          placeholder="inpur your password wrod"
          ></Password>
          <Submit> Login </Submit>
        </Login>


      </div>

    );
  }



}