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
      <Static />
         
   <-- <hr />
      <h1>Using recoil Counting the number of Character in the String </h1>
       <CharacterCounter />
    <hr />
    <h1>todo list using recoil and hooks </h1>
      <TodoList /> -->
    <hr />
      <h1>Fetching the data from github api using class Component</h1>
 <Apps />
    </RecoilRoot>
  )
}
