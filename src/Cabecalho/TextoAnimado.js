import React from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
    Texto:{
        color:'white',
        paddingLeft:'33vw',
    },
};

class TextoAnimado extends React.Component{
    setTexto(numb,name) {
        var Dev = "Desenvolvedor";
        var Nome = "Rafael Silvério";
        var text = "";
        if(name)
            text = Nome.substr(0,numb);
        else
            text = Dev.substr(0,numb);
        this.setState({
            Inicio:"Eu sou ",
            Restante:text,
            Caracter:numb,
            Name:name,
        });
    };
    componentWillMount() {
        this.setState({
            Restante:"",
            CountDev:13,
            CountNome:15,
            Name:true,
            Back:false,
            contador:0,
        });
        this.setTexto(1,true);

    };
    componentDidMount() {
        window.setInterval(function () {
            if(this.state.Name){
                if(this.state.Restante.length === this.state.CountNome){
                    if(this.state.contador === 5){
                        this.setState({
                            contador:0,
                            Back:true,
                        });
                        this.setTexto(this.state.Restante.length-1,this.state.Name);
                    }
                    else
                        this.setState({
                            contador:this.state.contador+1,
                        });
                }
                else{
                    if(this.state.Back){
                        if(this.state.Restante.length === 0) {
                            this.setState({
                                Back: false,
                            });
                            this.setTexto(1, !this.state.Name);
                        }
                        else
                            this.setTexto(this.state.Restante.length-1,this.state.Name);
                    }
                    else
                        this.setTexto(this.state.Restante.length+1,this.state.Name);
                }
            }
            else{
                if(this.state.Restante.length === this.state.CountDev){
                    if(this.state.contador === 5) {
                        this.setState({
                            contador:0,
                            Back: true,
                        });
                        this.setTexto(this.state.Restante.length - 1, this.state.Name);
                    }
                    else
                        this.setState({
                            contador:this.state.contador+1,
                        });
                }
                else{
                    if(this.state.Back){
                        if(this.state.Restante.length === 0){
                            this.setState({
                                Back:false,
                            });
                            this.setTexto(1,!this.state.Name);
                        }
                        else
                            this.setTexto(this.state.Restante.length-1,this.state.Name);
                    }
                    else{
                        this.setTexto(this.state.Restante.length+1,this.state.Name);
                    }
                }
            }
        }.bind(this), 100);
    }

    render() {

        return(
            <div>
                <Typography align={"left"} variant={"display3"} style={styles.Texto}>
                    {this.state.Inicio}{this.state.Restante}
                </Typography>
            </div>
        );
    }
}
export default TextoAnimado;