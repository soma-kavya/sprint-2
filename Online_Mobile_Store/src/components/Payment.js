import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import Navbar from "./Navbar";
function Payment() {
  return (
    <div >
      <Navbar/>
      <div class="paymentbg">
        <br />
        <br />
        <h1>
          <div class="title">Checkout Form</div>
          <br />
          <div class="input-form">
            <div class="section-1">
              <div class="items">
                <label class="label">Card Number</label>
                <input
                  type="text"
                  class="input"
                  data-mask="0000 0000 0000 0000"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
            </div>
            <div class="section-2">
              <div class="items">
                <label class="label">Card Holder Name</label>
                <input
                  type="text"
                  class="input"
                  placeholder="Enter your Name"
                />
              </div>
            </div>
            <div class="section-3">
              <div class="items">
                <label class="label">Expire Date</label>
                <input
                  type="text"
                  class="input"
                  data-mask="00 / 00"
                  placeholder="MM / YY"
                />
              </div>
              <div class="section-4">
                <div class="cvc">
                  <label class="label">CVC Code</label>
                  <input type='text' class="input" placeholder="000" />
                </div>
              </div>
              <div class="section-4">
                <div class="otp">
                  <label class="label">OTP</label>
                  <input type="password" class="input" placeholder="Enter OTP" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <Link to={"/Cart"}>
            <ButtonContainer>Proceed</ButtonContainer>
            </Link>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Payment;
