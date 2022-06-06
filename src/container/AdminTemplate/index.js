import React from "react";
import { Route } from "react-router-dom";
import NavBarAdminTemplate from "../../components/NavBarAdminTemplate";

function AdminLayout(props) {
  return (
    <div>
      <NavBarAdminTemplate key={1} />
      {props.children}
    </div>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <AdminLayout>
          <Component {...propsComponent} />
        </AdminLayout>
      )}
    />
  );
}
