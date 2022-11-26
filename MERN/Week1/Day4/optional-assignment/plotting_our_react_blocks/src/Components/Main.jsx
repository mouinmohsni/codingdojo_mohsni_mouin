import React, { Component } from 'react'
import SubContents from './SubContents'
import Advertisement from './Advertisement'
import './Header.css'

export default class Main extends Component {
  render() {
    return (
      <div className='main border'>Main
       <div className='flex'>
      <SubContents />
      <SubContents />
      <SubContents />
      </div>
      <Advertisement />
      
      
      
      </div>
      

    )
  }
}
