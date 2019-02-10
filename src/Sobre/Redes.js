import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GithubIcon from '../Img/GitHub-Mark-64px.png';
import GitLabIcon from '../Img/gitlab-icon-rgb.png';
import FacebookIcon from '../Img/flogo_RGB_HEX-72.png';

const styles = {
    button: {
        margin:20,
    },
    buttonMobile: {
        margin:10,
        marginTop:50,
    },
    div:{
        marginRight:0,
        textAlign:'center',
    },
    img:{
        width:64,
        height:64,
    },
    imgMobile:{
        width:40,
        height:40,
    }
};

function Redes() {
    var tamanho = window.innerWidth <= 760?styles.imgMobile:styles.img;
    var botao = window.innerWidth <= 760?styles.buttonMobile:styles.button;
    return (
        <div style={styles.div}>
            <a href="https://github.com/rafaeljs">
                <IconButton style={botao}>
                    <img src={GithubIcon} alt={"Github"} style={tamanho} />
                </IconButton>
            </a>
            <a href="https://gitlab.com/rafaeljs">
                <IconButton style={botao} >
                    <img src={GitLabIcon} alt={"Gitlab"} style={tamanho} />
                </IconButton>
            </a>
            <a href="https://www.facebook.com/rafael.silverio.39">
                <IconButton style={botao}>
                    <img src={FacebookIcon} alt={"Facebook"} style={tamanho} />
                </IconButton>
            </a>
        </div>
    );
}

Redes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Redes);