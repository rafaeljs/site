import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ImgCode from '../Img/Code.jpg';
import Typography from '@material-ui/core/Typography';
import TextoAnimado from './TextoAnimado';


const styles = {
    Imagem: {
        width:'100%',
        height:658,
        backgroundImage: `url(${ImgCode})`,
    },
    Texto:{
        color:'white',
        paddingTop:200
    },
};
function MediaCard(props) {
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