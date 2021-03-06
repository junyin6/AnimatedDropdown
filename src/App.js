import React from 'react'
import Dropdown from './Components/Dropdown'
import './App.css'

// Test for default checkbox selected
// const items = [
//   { id: 1, value: 'abc', selected: false},
//   { id: 2, value: 'bdfa', selected: true},
//   { id: 3, value: 'cwerwe', selected: false},
//   { id: 4, value: 'dasdf', selected: false},
//   { id: 5, value: 'ewer', selected: true},
//   { id: 6, value: 'fsdfg', selected: false},
// ];
function App() {
  //Test for large lists;
  let items = [];
  for(let i =0; i< 50; i++){
    items.push({id: i, value: 'options'+i, selected: false})
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1> Drop Down Component </h1>
      <h3>by jun</h3>
          <Dropdown items={items}/>
      </header>
    </div>
  );
}

export default App;
