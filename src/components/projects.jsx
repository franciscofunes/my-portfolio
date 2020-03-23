import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Portfolio</span>
								<h2 className="colorlib-heading animate-box">Proyectos</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 01</a></h3>
											<span>Website para Consultora en seguridad e higiene</span>
											<p className="icon">
												<span><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.grupodehl.com"><i className="icon-share3" target="_blank" rel="noopener noreferrer" /></a></span>
												<span><a href="https://www.grupodehl.com" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /> 100</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 02</a></h3>
											<span>Animación texto En CSS3 y HTML5</span>
											<p className="icon">
												<span><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://codepen.io/FranFunes/pen/mdyLLJY" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
												<span><a href="https://codepen.io/FranFunes/full/mdyLLJY" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /> 100</a></span>
												
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 03</a></h3>
											<span>Cuestionario Interactivo</span>
											<p className="icon">
												<span><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://codepen.io/FranFunes/pen/abOqbzr" target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
												<span><a href="https://codepen.io/FranFunes/pen/abOqbzr" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /> 100</a></span>

											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 04</a></h3>
											<span>Aplicación- Juego Ahorcado</span>
											<p className="icon">
												<span><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://codepen.io/FranFunes/pen/vYOzdNX"target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
												<span><a href="https://codepen.io/FranFunes/live/vYOzdNX"target="_blank" rel="noopener noreferrer"><i className="icon-eye" /> 100</a></span>

											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Agenda desarollada en React</span>
											<p className="icon">
												<span><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://codepen.io/FranFunes/full/eYNJgZZ"target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
												<span><a href="https://codepen.io/FranFunes/full/eYNJgZZ"target="_blank" rel="noopener noreferrer"><i className="icon-eye" /> 100</a></span>

											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Videolyric para grupo musical</span>
											<p className="icon">
												<span><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.youtube.com/watch?v=V4kUcGdMcoM"><i className="icon-share3" /></a></span>
												<span><a href="https://www.youtube.com/watch?v=V4kUcGdMcoM" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /> 100</a></span>

											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="https://github.com/franciscofunes" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg btn-load-more">Más proyectos <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}