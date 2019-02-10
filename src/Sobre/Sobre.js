import React from 'react';
import Informacoes from './Informacoes';
import Redes from "./Redes";


const styles = {
    Tamanho:{
        height:'100vh',
        padding:50,
        overflow:'hidden',
    },
};

class Sobre extends React.Component{
    render(){
        return(
            <div style={styles.Tamanho} >
                <Informacoes/>
                <Redes/>
            </div>
        );
    }
}
export default Sobre;