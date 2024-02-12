import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#dcdcdc' }}>
      <div className="container mt-5 mb-5 box p-5 rounded">
        <div className="row">
          <div className="col-sm-6">
            <img src={require("../assets/logo.jpeg")} alt="Logo" style={{ maxHeight: '9rem' }} className="img-fluid logo" /><br />
            <div style={{ marginBottom: '50px' }}></div>
            <label style={{ position: 'relative', top: '1px',  left: '260px', fontSize: '20px' }}><b>The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</b></label>
            <br />
            <div style={{ marginBottom: '50px' }}></div>
            <h5 className="mt-3 fw-bold" style={{ position: 'relative', top: '1px', left: '10px',fontSize: '22px'}}>Address</h5>
            <p style={{ position: 'relative', top: '1px', left: '5px'}}>Survey No. 43, Pathare Thube Nagar, Nagar<br /> Road, Kharadi, Pune-14, Maharastra, India.</p>
            <h5 className="mt-3 fw-bold"style={{ position: 'relative', top: '1px', left: '10px', fontSize: '22px'}}>Contacts</h5>
            <p><span className="icon"><i className="fas fa-envelope mx-2"></i></span>hello@osumare.in</p>
            <p><span className="icon"><i className="fas fa-phone mx-2"></i></span>+91 8459 8762 26</p>
          </div>
          <div className="col-sm-3" style={{ position: 'relative', top: '1px', left: '580px'}}>
            <h5><b style={{ position: 'relative', top: '1px', left: '10px',fontSize: '22px'}}><b>Menu</b></b></h5>
            <label><b>Home</b></label><br />
            <label><b>About</b></label><br />
            <label><b>Services</b></label><br />
            <label><b>Work</b></label><br />
            <label><b>Contact</b></label><br />
          </div>
          <div className="col-sm-3" style={{ position: 'relative', top: '1px', left: '1100px', fontSize: '16px'}}>
            <h5 className="fw-bold" style={{ position: 'relative', top: '1px', left: '10px',fontSize: '22px'}}>Social</h5>
            <label><b>facebook logo</b></label><br />
            <label><b>youtube logo</b></label><br />
            <label><b>whatsapp logo</b></label><br />
            <label><b>instagram logo</b></label><br />
            <div className="mt-3">
              <a href="#" className="social-icon p-2 bg-white text-dark rounded-circle mx-2"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-icon p-2 bg-white text-dark rounded-circle mx-2"><i className="fab fa-youtube"></i></a>
              <a href="#" className="social-icon p-2 bg-white text-dark rounded-circle mx-2"><i className="fab fa-pinterest"></i></a>
              <a href="#" className="social-icon p-2 bg-white text-dark rounded-circle mx-2"><i className="fab fa-whatsapp"></i></a>
              <a href="#" className="social-icon p-2 bg-white text-dark rounded-circle mx-2"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div style={{ marginBottom: '50px' }}></div>
        </div>

        <div style={{ position: 'relative', top: '1px', left: '550px', fontSize: '16px'}}>@2024 Osumare All right reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
