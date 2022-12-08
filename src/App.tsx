import React from 'react';
import './App.css';
import AppNavBar from './components/appNavbar';
import BarChart from './components/barChart';
import { ThemeProvider } from '@emotion/react';
import customTheme from "./components/customTheme"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <AppNavBar />
      </ThemeProvider>
      <div className="ChartContainer">
        <BarChart />
      </div>
    </div>
  );
}

export default App;
