import React from 'react'
import './Footer.css'

const Footer = () => {

  const year = new Date();
  return <section className="footer-style">
    <p>Copyright &copy;FabriceNgalemo {year.getFullYear()}</p>
  </section>
  }

export default Footer