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
    div:{
        marginRight:0,
        marginTop:70,
        textAlign:'center',
    },
    img:{
        width:64,
        height:64,
    }
};

function Redes() {
    return (
        <div style={styles.div}>
            <a href="https://github.com/rafaeljs">
                <IconButton style={styles.button}>
                    <img src={GithubIcon} alt={"Github"} style={styles.img} />
                </IconButton>
            </a>
            <a href="https://gitlab.com/rafaeljs">
                <IconButton style={styles.button} >
                    <img src={GitLabIcon} alt={"Gitlab"} style={styles.img} />
                </IconButton>
            </a>
            <a href="https://www.facebook.com/rafael.silverio.39">
                <IconButton style={styles.button}>
                    <img src={FacebookIcon} alt={"Facebook"} style={styles.img} />
                </IconButton>
            </a>
        </div>
    );
}

Redes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Redes);