import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ImgRafael from '../Img/Rafael.jpg';
import Typography from '@material-ui/core/Typography';

const styles = {
    Imagem: {
        width: 180,
        height: 180,
    },
    ImagemMobile: {
        width: 150,
        height: 150,
    },
    centrar: {
        paddingLeft:'50%',
        marginLeft:-90,
    },
    centrarMobile: {
        paddingLeft:'50%',
        marginLeft:-75,
    },
    Nome:{
        marginTop:20,
        textAlign:'center',
        wordWrap:'break-word',
        fontFamily:'Bahnschrift',
    },
    texto:{
        textAlign:'center',
        wordWrap:'break-word',
        color:'gray',
        fontFamily:'Bahnschrift',
    },
};

class ImageAvatars extends React.Component {
    render() {
        var tamanho = window.innerWidth <= 760?styles.ImagemMobile:styles.Imagem;
        var nome = window.innerWidth <= 760?"h5":"h4";
        var texto = window.innerWidth <= 760?"subtitle":"h6";
        var centro = window.innerWidth <= 760?styles.centrarMobile:styles.centrar;
        return (
            <div>
                <div style={centro}>
                    <Avatar alt="Rafael" src={ImgRafael} style={tamanho} />
                </div>
                <div>
                    <Typography variant={nome} style={styles.Nome}>
                        Rafael José Silvério
                    </Typography>
                    <Typography variant={texto} style={styles.texto}>
                        Desenvolvedor Full-Stack
                    </Typography>
                    <Typography variant={texto} style={styles.texto}>
                        rafaeljsilverio@hotmail.com
                    </Typography>
                    <Typography variant={texto} style={styles.texto}>
                        (67) 99694-0123
                    </Typography>
                    <Typography variant={texto} style={styles.texto}>
                        Campo Grande - MS
                    </Typography>
                    <br/>
                    <Typography variant={texto} style={styles.texto}>
                        Olá! Me chamo Rafael José Silvério, tenho 23 anos e atualmente sou desevolvedor Full-Stack .Net
                    </Typography>
                </div>
            </div>
        );
    }
}

ImageAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);