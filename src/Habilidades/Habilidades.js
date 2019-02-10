import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Paper, Typography} from "@material-ui/core";
import NodeImagem from '../Img/nodejs-new-pantone-black.png';
import CSharpImagem from '../Img/CSharpLogo.png';
import TrioFront from '../Img/TrioFront.png';
import ReactImagem from '../Img/React.png';
import PostgreSqlImagem from '../Img/PostgreSql.png';
import SqlServerImagem from '../Img/SqlServer.png';
import MongoDBImagem from '../Img/mongodb.png';
import TFSLogo from '../Img/TFSLogo.png';
import GitLogo from '../Img/GitLogo.png';
import Tooltip from '@material-ui/core/Tooltip';


const styles = {
    Tamanho: {
        height: '100vh',
        padding: 50,
        overflow: 'hidden',
    },
    Imagem:{
        maxHeight:130
    },
    ImagemMobile:{
        maxHeight:50
    },
    MarginMobile:{
        marginBottom:5
    },
    Margin:{
        marginBottom:20
    }
};

class Habilidades extends React.Component {

    render() {
        var Imagem = window.innerWidth <= 760?styles.ImagemMobile:styles.Imagem;
        var titulo = window.innerWidth <= 760?"h5":"h2";
        var subtitulo = window.innerWidth <= 760?"subtitle":"h4";
        var margin =  window.innerWidth <= 760?styles.MarginMobile:styles.Margin;
        return (
            <div style={styles.Tamanho}>
                <Grid container spacing={24} style={margin}>
                    <Grid item xs>
                        <Typography variant={titulo}>
                            Habilidades
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <Paper style={margin}>
                            <Typography variant={subtitulo}>
                                Back-End
                            </Typography>
                            <Grid container spacing={24}>
                                <Grid item xs>
                                    <Tooltip title={"Node.JS"}>
                                        <img src={NodeImagem} alt={"Node.JS"} style={Imagem}/>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs>
                                    <Tooltip title={"C#"}>
                                        <img src={CSharpImagem} alt={"C#"} style={Imagem}/>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper style={margin}>
                            <Typography variant={subtitulo}>
                                Front-End
                            </Typography>
                            <Grid container spacing={24}>
                                <Grid item xs>
                                    <Tooltip title={"HTML/CSS/JS"}>
                                        <img src={TrioFront} alt={"HTML/CSS/JS"} style={Imagem}/>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs>
                                    <Tooltip title={"React"}>
                                        <img src={ReactImagem} alt={"React"} style={Imagem}/>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <Paper style={margin}>
                            <Typography variant={subtitulo}>
                                Banco de dados
                            </Typography>
                            <Grid container spacing={24}>
                                <Grid item xs>
                                    <Tooltip title={"PostgreSql"}>
                                        <img src={PostgreSqlImagem} alt={"PostgreSql"} style={Imagem}/>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs>
                                    <Tooltip title={"Sql Server"}>
                                        <img src={SqlServerImagem} alt={"Sql Server"} style={Imagem}/>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs>
                                    <Tooltip title={"MongoDB"}>
                                        <img src={MongoDBImagem} alt={"MongoDB"} style={Imagem}/>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper style={margin}>
                            <Typography variant={subtitulo}>
                                Outros
                            </Typography>
                            <Grid container spacing={24}>
                                <Grid item xs>
                                    <Tooltip title={"Team Foundation Server"}>
                                        <img src={TFSLogo} alt={"Team Foundation Server"} style={Imagem}/>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs>
                                    <Tooltip title={"Git"}>
                                        <img src={GitLogo} alt={"Git"} style={Imagem}/>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Habilidades;