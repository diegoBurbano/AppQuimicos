	 
		/*Modal para mostrar los Mensajes*/
/*---------------------------------------------*/
function imprimir_modal(msj) {
	var rta = 	"<div id='avModal' class='modal fade' role='dialog'>"+
					"<div class='modal-dialog'>"+
						"<div class='modal-content'>"+
							"<div class='modal-body'>"+
								"<p>"+msj+"</p>"+
							"</div>"+
							"<div class='modal-footer'>"+
								"<button type='button' class='btn btn-primary' data-dismiss='modal' id='btnCerrarModal'>Cerrar</button>"+
							"</div>"+
						"</div>"+
					"</div>"+
				"</div>";

	return rta;

}


			/*Pantalla de inicio*/
/*---------------------------------------------*/
function pantallaInicio() {
	var pag =   "<div class='container-fluid'>"+
					"<header class='row'>"+
						"<div class='col-xs-12 col-sm-12 bg-primary'>"+
							"<h4 class='text-center'><b>LISTA DE CHEQUEO SELLOS Y ETIQUETAS DE SEGURIDAD</b></h4>"+
						"</div>"+
					"</header>"+
					"<section class='row'>"+
						"<div class='col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3'>"+
							"<button onclick='pantallaSelFormato();' class='btn btn-block btn-primary' style='margin-top: 50%;'>Realizar Revisión</button>"+
						"</div>"+
					"</section>"+
				"</div>";

	return document.getElementById('pagina').innerHTML = pag;
}

			/*Pantalla seleccion de formato*/
/*---------------------------------------------*/
function pantallaSelFormato() {
	var pag =   "<div class='container-fluid'>"+
					"<header class='row'>"+
						"<div class='col-xs-12 col-sm-12 bg-primary'>"+
							"<h4 class='text-center'><b>LISTA DE CHEQUEO SELLOS Y ETIQUETAS DE SEGURIDAD</b></h4>"+
						"</div>"+
					"</header>"+
					"<section>"+
						"<div class='row'>"+
							"<div class='col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3'>"+
								"<button onclick='sessionStorage.setItem(\""+'tipoFormato'+"\", \""+'FORMATO NACIONAL'+"\");pantallaDatosVehi();' class='btn btn-block btn-primary' style='margin-top: 50%;' >Formato Nacional</button>"+
							"</div>"+
						"</div>"+
						"<br>"+
						"<div class='row'>"+
							"<div class='col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3'>"+
								"<button onclick='sessionStorage.setItem(\""+'tipoFormato'+"\", \""+'FORMATO EXPORTACIÓN'+"\");pantallaDatosVehi();' class='btn btn-block btn-primary'>Formato Exportación</button>"+
							"</div>"+
						"</div>"+
					"</section>"+
				"</div>";

	return document.getElementById('pagina').innerHTML = pag;
}


		/*Pantalla Datos del Vehiculo*/
/*---------------------------------------------*/
function pantallaDatosVehi() {
	var tipoFormato = sessionStorage.getItem("tipoFormato");
	var pag = 	"<div class='container-fluid'>"+
					"<header class='row'>"+
						"<div class='col-xs-12 col-sm-12 bg-primary'>"+
							"<h4 class='text-center'><b>"+tipoFormato+"</b></h4>"+
						"</div>"+
					"</header>"+
					"<br>"+
					"<div class='row'>"+
						"<div class='col-xs-4'>"+
							"<button onclick='pantallaSelFormato();' class='btn btn-primary'><span class='glyphicon glyphicon-arrow-left'>&ensp;Atrás</span></button>"+
						"</div>"+
					"</div>"+
					"<br>"+
					"<section>"+
						"<div class='row'>"+
							"<div class='col-xs-12 col-sm-6 col-sm-offset-3'>"+
								"<form class='form-horizontal'>"+
									"<div class='form-group'>"+
										"<label class='control-label col-xs-3'>Fecha:</label>"+
										"<div class='col-xs-9'>"+
											"<input type='date' class='form-control' id='inFecha'>"+
										"</div>"+
									"</div>"+
									"<div class='form-group'>"+
										"<label class='control-label col-xs-3'>Placa:</label>"+
										"<div class='col-xs-9'>"+
											"<input type='text' class='form-control' id='inPlaca'>"+
										"</div>"+
									"</div>"+
								"</form>"+
								"<br>"+
								"<div class='col-xs-6 col-xs-offset-3'>"+
									"<button class='btn btn-primary'>Tomar Foto</button>"+
								"</div>"+
							"</div>"+
						"</div>"+
						"<br>"+
						"<div class='row'>"+
							"<div class='col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3'>"+
								"<div class='caja-foto'>"+
									"<img src='img/foto_default.png' class='ima-responsive' id='smallImage'>"+
								"</div>"+
							"</div>"+
						"</div>"+
						"<br>"+
						"<div class='col-xs-4 col-xs-offset-4 col-sm-2 col-sm-offset-5'>"+
							"<button class='btn btn-primary'>Guardar</button>"+
						"</div>"+
						"<div id='modal'></div>"+
					"</section>"+
				"</div>";

	return document.getElementById('pagina').innerHTML = pag;
}