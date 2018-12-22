import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// import { BoaTarde, BoaNoite } from './componentes/Multiplos'

import Mult, { BoaNoite } from './componentes/Multiplos'

ReactDOM.render(
    <div>
        <Mult.BoaTarde nome='Alex' />
        <BoaNoite nome='Caroline' />
    </div>
 , document.getElementById('root'))