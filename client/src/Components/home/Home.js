import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";
import MidSlide from "./MidSlide";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts as listProducts } from "../../redux/actions/productActions.js";

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Banner />
      <MidSlide products={products} />

      <MidSection />

      <Slide timer={false} title="Suggestions for you!" products={products} />
      <Slide timer={false} title="Deal of the Tomorrow!" products={products} />
      <Slide
        timer={false}
        title="Special Deal of the Day!"
        products={products}
      />
      <Slide timer={false} title="Deal of the Month!" products={products} />
      <Slide timer={false} title="Holiday deals!" products={products} />
    </div>
  );
};

export default Home;
