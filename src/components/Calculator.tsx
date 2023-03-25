import { useState, MouseEvent } from "react";
import { ModeAwareCache } from "typescript";

export default function Calculator() {
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState("");

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const value: string = event.currentTarget.name;
    switch (value) {
      case "=":
        evaluate();
        break;
      case "clear":
        clear();
        break;
      default:
        setInput(input.concat(value));
        break;
    }
  };

  const evaluate = () => {
    const result = eval(input);
    setTotal(result);
    setInput(input + "=" + result.toString());
  };

  const clear = () => {
    setInput("");
    setTotal(0);
  };

  return (
    <div className="container-fluid">
      <div className="row align-items-center vh-100">
        <div className="col-lg-4 col-md-6 col-sm-8 col-11 mx-auto">
          <div className="card rounded-5 pb-4 px-2 bg-dark shadow-lg mt-3">
            <div className="card-body text-center mt-5">
              <div className="card-text text-end fs-6 text-secondary">
                {input}
              </div>
              <div id="display" className="card-title text-end fs-1 text-info">
                {total}
              </div>

              <div className="row align-items-center gap-2 mt-4 px-1">
                <button
                  name="clear"
                  id="clear"
                  type="button"
                  className="btn btn-secondary col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  AC
                </button>
                <button
                  name="negative"
                  id="negative"
                  type="button"
                  className="btn btn-secondary col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  +/-
                </button>
                <button
                  name="percent"
                  id="percent"
                  type="button"
                  className="btn btn-secondary col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  %
                </button>
                <button
                  name="/"
                  id="divide"
                  type="button"
                  className="btn btn-warning col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  /
                </button>
              </div>

              <div className="row align-items-center gap-2 mt-2 px-1">
                <button
                  name="7"
                  id="seven"
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  7
                </button>
                <button
                  name="8"
                  id="eight"
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  8
                </button>
                <button
                  name="9"
                  id="nine"
                  type="button"
                  className="btn btn-light  col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  9
                </button>
                <button
                  name="*"
                  id="multiply"
                  type="button"
                  className="btn btn-warning col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  x
                </button>
              </div>

              <div className="row align-items-center gap-2 mt-2 px-1">
                <button
                  name="4"
                  id="four"
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  4
                </button>
                <button
                  name="5"
                  id="five"
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  5
                </button>
                <button
                  name="6"
                  id="six"
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  6
                </button>
                <button
                  name="-"
                  id="subtract"
                  type="button"
                  className="btn btn-warning col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  -
                </button>
              </div>

              <div className="row align-items-center gap-2 mt-2 px-1">
                <button
                  name="1"
                  id="one"
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  1
                </button>
                <button
                  name="2"
                  id="two"
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  2
                </button>
                <button
                  name="3"
                  id="three"
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  3
                </button>
                <button
                  name="+"
                  id="add"
                  type="button"
                  className="btn btn-warning col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  +
                </button>
              </div>

              <div className="row align-items-center gap-2 mt-2 px-1">
                <button
                  name="0"
                  id="zero"
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  0
                </button>
                <button
                  name="."
                  id="decimal"
                  type="button"
                  className="btn btn-light col rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  .
                </button>
                <button
                  name="="
                  id="equals"
                  type="button"
                  className="btn btn-warning col-6 rounded-4 p-3 fs-3"
                  onClick={handleClick}
                >
                  =
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <nav className="navbar">
            <div className="container-fluid justify-content-center">
              <span className="navbar-brand fs-6 text-dark fw-bold">
                by cwjki
              </span>
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
