import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Paper, Typography} from "@material-ui/core";

const styles = {
    Tamanho: {
        height: '100vh',
        padding: 50,
        overflow: 'hidden',
    },
    experiencia: {
        textAlign:'center',
    },
    Titulo: {
        textAlign:'center',
    },
    MarginMobile:{
        marginBottom:5,
    },
    Margin:{
        padding:20,
        marginBottom:20,
    }
};

class Experiencias extends React.Component {
    render() {
        var titulo = window.innerWidth <= 760?"h5":"h2";
        var experiencia = window.innerWidth <= 760?"subtitle":"h4";
        var trabalho = window.innerWidth <= 760?"Subheading":"h6";
        var margin =  window.innerWidth <= 760?styles.MarginMobile:styles.Margin;
        return (
            <div style={styles.Tamanho}>
                <Grid container spacing={24} style={{marginBottom:20}}>
                    <Grid item xs>
                        <Typography variant={titulo}>
                            Experiências
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <Paper style={margin}>
                            <Grid>
                                <Typography variant={experiencia} style={styles.experiencia} >
                                    PIBIC
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography variant={trabalho} style={styles.Titulo} >
                                    Estudo e análise da criação da IHM web do sistema de
                                    telemetria para os veículos dos projetos automotivos da UCDB
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography variant={trabalho} style={styles.Titulo} >
                                    Ago. 2017 - Ago. 2018
                                </Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <Paper style={margin}>
                            <Grid>
                                <Typography variant={experiencia} style={styles.experiencia} >
                                    SGI - Superintendência de Gestão da Informação - MS
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography variant={trabalho} style={styles.Titulo} >
                                    Desenvolvedor Full-Stack .NET (Entity Framework, C#, ASP.NET, SQL Server) do sistema de Crédito Tributário
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography variant={trabalho} style={styles.Titulo} >
                                    Nov. 2018 - Atual
                                </Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Experiencias;