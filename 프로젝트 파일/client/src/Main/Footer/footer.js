import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




const Footer = () => {
    return (
    <footer class="site-footer">
      <div class="container fixed" style={{'height':'150px'}}>
        <div class="row">


        <div class="col-sm-12 col-md-2">
          
            <img src="./images/team logo.png" style={{'width':'100%', 'margin-top':'5%'}}/>
          </div>


          <div class="col-sm-12 col-md-4" style={{'margin':'left'}}>
            <h6>About</h6>
            <p class="text-justify">It's fun to take a stroll with a dog!</p>
            <p class="text-justify">πΆWe Love DogπΆ</p>
          </div>

          <div class="col-xs-6 col-md-4" style={{'margin':'center'}}>
            <h6>Categories</h6>
            <ul class="footer-links">
              <li>νμ¬μ£Όμ : μμΈμ κΈμ²κ΅¬ κ°μ°λμ§νΈλ‘</li>
              <li>κ³ κ°μΌν° : 070-7777-7777</li>
              <li>μ ν μλ΄ μκ° : 9:00 - 18:00</li>
              <li>μ ν μλ΄ λΆκ° μκ° : 12:00 - 14:00</li>

            </ul>
          </div>

          <div class="col-xs-6 col-md-2" style={{'margin':'right'}}>
            <h6>Member</h6>
            <ul class="footer-links">
              <li>κΉλν</li>
              <li>κΉμ€κΈ°</li>
              <li>μν΄μ</li>
              <li>μ μμ</li>
              <li>ννμ</li>
            </ul>
          </div>

        </div>
        <hr></hr>
      </div>
      <div class="container" >
        <div class="row">
          <div class="col-md-5 col-sm-6 col-xs-12"style={{'margin':'auto'}}>
            <p class="copyright-text ">Copyright &copy; 2022 All Rights Reserved by 
         <a>MTW</a>.
            </p>
          </div>
         </div> 
      </div>
</footer>
  
        
    )
}


export default Footer;
