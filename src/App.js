import React, { Component } from 'react';
import './App.css';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RedTab from './RedTab';
import GreenTab from './GreenTab';
import BlueTab from './BlueTab';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{"padding":"10px"}}>
          <select>
            <option value="rgb">RGB</option>
            <option value="bgr">BGR</option>
          </select>
        </div>
        <Tabs style={{"padding":"10px"}}>
          <TabList>
            <Tab>Red</Tab>
            <Tab>Green</Tab>
            <Tab>Blue</Tab>
          </TabList>
          <TabPanel>
            <p><RedTab /></p>
          </TabPanel>
          <TabPanel>
            <p><GreenTab /></p>
          </TabPanel>
          <TabPanel>
            <p><BlueTab /></p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
