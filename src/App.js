import React, { Component } from 'react';
import './App.css';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Widget from './Widget';
import { createStore } from 'redux';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.colorStore=createStore(this.onDispatched);
  }

  onSequenceSelected = (event) =>
  {
    console.log("App::onSequenceSelected - (name, value): (" + event.target.name + ", " + event.target.value + ")");
    this.colorStore.dispatch({ type: event.target.value });
  }

  componentDidMount()
  {
    this.colorStore.dispatch({ type: "rgb" });
  }

  onDispatched = (state, action) =>
  {
    return action.type;
  }

  render() {

    return (
      <div className="App">
        <div style={{"padding":"10px"}}>
          <select name="sequence" onChange={this.onSequenceSelected}>
            <option value="rgb">RGB</option>
            <option value="bgr">BGR</option>
          </select>
        </div>
        <Tabs style={{"padding":"10px"}}>
          <TabList>
            <Tab>{"Tab-0"}</Tab>
            <Tab>{"Tab-1"}</Tab>
            <Tab>{"Tab-2"}</Tab>
          </TabList>
          <TabPanel>
            <Widget index={0} store={this.colorStore} />
          </TabPanel>
          <TabPanel>
            <Widget index={1} store={this.colorStore} />
          </TabPanel>
          <TabPanel>
            <Widget index={2} store={this.colorStore} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
