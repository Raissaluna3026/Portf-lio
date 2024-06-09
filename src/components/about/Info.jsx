import React from 'react'
import { UilAward, UilBriefcaseAlt, UilHeadphonesAlt } from '@iconscout/react-unicons'


const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className='about__icon'> <UilAward/> </i>
            <h3 className="about__title">Experiência</h3>
            <span className="about__subtitle">1 dia de trabalho</span>
        </div>
        <div className="about__box">
        <i className='about__icon'> <UilBriefcaseAlt/> </i>
            <h3 className="about__title">Projetos</h3>
            <span className="about__subtitle">alguns</span>
        </div>
        <div className="about__box">
        <i className="about__icon" > <UilHeadphonesAlt/> </i>
            <h3 className="about__title">Academico?</h3>
            <span className="about__subtitle">n sei oq por aqui</span>
        </div>

    </div>
  )
}

export default Info