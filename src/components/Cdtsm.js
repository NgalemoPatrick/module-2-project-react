import React from 'react'
import './Cdtsm.css'

const cdtsm = ({month, day, year, data}) => {
  // console.log(data.current? {data.current.temp_f}: null);

  return <section className="cdtsm-style">
    <section className="ctd-style">
        <div className="city-name">
            keller |  
        </div>
        <div className="date">
        {month+1}-{day}-{year}
        </div>
        <div className="temp">
             | {data.current? <>{data.current.temp_f}</>: null}°F
        </div>
    </section>
    <section className="s-mode">
        <img src="" alt="logo" className="logo" />
        <h5>Switch Mode</h5>
    </section>
  </section>
}

export default cdtsm