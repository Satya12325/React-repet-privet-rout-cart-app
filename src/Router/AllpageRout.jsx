import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import NotExit from "../Components/NotExist";
import ProductDetails from "../Components/ProductDetails";
import ContactUs from "../Components/ContatactUs";
import Faq from "../Components/Faq";
export default function AllpageRouts() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <ContactUs />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Route exact path="/:id">
          <ProductDetails />
        </Route>

        <Route>
          <NotExit />
        </Route>
      </Switch>
    </div>
  );
}
