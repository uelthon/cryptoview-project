import './Footer.css'
import React from "react"
import github from '../../assets/github.webp'
import linken from '../../assets/linken.webp'

const Footer = () => {
  return(
    <footer>
      <div className='container-footer'>
        <div className='footer-links'>
        <a href='https://github.com/uelthon/cellstore-project' target='_blank'>
          <img src={github} width='30px' height='30px' />
        </a>
        <a href='https://www.linkedin.com/in/elthon-urbina-0b096b227/' target='_blank'>
          <img src={linken} width='30px' height='30px' />
        </a>
        <a href='https://uelthon.github.io' target='_blank'>Portfolio</a>
        </div>
        <p>© 2022</p>
      </div>
    </footer>
  )
}

export default Footer