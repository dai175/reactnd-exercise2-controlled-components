import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList';
import DeleteLastItem from "./DeleteLastItem";
import AddItem from "./AddItem";

class App extends React.Component {
  state = {
    items: []
  };

  addItem = value => {
    this.setState(() => ({
      items: [...this.state.items, value],
    }));
  };

  deleteLastItem = () => {
    this.setState(() => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddItem
          addItem={this.addItem}
        />
        <DeleteLastItem
          deleteLastItem={this.deleteLastItem}
          noItemFound={this.noItemsFound}
        />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
