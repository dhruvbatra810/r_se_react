import { useContext } from "react";
import { Path } from "./index";
const Item = ({ name, url, price, val }) => {
  const { remove } = useContext(Path);
  return (
    <>
      <div className="row" style={{ padding: "1rem" }}>
        <div className="col">
          <div
            className="card mb-3"
            style={{ maxWidth: "50rem", maxHeight: "10rem" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  style={{ maxWidth: "540px", maxHeight: "10rem" }}
                  src={url}
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet.</p>
                  <p className="card-text">
                    <small className="text-muted">{val}</small>
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      remove(val);
                    }}
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Item;
