import React from 'react';
import { Row, Col } from 'reactstrap';

export default () => (
	<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
	  <div className="carousel-inner">
	   	  <div className="carousel-item active">
		      <Row className="bg-danger">
		      	<Col>
		      		<h2 className="text-white mt-2 ml-2"> Radio Móvil </h2>
					<h4 className="text-white ml-2">Lunes a viernes de 8.00hs a 13.00hs</h4>
					<li className="text-white ml-2">Conductor: Mauricio Garcia. Móvil de exteriores: Leonardo Ledesma. Operacion técnica: Luciano Ocaño</li>
		      	</Col>
		      	<Col>
		      	 <img src="assets/images/programas/fm882.jpg" className="w-100" alt="..." />
		      	</Col>
		      </Row>
	      </div>
	      <div className="carousel-item">
		      <Row className="bg-warning">
		      	<Col>
		      		<h2 className="text-white ml-2 mt-2">"De 7 a 8"</h2>
					<h4 className="text-white ml-2">Lunes a viernes de 7.00hs a 8.00hs</h4>
					<li className="text-white ml-2">Conductore: Martín García y José Calvo</li>
					<li className="text-white ml-2">Operación técnica: Luciano Ocaño</li>
		      	</Col>
		      	<Col>
		      	 <img src="assets/images/programas/fm882.jpg" className="w-100" alt="..." />
		      	</Col>
		      </Row>
	      </div>
	      </div>
	  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
	    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
	    <span className="sr-only">Previous</span>
	  </a>
	  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
	    <span className="carousel-control-next-icon" aria-hidden="true"></span>
	    <span className="sr-only">Next</span>
	  </a>
	</div>
	)