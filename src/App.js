import React from 'react';
import MenuItem from './MenuItem'
import DownNav from './DownNav'
import Grid from './Grid'
import GridElements from './GridElements'
import Brands from './Brands'
import HealthCare from './HealthCare'
import Offices from './Offices'
import OfficesSlider from './OfficesSlider'
import Footer from './Footer'
import './App.css';

function App() {
  return (
          <div className="App">
            <MenuItem/>
            <DownNav/>
            <Grid/>
            <GridElements/>
            <Brands/>
            <HealthCare/>
            <Offices/>
            <OfficesSlider/>
            <Footer/>
          </div>
  );
}

export default App;
