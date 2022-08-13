import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const[listadetareas,setListadetareas]=useState([])
	const tareas =(e)=>{e.preventDefault();
	setListadetareas([...listadetareas,e.target[0].value])
	}
	const borra =(indexItem)=>{
	setListadetareas((prevState)=>
	prevState.filter((elemento,indice)=>indice!==indexItem))
}



	return (
		<div className="text-center">
			<form type="submit"  onSubmit={tareas}>
			<h1 className="text-center mt-5">Tareas</h1>
			<input type="text"  />
			</form>
			<ul>{listadetareas.map((elemento,indice)=>{
				return (<li key={indice}>{elemento}<button onClick={()=>borra(indice)}>Borrar</button></li>)
			})}

			</ul>
			
		</div>
	);
};

export default Home;
