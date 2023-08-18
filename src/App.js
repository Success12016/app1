import react from 'react'
import logo from './logo.svg';
import './App.css';
import { Header, Content, Footer } from './func-components'
import Calendar from './class-components'
import React from 'react'
import Banner from './banner'
import {Calculator} from './calculator'
import {Calculator2} from './calculator'


export default function App() {
return (
    <>
    <Header/>
    <Banner/>
    <p><center><Calendar/></center></p>
    <Content/>
    <Calculator/>
    <Calculator2/>
    <Footer/>
    </>
    )
     
}