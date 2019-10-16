import React from 'react'
import './Buttons.css'

//componente sem estado (FUNCIONAIS) recebem parametros de entrada,  
// quanto mais componentes Funcionas na aplicação, melhor
export default props =>
	<button 
		onClick={e=> props.click && props.click(props.label)}
		className={`
		//aqui vai javascript puro 
		button
		${props.operation ? 'operation' : ''}
		${props.double ? 'double' : ''}
		${props.triple ? 'triple' : ''}
	`}>
		{props.label}
	</button>