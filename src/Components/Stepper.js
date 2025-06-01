import React from 'react'
import "../Styles/Stepper.less"
import CheckedIcon from "../Assests/puzzle.png";
const VerticalLinearStepper = () => {
  return (
  <div class="wrapper">
    <div class="center-line">
    </div>
    <div class="row row-1">
      <section>
      <img class="icon" src={CheckedIcon} alt='check'/>
        <div class="details">
          <span class="title">Full Stack Development</span>
          <span>2024-Present</span>
        </div>
        <p>Physics Wallah(PW)</p>
        <div class="bottom">
          {/* <a href="#">Read more</a> */}
          {/* <i>Grades- 91.4%</i> */}
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <img class="icon" src={CheckedIcon} alt='check'/>
        <div class="details">
          <span class="title">Bachelor of Arts <br/>(Computer Application and Maths)</span>
          <span>2021 - 2025</span>
        </div>
        <p>Maharaja Agarasen College, University of Delhi</p>
        <div class="bottom">
          {/* <a href="#">Read more</a> */}
          <i>Grades- 7.77/10</i>
        </div>
      </section>
    </div>
    <div class="row row-1">
      <section>
      <img class="icon" src={CheckedIcon} alt='check'/>
        <div class="details">
          <span class="title">12<sup>th</sup> Standard</span>
          <span>2019-2021</span>
        </div>
        <p>Shree ThakurDwara Balika Vidyalaya, Ghaziabad</p>
        <div class="bottom">
          {/* <a href="#">Read more</a> */}
          <i>Grades- 90.25%</i>
        </div>
      </section> 
    </div>
    <div class="row row-2">
    <section>
      <img class="icon" src={CheckedIcon} alt='check'/>
        <div class="details">
          <span class="title">10<sup>th</sup> Standard</span>
          <span>2017-2019</span>
        </div>
        <p>Shree ThakurDwara Balika Vidyalaya, Ghaziabad</p>
        <div class="bottom">
          {/* <a href="#">Read more</a> */}
          <i>Grades- 85.33%</i>
        </div>
      </section>
    </div>
    
  </div>
  )
}

export default VerticalLinearStepper