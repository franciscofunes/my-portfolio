import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Destacados</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Grupo Dehl <span>2017-present</span></h2>
                        <p>Asisto al Equipo de Grupo Dehl en el desarrollo y mantenimiento de su página web , tambien se realizan tareas de posicionamiento (SEO), diseño de logos, gráficas, y estrategias de marketing en las redes sociales para promocionar sus servicios y conseguir nuevos clientes </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>IFTS Nro 21 - Tecnicatura en Analisis de sistemas<span>2019 - actualidad</span></h2>
                        <p>En el 2019 comence a estudiar con la finalidad promover mis habilidades en la construcción de herramientas intelectuales y prácticas necesarias para la operación, programación y el análisis de sistemas informáticos. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Univeridad Maimonides <span>2003-2015</span></h2>
                        <p>En el 2015 me recibí de Licenciado en Composición y arreglos en la Facultad Maimonnides, El objetivo fundamental y desafío principal de la carrera fue formarme como músico profesionales que la Argentina. La finalidad básica fue conseguir una sólida formación artística y profesional, con un nivel de perfeccionamiento sobresaliente, que me permita desarrollarme en instituciones públicas, entidades privadas, organizaciones internacionales, instituciones sociales, universidades u otras entidades académicas; así como también proyectar una vida artística, ejerciendo como compositores, directores y/o intérpretes.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
