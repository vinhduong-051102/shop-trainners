import { MainLayout, EmptyLayout } from "./Layout";

import { LogginPage, RegisterPage, HomePage } from './Pages'
import { Slider } from './Pages/HomePage/components'


function App() {
  return (   
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
};
  
export default App;
