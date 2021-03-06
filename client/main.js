import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import LinkCreate from './components/link_create';
import LinkList from './components/link_list';
import {Links} from '../imports/collections/links';
const App = () =>
{
  return (
    
    <div>
    <h1>
      <Header />
       </h1>
      <LinkCreate />
      <LinkList />
    </div>
    
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
})