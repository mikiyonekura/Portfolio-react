import React from 'react'
import yougasi from "../Images/yougasi.png";
import fractional from "../Images/fractional_image1.png";


const Kosen = () => {
  return (
    <div className="container-research">
        <section id="skill">
        <div class="text-center">
            <h1 class="title">研究</h1>
            <div class="row text-center">
                <div class="col-md-6 services">
                    <img src={yougasi} alt='yougasi' />
                    <h4>3Dモデルを用いた画像分類</h4>
                </div>
                <div class="col-md-6 services">
                    <img src={fractional} alt='fractional' />
                    <h4>SATの高速化</h4>
                </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Kosen
