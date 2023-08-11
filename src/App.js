import react from 'react'
import logo from './logo.svg';
import './App.css';
import { Header, Content, Footer } from './func-components'
import Calendar from './class-components'



function App() {
    return (
        <>
        <Header/>
        <p><center><Calendar/></center></p>
        <Content/>
        <Footer/>
        </>
        )
}

export default App;