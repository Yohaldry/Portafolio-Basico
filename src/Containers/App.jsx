import React from 'react';
import styled from 'styled-components';
import About from '../Components/About';


const GlobalStyle = styled.div`
    body{

        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #464545;
    }

`;

const App = () => {
    return ( 
            <GlobalStyle>
                <About />
               
            </GlobalStyle>
     );
}
 
export default App
