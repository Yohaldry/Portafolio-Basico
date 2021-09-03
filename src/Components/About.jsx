import React from 'react';
import {AboutS,Avatar,Img,Name,H2,Profession,Location,SeccionPrimary,S,Mod1,T,I,SeccionGeneral,
  SeccionSegundary,SeccionTres,SeccionCuatro,PP,LL} from '../Styled/AboutStyled'


function App() { 
  return (
    <AboutS>
      <Mod1>
      <div className="About-container">
          <Avatar>
              <figure>
                  <Img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1630625967/perfil_omtjfd.jpg" alt="Mi Avatar" />
              </figure>
          </Avatar>
          <Name>
              <H2>Yohaldry Quintero</H2>
          </Name>
          <Profession>
              <PP>Estudiante Academia GEEK</PP>
          </Profession>
          <Location>
              <LL>Bogota, Colombia</LL>
          </Location>
          <div className="About-social">
              <S>@Soy_Quintero</S>
          </div>
      </div>
      </Mod1>
      <SeccionGeneral>
          <SeccionPrimary>
            <h2>Mis Estudios</h2>
              <T><strong>PMV - 2013</strong><br/>
              <I>Tec. Informatica</I></T>
              <T><strong>GEEK - 2021</strong><br/>
              <I>Estudiante Activo</I></T>
          </SeccionPrimary>
          <SeccionSegundary>
            <h2>Experiencia</h2>
              <T><strong>Academia GEEK</strong><br/>
              <I>Programador Front-End</I></T>
          </SeccionSegundary>
          <SeccionTres>
            <h2>Certificaciones</h2>
              <T><strong>FreeCodeCamp</strong><br/>
              <I>CSS HTML JAVASCRIPT</I></T>
          </SeccionTres>
          <SeccionCuatro>
            <h2>Habilidades</h2>
            
          </SeccionCuatro>
       </SeccionGeneral>


    </AboutS>
  );
}

export default App;
