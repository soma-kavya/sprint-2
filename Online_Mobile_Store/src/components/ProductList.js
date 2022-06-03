import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import Navbar from "./Navbar";
export default class ProductList extends Component {
  state = {
    products: storeProducts,
  };
  render() {
    return (
      <div>
        <Navbar />
        <React.Fragment>
          <ProductWrapper className="py-5">
            <div className="container">
              <Title name="Mobiles" title="List" />
              <div className="row">
                <ProductConsumer>
                  {(value) => {
                    return value.products.map((product) => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </ProductWrapper>
        </React.Fragment>
      </div>
    );
  }
}

const ProductWrapper = styled.section``;
