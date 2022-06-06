import React from "react";
import { Route } from "react-router-dom";
import NavbarHomeTemplete from "../../components/NavBar";

function HomeLayout(props) {
  return (
    <div>
      <NavbarHomeTemplete />
      {props.children}
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
