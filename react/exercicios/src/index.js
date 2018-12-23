import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// import { BoaTarde, BoaNoite } from './componentes/Multiplos'
// import Mult, { BoaNoite } from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(

    <Pai nome='Alex' sobrenome='Romera'>
        {/* Como passar os filhor por aqui? */}
        <Filho nome='Grazielle' sobrenome='Romera' />
        <Filho nome='Alex' sobrenome='Romera' />
        <Filho nome='Kaue' sobrenome='Romera' />
    </Pai>

,document.getElementById('root'))