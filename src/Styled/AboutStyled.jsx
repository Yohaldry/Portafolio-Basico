import styled from "styled-components";



const AboutStyle = styled.div`
    
    width: 70%;
    margin-left: 300px;
    padding-bottom: 0;
    display: flex;
`;

const Sect1 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');

    padding-left: 15px;
    border: 4px solid #ce4c01;
    color: #5f94d8;
    width: 95%;
    margin-bottom: 10px;
    letter-spacing: 2.5px;
    font-size: 15px;
    font-family: 'Abel', sans-serif;
    
    
`;

const Sect2 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');

    padding-left: 15px;
    border: 4px solid #ac01ce;
    color: #5f94d8;
    width: 95%;
    margin-bottom: 10px;
    letter-spacing: 2.5px;
    font-size: 15px;
    font-family: 'Abel', sans-serif;
    
    
`;
const Sect3 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');

    padding-left: 15px;
    border: 4px solid #e2e605;
    color: #5f94d8;
    width: 95%;
    margin-bottom: 10px;
    letter-spacing: 2.5px;
    font-size: 15px;
    font-family: 'Abel', sans-serif;
    
    
`;
const Sect4 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');

    padding-left: 15px;
    border: 4px solid #360041;
    color: #5f94d8;
    width: 95%;
    margin-bottom: 10px;
    letter-spacing: 2.5px;
    font-size: 15px;
    font-family: 'Abel', sans-serif;
    
    
`;

const SectG = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');

    color: #5f94d8;
    width: 50%;
    margin-bottom: 100px;
    letter-spacing: 2.5px;
    font-size: 15px;
    font-family: 'Abel', sans-serif;
    
`;


const perfilImg = styled.div`

    width: 27%;
    margin-bottom: 100px;

`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 4px solid #3F51b5;
    margin: 0;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0,0.6);
    object-fit: cover;
    margin-left: 90px;
`;

const imagen = styled.img`
    border-radius: 0%;
    width: 400px;
    height: 160px;
    border: 2px solid #f00707;
    margin: 0;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0,0.6);
    object-fit: cover;
`;


const AboutName = styled.div`
    margin-left: 30px;
`;

const Social = styled.p`
    margin-left: 100px;
`;
const traemos = styled.p`
    margin-left: 80px;
`;
const Pperfil = styled.p`
    margin-left: 30px;
`;
const info = styled.p`
    color: #616161;
    font-size: 13px;
    
   
`;

const title = styled.p`
    color: black;
    

`;

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #448AFF;
    
`;

const AboutProfession = styled.p`
 
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #448AFF;
    margin-left: 20px;
`;

const AboutLocation = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 400;
    margin-left: 60px;
`;

export const AboutS = AboutStyle
export const Avatar = AboutAvatar
export const Img = AboutImg
export const Name = AboutName
export const H2 = AboutH2
export const Profession = AboutProfession
export const Location = AboutLocation
export const SeccionPrimary = Sect1
export const S = Social 
export const Mod1 = perfilImg
export const T = title 
export const I = info
export const SeccionGeneral = SectG
export const SeccionSegundary = Sect2
export const SeccionTres = Sect3
export const SeccionCuatro = Sect4
export const ImgF = imagen
export const PP = Pperfil
export const LL = traemos
