// importei o React e o Fragment
import React, {Fragment} from 'react'

// como importei o Fragment não tenho a 
// necessidade de digitar o comando 
// React.Fragment, basta utilizar Fragment.
// Outra coisa importante é que o Fragment
// não vai renderizar na DOM o elemento div 
export default props => 
  <Fragment>
      <h1>Bom dia {props.nome}</h1>
      <h2>Você tem {props.idade} anos de idade</h2>
  </Fragment>


// utilizando div (funciona)
//
// export default props =>
//     <div>
//        <h1>Usando DIV - Bom dia {props.nome}</h1>
//        <h2>Você tem {props.idade} anos de idade</h2>
//     </div>
//
// Com o React.Fragment não existe a necessidade 
// de utilizar uma div, já que o JSX não consegue 
// renderizar os elementos sem estar dentro de uma 
// div.



// Também podemos utilizar array para retornar os
// elementos na DOM (sem usar a div também), mas
// nesse caso é importante passar "key" do elemento
//
// export default props => [
//     // note que estou informando o valor de key
//     // em ambos os elementos do array
//     <h1 key='h1'>Bom dia usando Array</h1>,
//     <h2 key='h2'>Outro elemento html</h2>
// ]