import React from 'react'
import { UilCheckCircle } from '@iconscout/react-unicons'

function Frontend() {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Desenvolvedora Frontend</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className='icons'><UilCheckCircle size="1rem"/></i>

                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Basico</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='icons'><UilCheckCircle size="1rem"/></i>
                    
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Intermediario</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='icons'><UilCheckCircle size="1rem"/></i>
                    
                    <div>
                        <h3 className="skills__name">Next.js</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i></i>
                    
                    <div>
                        <h3 className="skills__name"></h3>
                        <span className="skills__level"></span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className='icons'><UilCheckCircle size="1rem"/></i>
                    
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Avançado</span>
                    </div>
                </div>
                <div className="skills__data icons">
                    <i className='icons'><UilCheckCircle size="1rem"/></i>
                    
                    <div>
                        <h3 className="skills__name">Figma</h3>
                        <span className="skills__level">Intermediario</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend