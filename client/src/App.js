import React from 'react';
import './App.css';

const App = () => {

  return (
    <div className="container app-container">
      < div className="row" >
        <div className="col-md-8 offset-md-2">
          <h1>Weather \_(0_o)_/</h1>
        </div>
        <div className="col-md-8 offset-md-2">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Type City Name" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
