var objEstudiantes = [
	{
		codigo:'001',
		nombre:'Estudiante1',
		nota:71
	},
	{
		codigo:'002',
		nombre:'Estudiante2',
		nota:65
	},
	{
		codigo:'003',
		nombre:'Estudiante3',
		nota:85
	},
	{
		codigo:'004',
		nombre:'Estudiante4',
		nota:60
	},
	{
		codigo:'005',
		nombre:'Estudiante5',
		nota:100
	},
	{
		codigo:'006',
		nombre:'Estudiante6',
		nota:96
	},
	{
		codigo:'007',
		nombre:'Estudiante7',
		nota:71
	},
	{
		codigo:'008',
		nombre:'Estudiante8',
		nota:83
	},
	{
		codigo:'009',
		nombre:'Estudiante9',
		nota:50
	},
	{
		codigo:'010',
		nombre:'Estudiante10',
		nota:65
	}
]
function mostrarEstudiantes(){
	var myTable= "<table><tr><td style='width: 100px; color: red;'>Codigo</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: left;'>Nombre</td>";
    myTable+="<td style='width: 100px; color: red; text-align: right;'>Nota</td></tr>";

    myTable+="<tr><td style='width: 100px;                   '>---------------</td>";
    myTable+="<td     style='width: 100px; text-align: left;'>---------------</td>";
    myTable+="<td     style='width: 100px; text-align: right;'>---------------</td></tr>";

    for(var estudiante in objEstudiantes){
    	myTable+="<tr><td style='width: 100px;'>"+objEstudiantes[estudiante].codigo+"</td>";
    	myTable+="<td style='width: 100px; text-align: left;'>" + objEstudiantes[estudiante].nombre+ "</td>";
    	myTable+="<td style='width: 100px; text-align: right;'>" + objEstudiantes[estudiante].nota + "</td></tr>"
    }
    myTable+="</table>";
    document.getElementById('showTable').innerHTML = myTable;
}
function mostrarPromedio(){
	var myTable= "<table><tr><td style='width: 100px; color: red;'>Codigo</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: left;'>Nombre</td>";
    myTable+="<td style='width: 100px; color: red; text-align: right;'>Nota</td></tr>";

    myTable+="<tr><td style='width: 100px;                   '>---------------</td>";
    myTable+="<td     style='width: 100px; text-align: left;'>---------------</td>";
    myTable+="<td     style='width: 100px; text-align: right;'>---------------</td></tr>";

    var promedio = 0;
    var cantidad = 0;
    for(var estudiante in objEstudiantes){
    	cantidad ++; // contador de cantidad de estudiantes
    	promedio += objEstudiantes[estudiante].nota;//suma todas las notas
    }
    promedio = promedio/cantidad;//calcular el promedio
    myTable+="<tr><td style='width: 100px;'>PRM</td>";
    	myTable+="<td style='width: 100px; text-align: left;'>Promedio</td>";
    	myTable+="<td style='width: 100px; text-align: right;'>"+promedio+"</td></tr>"
    myTable+="</table>";
    document.getElementById('showTable').innerHTML = myTable;
}
function mostrarMayor(){
	var myTable= "<table><tr><td style='width: 100px; color: red;'>Codigo</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: left;'>Nombre</td>";
    myTable+="<td style='width: 100px; color: red; text-align: right;'>Nota</td></tr>";

    myTable+="<tr><td style='width: 100px;                   '>---------------</td>";
    myTable+="<td     style='width: 100px; text-align: left;'>---------------</td>";
    myTable+="<td     style='width: 100px; text-align: right;'>---------------</td></tr>";

    var notaMayor;
    for(var estudiante in objEstudiantes){
    	if(!notaMayor){
    		notaMayor = objEstudiantes[estudiante];
    	}
    	else{
    		if(notaMayor.nota<=objEstudiantes[estudiante].nota){
    			notaMayor = objEstudiantes[estudiante];
    		}
    	}
    }
    myTable+="<tr><td style='width: 100px;'>"+notaMayor.codigo+"</td>";
    	myTable+="<td style='width: 100px; text-align: left;'>"+notaMayor.nombre+"</td>";
    	myTable+="<td style='width: 100px; text-align: right;'>"+notaMayor.nota+"</td></tr>"
    myTable+="</table>";
    document.getElementById('showTable').innerHTML = myTable;
}

function mostrarMenor(){
	var myTable= "<table><tr><td style='width: 100px; color: red;'>Codigo</td>";
    myTable+= "<td style='width: 100px; color: red; text-align: left;'>Nombre</td>";
    myTable+="<td style='width: 100px; color: red; text-align: right;'>Nota</td></tr>";

    myTable+="<tr><td style='width: 100px;                   '>---------------</td>";
    myTable+="<td     style='width: 100px; text-align: left;'>---------------</td>";
    myTable+="<td     style='width: 100px; text-align: right;'>---------------</td></tr>";

    var notaMenor;
    for(var estudiante in objEstudiantes){
    	if(!notaMenor){
    		notaMenor = objEstudiantes[estudiante];
    	}
    	else{
    		if(notaMenor.nota>=objEstudiantes[estudiante].nota){
    			notaMenor = objEstudiantes[estudiante];
    		}
    	}
    }
    myTable+="<tr><td style='width: 100px;'>"+notaMenor.codigo+"</td>";
    	myTable+="<td style='width: 100px; text-align: left;'>"+notaMenor.nombre+"</td>";
    	myTable+="<td style='width: 100px; text-align: right;'>"+notaMenor.nota+"</td></tr>"
    myTable+="</table>";
    document.getElementById('showTable').innerHTML = myTable;
}