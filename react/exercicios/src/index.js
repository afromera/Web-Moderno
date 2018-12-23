import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// import { BoaTarde, BoaNoite } from './componentes/Multiplos'
// import Mult, { BoaNoite } from './componentes/Multiplos'

import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <Saudacao tipo='Bom dia' nome='João' />
    ,document.getElementById('root'))