import React, { Component } from 'react';

export default class Sidebar extends Component {
	render() {
		return (
			<div>
				<div>
					<nav
						href='#navbar'
						className='js-colorlib-nav-toggle colorlib-nav-toggle'
						data-toggle='collapse'
						data-target='#navbar'
						aria-expanded='false'
						aria-controls='navbar'
					>
						<i />
					</nav>
					<aside id='colorlib-aside' className='border js-fullheight'>
						<div className='text-center'>
							<div
								className='author-img'
								style={{ backgroundImage: 'url(images/about.jpg)' }}
							/>
							<h1 id='colorlib-logo'>
								<a href='index.html'>Francisco Ignacio Funes</a>
							</h1>
							<span className='email'>
								<i className='icon-mail'></i>
								<a href='mailto: f.funes@bue.edu.ar' style={{ color: 'black' }}>
									f.funes@bue.edu.ar
								</a>
							</span>
						</div>
						<nav id='colorlib-main-menu' role='navigation' className='navbar'>
							<div id='navbar' className='collapse'>
								<ul>
									<li className='active'>
										<a href='#home' data-nav-section='home'>
											Introducción
										</a>
									</li>
									<li>
										<a href='#about' data-nav-section='about'>
											Acerca
										</a>
									</li>
									{/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
									<li>
										<a href='#timeline' data-nav-section='timeline'>
											Timeline
										</a>
									</li>
									<li>
										<a href='#projects' data-nav-section='projects'>
											Proyectos
										</a>
									</li>
								</ul>
							</div>
						</nav>
						<nav id='colorlib-main-menu'>
							<ul>
								<li>
									<a
										href='https://twitter.com/1funes1'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='icon-twitter2' />
									</a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/francisco_ign_/'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='icon-instagram' />
									</a>
								</li>
								<li>
									<a
										href='https://www.linkedin.com/in/francisco-funes/'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='icon-linkedin2' />
									</a>
								</li>
								<li>
									<a
										href='https://github.com/franciscofunes'
										target='_blank'
										rel='noopener noreferrer'
									>
										<i className='icon-github'></i>
									</a>
								</li>
							</ul>
						</nav>
						<div className='colorlib-footer'>
							<p>
								<small>
									Hecho con <i className='icon-heart' aria-hidden='true' /> y{' '}
									<i className='icon-beer' aria-hidden='true'></i>
									<br></br>
									Gracias{' '}
									<a
										href='https://colorlib.com'
										target='_blank'
										rel='noopener noreferrer'
									>
										Colorlib
									</a>{' '}
									por la inspiración.
								</small>
							</p>
							<p>
								<small>
									<span role='img' aria-label='sun'>
										💛 Lo mejor siempre esta por venir 💛
									</span>
								</small>
							</p>
						</div>
					</aside>
				</div>
			</div>
		);
	}
}
