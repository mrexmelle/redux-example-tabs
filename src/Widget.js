import React, { Component } from 'react';
import './App.css';

class Widget extends Component {

  constructor(props)
  {
    super(props);
    this.index=props.index;
    this.store=props.store;
    this.state={ "sequence" : this.store.getState() };

    console.log("Widget::constructor - called");
  }

  handleStoreCallback = () =>
  {
    console.log("Widget::handleStoreCallback - store::state: " + this.store.getState());
    this.setState( { "sequence" : this.store.getState() } );
  }

  componentDidMount = () =>
  {
    this.unsubscribe=this.store.subscribe(this.handleStoreCallback);
  }

  componentWillUnmount = () =>
  {
    this.unsubscribe();
  }

  render()
  {
    var letter='';
    if(this.state.sequence==="rgb")
    {
      if(this.index===0)
      {
        letter=<p style={{"color":"red"}}>{"R is for Red"}</p>;
      }
      else if(this.index===1)
      {
        letter=<p style={{"color":"green"}}>{"G is for Green"}</p>;
      }
      else if(this.index===2)
      {
        letter=<p style={{"color":"blue"}}>{"B is for Blue"}</p>;
      }
      else
      {
        letter=<p />;
      }
    }
    else if(this.state.sequence==="bgr")
    {
      if(this.index===0)
      {
        letter=<p style={{"color":"blue"}}>{"B is for Blue"}</p>;
      }
      else if(this.index===1)
      {
        letter=<p style={{"color":"green"}}>{"G is for Green"}</p>;
      }
      else if(this.index===2)
      {
        letter=<p style={{"color":"red"}}>{"R is for Red"}</p>;
      }
      else
      {
        letter=<p />;
      }
    }
    else
    {
      letter=<p />;
    }

    return (
      <div className="Widget">
      {letter}
      </div>
    );
  }
}

export default Widget;
