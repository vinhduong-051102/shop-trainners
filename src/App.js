import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { MainLayout } from "./Layout";
import { publicRoutes } from "./routes";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://shop-trainers-api.herokuapp.com/data").then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const { path, layoutProp } = route;
          let Layout = MainLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          const Page = route.element;
          return (
            <Route
              path={path}
              key={index}
              element={
                <Layout sidebarItems={layoutProp}>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
