import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import ImgRafael from '../Img/Rafael.jpg';
import Typography from '@material-ui/core/Typography';

const styles = {
    Imagem: {
        width: 200,
        height: 200,
    },
    Nome:{
        wordWrap:'break-word',
        marginLeft:70,
        fontFamily:'Bahnschrift',
        height: 50,
    },
    texto:{
        wordWrap:'break-word',
        color:'gray',
        marginLeft:70,
        fontFamily:'Bahnschrift',
        width: '55vw',
    },
};

function ImageAvatars() {
    return (
        <Grid container>
            <Avatar alt="Rafael" src={ImgRafael} style={styles.Imagem} />
            <div style={styles.Div}>
                <Typography variant={"h3"} style={styles.Nome}>
                    Rafael José Silvério
                </Typography>
                <Typography variant={"h6"} style={styles.texto}>
                    Desenvolvedor Full-Stack
                </Typography>
                <Typography variant={"h6"} style={styles.texto}>
                    rafaeljsilverio@hotmail.com - (67) 99694-0123
                </Typography>
                <Typography variant={"h6"} style={styles.texto}>
                    Campo Grande - MS
                </Typography>
                <br/>
                <Typography variant={"h6"} style={styles.texto}>
                    Olá! Me chamo Rafael José Silvério, tenho 23 anos e atualmente sou desevolvedor Full-Stack .Net
                </Typography>
            </div>
        </Grid>
    );
}

ImageAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);