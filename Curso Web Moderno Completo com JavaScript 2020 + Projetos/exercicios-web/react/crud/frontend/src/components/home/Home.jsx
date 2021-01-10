import React from 'react'
import Main from '../template/Main'
//import './Home.css'


export default props =>
    <Main icon="home" title="Início"
        subtitle="Segundo Projeto do capítulo de React" >
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema para exemplificar a contrução de um cadastro desenvolvido em react</p>
    </Main>