import React from 'react';

function Header() {
  return (
    <header>
      <div className="container mt-5 mx-auto">
        <div className="row align-items-center">
          <div className="col-6 col-sm-6 d-flex align-items-center">
            <img src={require("../assets/logo.jpeg")} alt="Logo" style={{ position: 'relative', top: '45px', maxHeight: '6rem', left: '90px' }} />
          </div>
          <div className="col-6 col-sm-6 d-flex justify-content-end" style={{ position: 'relative', top: '1px',  left: '1100px'}}>
    <button className="btn btn-outline-dark rounded-pill">Contact Us</button>
</div>

        </div>
      </div>
    </header>
  );
}

export default Header;
    
