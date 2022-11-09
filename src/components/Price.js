import React from "react";

function Price() {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price-img">
                <img src="/img/pizza1.png" alt="Pizza" />
              </div>
              <h1 className="price-heading">Pizza Califonia</h1>
              <p className="price-text">
                Pizza Califonia is famous product in our products try and give
                us good feedback so other people see this review and enjoy the
                falvour.
              </p>
              <p className="price-rs">RS 750</p>
            </div>
          </div>
          <div className="col-4">
            <div className="price">
              <div className="price-img">
                <img src="/img/pizza2.png" alt="Pizza" />
              </div>
              <h1 className="price-heading">Fajita Pizza</h1>
              <p className="price-text">
                Fajita Pizza is famous product in our products try and give us
                good feedback so other people see this review and enjoy the
                falvour.
              </p>
              <p className="price-rs">RS 899</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price-img">
                <img src="/img/pizza3.png" alt="Pizza" />
              </div>
              <h1 className="price-heading">Chicago Pizza</h1>
              <p className="price-text">
                Chicago Pizza is famous product in our products try and give us
                good feedback so other people see this review and enjoy the
                falvour.
              </p>
              <p className="price-rs">RS 999</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Price;
