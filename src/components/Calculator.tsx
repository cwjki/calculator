import React from "react";

export default function Calculator() {
  return (
    <div className="container-fluid">
      <div className="row align-items-center vh-100">
        <div className="col-lg-4 col-md-6 col-sm-8 col-12 mx-auto p-4">
          <div className="card rounded-5 p-3">
            <div className="card-body text-center mt-5">
              <div className="card-text text-end fs-6">56 x 8</div>
              <div className="card-title text-end fs-1">456</div>

              <div className="row align-items-center gap-1 mt-4 px-1">
                <button
                  id=""
                  type="button"
                  className="btn border col rounded-4 p-3 fs-3"
                >
                  AC
                </button>
                <button
                  id=""
                  type="button"
                  className="btn border col rounded-4 p-3 fs-3"
                >
                  +/-
                </button>
                <button
                  id=""
                  type="button"
                  className="btn border col rounded-4 p-3 fs-3"
                >
                  %
                </button>
                <button
                  id=""
                  type="button"
                  className="btn border col rounded-4 p-3 fs-3"
                >
                  /
                </button>
              </div>

              <div className="row align-items-center gap-2 mt-2 px-2">
                <button
                  id=""
                  type="button"
                  className="btn border col rounded-4 p-3 fs-3"
                >
                  7
                </button>
                <button
                  id=""
                  type="button"
                  className="btn border col rounded-4 p-3 fs-3"
                >
                  8
                </button>
                <button
                  id=""
                  type="button"
                  className="btn border col rounded-4 p-3 fs-3"
                >
                  9
                </button>
                <button
                  id=""
                  type="button"
                  className="btn border col rounded-4 p-3 fs-3"
                >
                  x
                </button>
              </div>

              <div className="row align-items-center gap-2 mt-1 px-2">
                <button
                  id=""
                  type="button"
                  className="btn border col rounded-4 p-3 fs-3"
                >
                  1
                </button>
                <button
                  id=""
                  type="button"
                  className="btn border col rounded-4 p-3 fs-3"
                >
                  2
                </button>
                <button
                  id=""
                  type="button"
                  className="btn border col rounded-4 p-3 fs-3"
                >
                  3
                </button>
                <button
                  id=""
                  type="button"
                  className="btn border col rounded-4 p-3 fs-3"
                >
                  -
                </button>
              </div>

              <div className="row align-items-center gap-2 mt-1 px-2">
                <button
                  id=""
                  type="button"
                  className="btn border col rounded-4 p-3 fs-3"
                >
                  0
                </button>
                <button
                  id=""
                  type="button"
                  className="btn border col rounded-4 p-3 fs-3"
                >
                  ,
                </button>
                <button
                  id=""
                  type="button"
                  className="btn border col-6 rounded-4 p-3 fs-3"
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
