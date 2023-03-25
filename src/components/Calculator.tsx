import React from "react";

export default function Calculator() {
  return (
    <div className="container-fluid">
      <div className="row align-items-center vh-100">
        <div className="col-lg-4 col-md-6 col-sm-8 col-12 mx-auto">
          <div className="card rounded-5 pt-4 pb-4 px-2 bg-dark shadow-lg">
            <div className="card-body text-center mt-5">
              <div className="card-text text-end fs-6 text-secondary">
                56 x 8
              </div>
              <div className="card-title text-end fs-1 text-info">456</div>

              <div className="row align-items-center gap-2 mt-4 px-1">
                <button
                  id=""
                  type="button"
                  className="btn btn-secondary col rounded-4 p-3 fs-3"
                >
                  AC
                </button>
                <button
                  id=""
                  type="button"
                  className="btn btn-secondary col rounded-4 p-3 fs-3"
                >
                  +/-
                </button>
                <button
                  id=""
                  type="button"
                  className="btn btn-secondary col rounded-4 p-3 fs-3"
                >
                  %
                </button>
                <button
                  id=""
                  type="button"
                  className="btn btn-warning col rounded-4 p-3 fs-3"
                >
                  /
                </button>
              </div>

              <div className="row align-items-center gap-2 mt-2 px-1">
                <button
                  id=""
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                >
                  7
                </button>
                <button
                  id=""
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                >
                  8
                </button>
                <button
                  id=""
                  type="button"
                  className="btn btn-light  col rounded-4 p-3 fs-3"
                >
                  9
                </button>
                <button
                  id=""
                  type="button"
                  className="btn btn-warning col rounded-4 p-3 fs-3"
                >
                  x
                </button>
              </div>

              <div className="row align-items-center gap-2 mt-2 px-1">
                <button
                  id=""
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                >
                  1
                </button>
                <button
                  id=""
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                >
                  2
                </button>
                <button
                  id=""
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                >
                  3
                </button>
                <button
                  id=""
                  type="button"
                  className="btn btn-warning col rounded-4 p-3 fs-3"
                >
                  -
                </button>
              </div>

              <div className="row align-items-center gap-2 mt-2 px-1">
                <button
                  id=""
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                >
                  0
                </button>
                <button
                  id=""
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                >
                  ,
                </button>
                <button
                  id=""
                  type="button"
                  className="btn btn-warning col-6 rounded-4 p-3 fs-3"
                >
                  =
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <nav className="navbar pb-2 mt-2">
            <div className="container-fluid justify-content-center">
              <span className="navbar-brand fs-6 text-dark fw-bold">by cwjki</span>
              <a
                className="navbar-brand"
                href="https://github.com/cwjki"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github text-dark"></i>
              </a>
              <a
                className="navbar-brand"
                href="https://www.linkedin.com/in/juan-carlos-casteleiro/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin text-dark"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
