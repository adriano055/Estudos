import React from 'react'
import ReactDOM from 'react-dom'


import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

//passa algo que n seja uma string entre chaves ex {10}

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
    , document.getElementById('root'))