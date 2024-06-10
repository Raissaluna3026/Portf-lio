import React from 'react';
import { UilCheckCircle } from '@iconscout/react-unicons'

function Backend() {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Desenvolvedora Backend</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data" id='icons'>
                <i className='icons'><UilCheckCircle size="1rem"/></i>

                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Intermediario</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='icons'><UilCheckCircle size="1rem"/></i>
                    
                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='icons'><UilCheckCircle size="1rem"/></i>
                    
                    <div>
                        <h3 className="skills__name">Sqlite</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='icons'><UilCheckCircle size="1rem"/></i>
                    
                    <div>
                        <h3 className="skills__name">Prismic</h3>
                        <span className="skills__level">Intermediario</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <i className='icons'><UilCheckCircle size="1rem"/></i>

                    <div>
                        <h3 className="skills__name">Não sei</h3>
                        <span className="skills__level">Intermediario</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='icons'><UilCheckCircle size="1rem"/></i>
                    
                    <div>
                        <h3 className="skills__name">Não sei</h3>
                        <span className="skills__level">Básico</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='icons'><UilCheckCircle size="1rem"/></i>
                    
                    <div>
                        <h3 className="skills__name">Não sei</h3>
                        <span className="skills__level">Avançado</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Backend