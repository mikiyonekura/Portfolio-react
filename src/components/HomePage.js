import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
/*import profileImage from "../Images/sibainu.jpg";*/
import chervil from "../Images/chervil.jpg"
import node from "../Images/node.jpeg"
import python from '../Images/python.png'
import {Link} from 'react-router-dom'


const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Miki Yonekura</h1>

      <img src={chervil} className="profileImage" alt="chervil"/>

      <p>
        奈良先端大学院大学M1の米倉未樹です。本ポートフォリオでは私の作ったホームページや、ハッカソンで作成した作品等の情報をまとめています。
      </p>
      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                
                <i class="fas fa-circle fa-stack-2x color-change"></i>
                <i class="fa-solid fa-cookie fa-bounce"></i>
              </span>
              <h4 class="my-3"><Link to ="http://chervil.php.xdomain.jp/">洋菓子店のHP</Link></h4>
              <p class="text-muted">
                実家の洋菓子店のHPを作成しています。使用している技術はフロントサイドがReact.js,サーバーサイドがNode.jsです。
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x color-change"></i>
                <i class="fas fa-laptop-code fa-stack-1x fa-beat-fade"></i>
                

              </span>
              <h4 class="my-3"><Link to ="/huck">ハッカソンでの作品</Link></h4>
              <p class="text-muted">
                テックーシーカーハッカソンに出場予定
              </p>
            </div>
            
            <div class="col-md-4">
            
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x color-change"></i>
                <i class="fa-solid fa-book fa-beat"></i>
              </span>
              <h4 class="my-3"><Link to ="/kenkyu">研究</Link></h4>
              <p class="text-muted">
                大分高専本科では”3Dモデルを用いた2次元画像分類”,大分高専専攻科では"SATにおける新たしい符号化手法の提案",NAISTにおいては"技術的負債を自然言語処理することで、自動リファクタリングを行う"研究を行っています。
              </p>
            
            </div>
            
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} alt="react"/>
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={node} alt='node' />
              <h4>Node.js</h4>
              <p>Node.jsが使えます</p>
            </div>
            <div class="col-md-4 services">
              <img src={python} alt='py'/>
              <h4>Python</h4>
              <p>Pythonがつかえます</p>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
