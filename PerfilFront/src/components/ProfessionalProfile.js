import React from 'react'
import '../App.css'
import AcademicExperience from './AcademicExperience'
import Contact from './Contact'
import Technologies from './Technologies'

const ProfessionalProfile = () => {
    const tec = ['Rect JS', 'Bootstrap', 'Html5 y Css3', 'Git']
    const cursos = ['Curso de Frontend Developer | Platzi', 'Curso Practico de React.js | Platzi']
    const skills = ['Trabajo en equipo', 'Adaptabilidad', 'Comunicación', 'Colaboración']

  return (
    <div>
        <div className="row">
            <div className="col-lg-3 text-center"></div>
            <div className="col-lg-6 ">
                <div className='mt-3 content-title text-center'>
                    <h1>Desarrolladora Frontend</h1>
                </div>
                <div className='text-center'>
                    <h3>Marcela Patiño</h3>
                </div>
                <div>
                    <p className='text-justify'> Ingeniera de sistemas con habilidades y destrezas en diseñar y maquetar sistemas
                        de información que conlleven a dar soluciones a los problemas de la comunidad; cuento
                        con 1 año de experiencia académica como desarrolladora frontend (junior). Busco
                        profundizar mis conocimientos en el ámbito del desarrollo de aplicaciones web.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-6 text-center">
                        <div style={{backgroundColor:'#c27fff', borderRadius: '50px'}}>
                            <h3 className='text-left mb-3 ml-2'>Contactos</h3>
                        </div>
                        <div>
                        <Contact
                            icon={<i className="fa-solid fa-phone"></i>}
                            description='+57 3138090452'
                         />
                         <Contact
                            icon={<i className="fa-solid fa-envelope"></i>}
                            description='ardiñamarcela42@gmail.com'
                         />
                          <Contact
                            icon={<i class="fa-brands fa-linkedin"></i>}
                            description='www.linkedin.com/in/marcela-ardila'
                         />
                        </div>
                        <div>
                            <div style={{backgroundColor:'#c27fff', borderRadius: '50px'}}>
                                <h3 className='text-left mb-3 ml-2'>Tecnologías</h3>
                            </div>
                            <Technologies 
                                tec={tec}
                            />
                        </div>
                        <div>
                            <div style={{backgroundColor:'#c27fff', borderRadius: '50px'}}>
                                <h3 className='text-left mb-3 ml-2'>Cursos y certificaciones</h3>
                            </div>
                            <Technologies 
                                tec={cursos}
                            />
                        </div>
                        <div>
                            <div style={{backgroundColor:'#c27fff', borderRadius: '50px'}}>
                                <h3 className='text-left mb-3 ml-2'>Habilidades Blandas</h3>
                            </div>
                            <Technologies 
                                tec={skills}
                            />
                        </div>
                    </div>
                    
                    <div className="col-lg-6 border-left">
                        <div style={{backgroundColor:'#c27fff', borderRadius: '50px'}}>
                            <h3 className='text-center ml-2'>Experiencia Académica</h3>
                        </div>
                        <div>
                        <AcademicExperience 
                            cargo= 'Desarrolladora de apalicaciones web'
                            año='2021'
                            description='Maquetar aplicativo web donde se visualice los diferentes
                            servicios que ofrece los sectores locales, proyecto
                            propuesto por Misión TIC 2022 - Universidad UTP'
                            />
                            <AcademicExperience 
                            cargo= 'Diseñadora web'
                            año='2019'
                            description='Diseñar y maquetar sistema de información de peticiones,
                            quejas y reclamos (PQRSF) denominado ESBEN para la
                            institución tolimense de formación técnica profesional ITFIP'
                            />
                            <AcademicExperience 
                            cargo= 'Auxiliar administrativo'
                            año='2019 - Registradora Auxiliar'
                            description='Liderar equipo de trabajo con el fin de cumplir con garantía y
                            transparencia los procesos a ejecutar en las elecciones
                            municipales de la Registraduría Municipal del Espinal'
                            />
                        </div>
                         <div style={{backgroundColor:'#c27fff', borderRadius: '50px'}}>
                            <h3 className='text-center'>Educación</h3>
                        </div>
                        <div>
                            <AcademicExperience 
                            cargo= 'Desarrolladora de aplicaciones Web'
                            año='2021'
                            description='Misión TIC - Universidad UTP'
                            />
                            <AcademicExperience 
                            cargo= 'Ingeniera de sistemas'
                            año='2019'
                            description='nstitución Tolimense de Formación Técnica
                            Profesional ITFIP'
                            />
                        </div>
                    </div>
                        
                </div>
            </div>
            <div className="col-lg-3 text-center"></div>
        </div>
    </div>
  )
}

export default ProfessionalProfile