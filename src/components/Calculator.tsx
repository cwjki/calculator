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
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    AC
                  </button>
                </div>
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    +/-
                  </button>
                </div>
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    %
                  </button>
                </div>
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    /
                  </button>
                </div>
              </div>
              <div className="row align-items-center ">
                <div className="col">
                  <button className="btn border">7</button>
                </div>
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    8
                  </button>
                </div>
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    9
                  </button>
                </div>
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    x
                  </button>
                </div>
              </div>
              <div className="row align-items-center ">
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    4
                  </button>
                </div>
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    5
                  </button>
                </div>
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    6
                  </button>
                </div>
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="row align-items-center ">
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    1
                  </button>
                </div>
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    2
                  </button>
                </div>
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    3
                  </button>
                </div>
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="row align-items-center ">
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    0
                  </button>
                </div>
                <div className="col">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    .
                  </button>
                </div>
                <div className="col-6">
                  <button
                    id=""
                    type="button"
                    className="btn border rounded-3 p-3 fs-3"
                  >
                    =
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
