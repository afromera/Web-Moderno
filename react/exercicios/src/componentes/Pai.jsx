import React from 'react'
import { childrenWithProps } from '../utils/utils'


export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h3>Filhos</h3>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>
