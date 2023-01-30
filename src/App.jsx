import React from 'react'
import './App.css'
import UserList from './UserList'
import Static from './Static'
import Techzone from './Techzone'
import Apps from './Apps'
import One from './One'
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import CharacterCounter from './recoil/CharacterCounter'
import TodoList from './recoil/TodoList'
export default function App() {
  return (
    <RecoilRoot>
       <UserList />
      <Static />
      <h1>Fetching the data from github api using class Component</h1>
      <Apps />
      <h1>Using the usestate and useEffect </h1>
    <Techzone />
       <One /> 
      <h1>Using recoil atoms</h1>
       <CharacterCounter />
      <TodoList />
    </RecoilRoot>
  )
}
