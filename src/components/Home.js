import React from 'react';
import { Row, Col } from 'reactstrap';

export default () => (
	<div id="carouselExampleControls" className="d-none d-md-flex carousel slide" data-ride="carousel">
	  <div className="carousel-inner">
	   	  <div className="carousel-item active">
		      <Row className="bg-primary">
		      	<Col className="ml-4 text-white mt-4">
		      		<h2> Radio Móvil </h2>
					<h4>Lunes a viernes de 8.00hs a 13.00hs</h4>
					<li>Conductor: Mauricio Garcia. Móvil de exteriores: Leonardo Ledesma. Operacion técnica: Luciano Ocaño</li>
		      	</Col>
		      	<Col>
		      	 <img src="assets/images/programas/fm882.jpg" className="w-100" height={400} alt="radiomovil" />
		      	</Col>
		      </Row>
	      </div>
	      <div className="carousel-item">
		      <Row className="bg-warning">
		      	<Col className="text-center text-white mt-4">
		      		<h2>"De 7 a 8"</h2>
					<h4>Lunes a viernes de 7.00hs a 8.00hs</h4>
					<li>Conductore: Martín García y José Calvo</li>
					<li >Operación técnica: Luciano Ocaño</li>
		      	</Col>
		      	<Col>
		      	 <img src="assets/images/programas/fm882.jpg" height={400} className="w-100" alt="de7a8" />
		      	</Col>
		      </Row>
	      </div>
	      <div className="carousel-item">	
	      	<Row className="bg-coral">
            	<Col className="text-center text-white mt-4">
            		<h2>Top Hits</h2>
					<h4>Lunes a viernes de 13.00hs a 14.30hs</h4>
					<p>Conductora: Natalia Ferlaino</p>
          		</Col>
		          <Col>
		            <img src="assets/images/programas/top.jpg" height={400} className="w-100" alt="tophits" />
		          </Col>
       		</Row>
	      </div>
	      <div className="carousel-item">	
	      	<Row className="bg-red">
            	<Col className="text-center text-white mt-4">
            		<h2 >El Expreso</h2>
                	<h4>Lunes a viernes de 14.30hs a 16.00hs</h4>
                	<h4>Ricardo Maritnez Puentes</h4>
          		</Col>
		          <Col>
		            <img src="assets/images/programas/elexpresso.jpeg" height={400} className="w-100" alt="tophits" />
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