import React from 'react'
import '../../../public/index.css'
import logo from '../../assets/logo.png'
export default class Logo extends React.Component{
    render(){
        return(
            <div className='logo-container'>
                <img src={logo} alt='logo' className="logo-img"/>
            </div>
        )
    }
}