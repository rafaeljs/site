import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ImgCode from '../Img/Code.jpg';
import Typography from '@material-ui/core/Typography';
import TextoAnimado from './TextoAnimado';


const styles = {
    Imagem: {
        display:'block',
        width:'100vw',
        height:'100vh',
        backgroundImage: `url(${ImgCode})`,
        backgroundSize: 'cover',
        overflow: 'hidden',
    },
    Texto:{
        color:'white',
        paddingTop:'35vh'
    },
};
function MediaCard() {
        return(
            <div style={styles.Imagem}>
                <div>
                    <Typography align={"center"} variant={"display3"} style={styles.Texto}>
                        Olá!
                    </Typography>
                    <TextoAnimado/>
                </div>
            </div>
        );
    }
    MediaCard.propTypes = {
        classes: PropTypes.object.isRequired,
    };

    export default withStyles(styles)(MediaCard);