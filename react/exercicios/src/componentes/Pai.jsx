import React from 'react'
import Filho from './Filho'

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h3>Filhos</h3>
        <ul>
            <Filho nome='Grazielle' sobrenome={props.sobrenome}/>
            <Filho {...props} sobrenome={props.sobrenome + ' Jr'}/>
            <Filho {...props} nome='Kaue' />
        </ul>
    </div>
