import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Paper, Typography} from "@material-ui/core";
import CircuitoImagem from '../Img/EngComp.jpg';

const styles = {
    Tamanho: {
        height: '100vh',
        padding: 50,
        overflow: 'hidden',
    },
    curso: {
        webkitTextStrokeWidth: 1,
        webkitTextStrokeColor: '#000',
        textAlign:'center',
        color:'white',
    },
    universidade: {
        webkitTextStrokeWidth: 1,
        webkitTextStrokeColor: '#000',
        textAlign:'center',
        color:'white',
    },
    MarginMobile:{
        marginBottom:5,
        backgroundImage:`url(${CircuitoImagem})`,
        backgroundPosition:'bottom center',
    },
    Margin:{
        padding:20,
        marginBottom:20,
        backgroundImage:`linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.4)),url(${CircuitoImagem})`,
        backgroundPosition:'bottom center',
    }
};

class Educacao extends React.Component {
    render() {
        var titulo = window.innerWidth <= 760?"h5":"h2";
        var curso = window.innerWidth <= 760?"subtitle":"h4";
        var universidade = window.innerWidth <= 760?"Subheading":"h6";
        var margin =  window.innerWidth <= 760?styles.MarginMobile:styles.Margin;
        return (
            <div style={styles.Tamanho}>
                <Grid container spacing={24} style={{marginBottom:20}}>
                    <Grid item xs>
                        <Typography variant={titulo}>
                            Educação
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <Paper style={margin}>
                            <Grid>
                                <Typography variant={curso} style={styles.curso} >
                                    Engenharia de Computação
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography variant={universidade} style={styles.universidade} >
                                    Universidade Católica Dom Bosco - UCDB
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography variant={universidade} style={styles.universidade} >
                                    Previsão de conclusão - 2019
                                </Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Educacao;