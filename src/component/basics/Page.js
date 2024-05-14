import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurent from './Restaurent';

const Page = () => {
  const [code, setCode] = useState('');
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (code === 'admin@123') {
      setIsCodeCorrect(true);
    } else {
      setIsCodeCorrect(false);
    }
    setSubmitted(true);
  };

  return (
    <>
      <div className="container">
        {!isCodeCorrect ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-5">
              <label htmlFor="codeInput" className="m-3">Enter the Code</label>
              <input
                type="text"
                className="form-control"
                id="codeInput"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        ) : (
          <div className='container-fluid'>
            <Restaurent />
          </div>
        )}
      </div>
      {submitted && !isCodeCorrect && (
        <div className="text-danger text-center">Incorrect code. Please try again.</div>
      )}
    </>
  );
}

export default Page;
