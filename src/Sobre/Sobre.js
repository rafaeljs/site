import React from 'react';
import Paper from '@material-ui/core/Paper';
import Informacoes from './Informacoes';
import Redes from "./Redes";


const styles = {
    Tamanho:{
        width:'98.5vw',
        height:'90vh',
        padding:10,
    },
    Papel:{
        padding:100,
        paddingTop:110,

        textAlign:'left',
    },
};

class Sobre extends React.Component{

    render(){
        return(
            <div style={styles.Tamanho} >
                <Paper style={styles.Papel}>
                    <Informacoes/>
                    <Redes/>
                </Paper>
            </div>
        );
    }
}
export default Sobre;