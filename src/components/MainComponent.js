import React from 'react'
import BodyComponent from './body/BodyComponent'
import NavComponent from './header/NavComponent'
import FooterComponent from './footer/FooterComponent'

const MainComponent = () => {
  return (
    <div className='' style={{backgroundColor:"#f5f5f5"}}>
        <NavComponent></NavComponent>
        <BodyComponent></BodyComponent>
        <FooterComponent></FooterComponent>
    </div>
  )
}

export default MainComponent