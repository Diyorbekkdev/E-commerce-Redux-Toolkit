import { useContext, useEffect, useState } from "react";
import { addProductToCart, getProducts } from "../../redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import {  Pagination, Spin } from "antd";
import Card from "../../components/cards/Card";

import "../Home/home.scss";
const Products = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { products, totalProducts, loading, cart } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);
  const handleChange = (page) => {
    setPage(page);
  };
  return (
    <section className="products">
      <div className="container">
        <div className="products__row">
          {loading ? (
            <div>
              <Spin />
            </div>
          ) : (
            products.map((res) => (
              <Card
                key={res.id}
                img={res?.thumbnail}
                title={res?.title}
                description={res?.description}
                reting={res?.rating}
                brend={res?.brend}
                price={res?.price}
                click={() => dispatch(addProductToCart(res?.id))}
              />
            ))
          )}
        </div>
        <div className="pagination__wrapper">
          <Pagination
            current={page}
            total={totalProducts}
            onChange={handleChange}
            defaultCurrent={1}
          />
        </div>
      </div>
      <div className="shop_cart_board">
       
      </div>
    </section>
  );
};

export default Products;
