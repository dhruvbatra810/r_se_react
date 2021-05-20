import { useContext } from "react";
import { Path } from "./index";
const Item = ({ name, url, price, val, para }) => {
  const { remove, vall, cval } = useContext(Path);
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <div className="card mb-3">
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
                  <p className="card-text">{para}</p>
                  <h6 className="card-text">{price} Rs</h6>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      remove(val);
                      cval(vall - 1);
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
    </div>
  );
};
export default Item;
