import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	/*const[aa,setAa]=useState([])
	const[tareas,setTareas]=useState("");
	const receptor=(e)=>{e.preventDefault()};
	
	


	return(
		<div className="text-center">
			<form type="sumbit" onSubmit={receptor} >
			<h1>LISTA</h1>
			<input type="text" />
			</form>
		</div>
	);*/
	const[listadetareas,seListadetareas]=useState([])
	const tareas =(e)=>{
	e.preventDefault();
	const conjuntodetareas=setAa([...listadetareas,e.target[0].value]);
	console.log(conjuntodetareas[0])
	
	
};



	return (
		<div className="text-center">
			<form type="submit"  onSubmit={tareas}>
			<h1 className="text-center mt-5">Tareas</h1>
			<input type="text"  />
			
			<ul>

			</ul>
			</form>
		</div>
	);
};

export default Home;
