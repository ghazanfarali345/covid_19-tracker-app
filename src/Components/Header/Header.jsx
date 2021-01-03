import React from 'react'
import img from '../../assets/images/covid.png'

const styles ={
  fontSize:'50px',
  color:'#TT9391',
  textShadow: '2px 2px #FF0000'
}

 const Header = () => {
  return (
    <div>
      
        <h1 style={styles}>C<img src={img}  alt="covid" width="40"/>VID 19 TRACKER APP</h1>
    </div>
  )
}
export default Header