import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import UserList from './UserList'
import { PostList, PostEdit, PostCreate } from './posts'
import myDataProvider from './myDataProvider'
import {fetchJson as httpClient} from './httpClient'
import authProvider from './authProvider';

const dataProvider = myDataProvider('http://localhost:4000/api/v1', httpClient);
const App = () => {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider} >
      <Resource name="post" list={PostList} edit={PostEdit} create={PostCreate} />
      <Resource name="user" list={UserList} show={ShowGuesser} edit={EditGuesser} />
    </Admin>
  )
}

export default App;
