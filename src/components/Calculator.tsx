import React from "react";

export default function Calculator() {
  return (
    <div className="container-fluid">
      <div className="row align-items-center vh-100">
        <div className="col-6 mx-auto">
          <div className="card">
            <div className="card-body text-center">
              <div className="card-text text-end fs-6">56 x 8</div>
              <div className="card-title text-end fs-1">456</div>

              <div className="row align-items-center ">
                <div className="col">AC</div>
                <div className="col border">+/-</div>
                <div className="col border">%</div>
                <div className="col border">/</div>
              </div>
              <div className="row align-items-center ">
                <div className="col border">7</div>
                <div className="col border">8</div>
                <div className="col border">9</div>
                <div className="col border">x</div>
              </div>
              <div className="row align-items-center ">
                <div className="col border">4</div>
                <div className="col border">5</div>
                <div className="col border">6</div>
                <div className="col border">+</div>
              </div>
              <div className="row align-items-center ">
                <div className="col border">1</div>
                <div className="col border">2</div>
                <div className="col border">3</div>
                <div className="col border">-</div>
              </div>
              <div className="row align-items-center ">
                <div className="col border">0</div>
                <div className="col border">.</div>
                <div className="col-6 border">=</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
