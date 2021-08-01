import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Cart from "./Components/cart/Cart";
import ContextProvider from "./context/ContextProvider";
import TemplateProvider from "./templates/TemplateProvider";
import ProductDetailView from "./Components/product-detail/ProductDetailView";
import { Box } from "@material-ui/core";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 55 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/product/:id" component={ProductDetailView} />
            </Switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
