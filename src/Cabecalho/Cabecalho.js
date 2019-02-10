import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ImgCode from '../Img/Code.jpg';
import TextoAnimado from './TextoAnimado';


const styles = {
    Imagem: {
        display:'block',
        width:'100vw',
        height:'100vh',
        backgroundImage: `url(${ImgCode})`,
        backgroundSize: 'cover',
       // overflow: 'hidden',
    },
};
function MediaCard() {
        return(
            <div style={styles.Imagem}>
                <div>
                    <TextoAnimado/>
                </div>
            </div>
        );
    }
    MediaCard.propTypes = {
        classes: PropTypes.object.isRequired,
    };

    export default withStyles(styles)(MediaCard);