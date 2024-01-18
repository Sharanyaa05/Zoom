import React, { useState } from 'react';

const ZoomSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Please enter your username');
      return;
    }

    if (!password.trim()) {
      setError('Please enter your valid password');
      return;
    }
    alert('Successfully Sign In!!!');
  };

  return (
    <div className="container-fluid">
      <div className="navbar" style={{ borderBottom: '1px solid grey'}}>
        <h2 className="head mt-1 mx-5" style={{ color: 'blue', fontSize: '30px', fontWeight: 'bold', fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>ZOOM</h2>
        <div className="menu ml-auto">
          <nav style={{backgroundColor:'white'}}>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">New to Zoom?<span className="ml-2" style={{color:'blue'}}> Sign Up Free</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Support</a>
              </li>
              <li className="nav-item">
                <button className="btn select"><a href="#">English</a></button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="body" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className="div-image mt-5 pt-5">
          <img src="https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-1.2faf107a.png" className="img-fluid" alt="Background Image" style={{ width: '500px' }} />
        </div>

        <div className="form mt-4" style={{ width: '400px' }}>
          <form name="Signin" onSubmit={handleSignIn}>
            <h1 className="mb-4 text-center" style={{fontSize:'35px',fontWeight:'bold'}}>Sign In</h1>

            <div className="form-group mb-4">
              <input type="email" name="email" placeholder="Email Address" className="form-control" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group mb-4">
              <input type="password" name="pword" placeholder="Password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div id="errorbox" className="text-danger">{error}</div>

            <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <a href="#" className="text-primary">Forget Password?</a>
              <a href="#" className="text-primary ml-4">Help</a>
            </div>

            <div className="form-group d-grid">
              <input type="submit" name="submit" value="Sign In" className="btn btn-primary btn-block mt-4" />
            </div>

            <p className="text-muted mt-4">
              By signing in, I agree to the <a href="#" className="text-primary">Zoom's Privacy Statement</a> and
              <a href="#" className="text-primary">Terms of Service</a>
            </p>

            <div className="form-check mt-4">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Stay signed in</label>
            </div>

            <p className="mt-4 text-center">
              <span style={{ borderBottom: '1px solid #ccc', padding: '0 10px' }}>Or sign in with</span>
            </p>

            <ul className="list-inline" style={{ paddingLeft: '70px' }}>
              <li className="list-inline-item mx-3">
                <a href="#">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsIF9VNNarUSaf-MVqBR4O_MQHwCYNHPmxOc97Zgi9L9B-Dyw6SNNYmm1ksRziDVoolc&usqp=CAU" width="30px" height="25px" style={{ borderRadius: '5px', border: '1px solid grey', padding: '4px' }} alt="Facebook" />
                </a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="#">
                  <img src="data:image/png;base64,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" width="32px" height="27px" style={{ borderRadius: '5px', border: '1px solid grey', padding: '4px' }} alt="Google" />
                </a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="#">
                  <img src="data:image/jpeg;base64,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" width="30px" height="25px" style={{ borderRadius: '5px', border: '1px solid grey', padding: '4px' }} alt="Apple" />
                </a>
              </li>
              <li className="list-inline-item mx-3">
                <a href="#">
                  <img src="data:image/png;base64,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" width="30px" height="25px" style={{ borderRadius: '5px', border: '1px solid grey', padding: '4px' }} alt="Key" />
                </a>
              </li>
            </ul>

            <ul className="list-inline name1 mt-2" style={{ paddingLeft: '70px' }}>
              <li className="list-inline-item mx-2">
                <a href="#" style={{ color: 'black',textDecoration:'none' }}>SSO</a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#" style={{ color: 'black',textDecoration:'none' }}>Apple</a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#" style={{ color: 'black',textDecoration:'none' }}>Google</a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#" style={{ color: 'black',textDecoration:'none' }}>Facebook</a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ZoomSignIn;
