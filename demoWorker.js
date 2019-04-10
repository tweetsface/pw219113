var i=0;
function cuenta(){
	i=i+1;
	//Envia respuesta al worker que lo 
	//mando a llamar
	postMessage(i);
	//Ejecuta cuenta cada 500 milisegundos
	setTimeout("cuenta()",500);
}
cuenta();
