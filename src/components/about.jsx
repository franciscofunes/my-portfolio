import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Acerca de</span>
                    <h2 className="colorlib-heading">¿Quién Soy?</h2>
                    <p>Soy Front-End Developer, a su vez finalice la carrera de Técnico Superior en Análisis de Sistemas en el IFTS N° 21 en Argentina, Buenos Aires, CABA.En el 2022 me encuentro cursando la Licenciatura en gestión de tecnología en la Universidad de la Matanza. También me capacitó realizando cursos y certificaciones en plataformas como Freecodecamp, SoloLearn, Udemy, CodeAcademy, Coursera</p>
                    <p>También me dedico a la Educación Musical . Soy guitarrista , compositor, productor y asistente de grabación - Me recibí en la Universidad Maimónides de “Profesor en Arte con orientación en Lenguaje Musical” y de “Licenciado en Artes musicales” orientación Composición en el año 2015. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">¿A qué me dedico?</span>
                <h2 className="colorlib-heading">Algunas de mis habilidades</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Desarrollo y diseño Web </h3>
                    <p>Tengo experiencia creando paginas webs utilizando HTML5, CSS3, Javascript, MERN stack (Mongo + Express + React + Node.). <br/>A su vez brindo asesoramiento al sobre nuevas tecnologías disponibles en el mercado para sumar valor al proyecto y mejorar la administración de las base de datos.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Estructura de datos y Algoritmos</h3>
                    <p>A lo largo del segundo año de la Carrera de Técnico en Análisis de sistemas en el IFTS Nro 21, en las materias Programación Aplicada, base de datos y diseño de sistemas se abarcaron los contenidos correspondientes para diseñar y desarrollar software, se utilizo el lenguaje de programación JAVA para llevar acabo ejercicios y aplicación de conocimientos. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Developer Jr.</h3>
                    <p>Mis principales intereses están abocados a seguir trabajando y perfeccionandome en el Área de Desarrollo de Software (Web Development, Mobile Development, API Development: back-end)</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
