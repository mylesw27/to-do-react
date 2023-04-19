import React from 'react';
import ReactDOM from 'react-dom/client';
import MyList from './MyList';
import './index.css';

const toDos = ["Listen to Hot Mulligan", "Drink coffee", "Eat breakfast"]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <MyList theList={toDos} />,
)