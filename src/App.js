import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import { MainLayout } from "./Layout";
import { publicRoutes } from './routes'
import { Fragment } from 'react';


function App() {
  return (   
    <Router>
      <Routes>
        { publicRoutes.map((route, index) => {
          const {path} = route
          let Layout = MainLayout
          if(route.layout) {
            Layout = route.layout
          }
          else if(route.layout === null) {
            Layout = Fragment
          }
          const Page = route.element
          return (
            <Route path={path} key={index} element={
              <Layout>
                <Page />
              </Layout>
            } />
          )
        }) }
      </Routes>
    </Router>
  );
};
  
export default App;
