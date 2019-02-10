import React, { Component } from 'react';
import Cabecalho from './Cabecalho/Cabecalho';
import Sobre from './Sobre/Sobre';
import Habilidades from './Habilidades/Habilidades';
import Educacao from './Educacao/Educacao';
import Experiencias from './Experiencias/Experiencias';
import ReactPageScroller from "react-page-scroller";
import ButtonSelect from '@material-ui/icons/RadioButtonChecked';
import ButtonDeselect from '@material-ui/icons/RadioButtonUnchecked';
import Tooltip from '@material-ui/core/Tooltip';

import './App.css';

const styles = {
    fixado: {
        top:'30vh',
        right:'20px',
        zIndex: 2,
        position: 'fixed',
    },
    cor: {
       color:'black',
    },
    corCab:{
        color:'white',
    },
    hover:{
        margin:2,
        fontSize:30,
    },
    teste:{
        margin:5,
        fontSize:24,
    },
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1,  hover: false};
    }
    goToPage = (number) => {
        this.reactPageScroller.goToPage(number);
    };
    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };
    hoverOn = (numb) => {
        this.setState({ hover: true,numb:numb });
    };
    hoverOff = () =>{
        this.setState({ hover: false });
    };
  render() {
      var cor = this.state.currentPage === 1?styles.corCab:styles.cor;
      var botaoCab = this.state.currentPage === 1?  <ButtonSelect onMouseEnter={() => this.hoverOn(1)}
                                                                  onMouseLeave={this.hoverOff}
                                                                  style={Object.assign({},this.state.hover && this.state.numb === 1
                                                                      ? styles.hover : styles.teste, cor)} onClick={() => this.goToPage(0)}/>:
          <ButtonDeselect onMouseEnter={() => this.hoverOn(1)}
                          onMouseLeave={this.hoverOff}
                          style={Object.assign({},this.state.hover && this.state.numb === 1
                              ? styles.hover : styles.teste, cor)}  onClick={() => this.goToPage(0)}/>;
      var botaoSob = this.state.currentPage === 2?  <ButtonSelect onMouseEnter={() => this.hoverOn(2)}
                                                                  onMouseLeave={this.hoverOff}
                                                                  style={Object.assign({},this.state.hover && this.state.numb === 2 ?
                                                                      styles.hover : styles.teste, cor)} onClick={() => this.goToPage(1)}/>:
          <ButtonDeselect onMouseEnter={() => this.hoverOn(2)}
                          onMouseLeave={this.hoverOff}
                          style={Object.assign({},this.state.hover && this.state.numb === 2 ?
                              styles.hover : styles.teste, cor)}  onClick={() => this.goToPage(1)}/>;
      var botaoHab = this.state.currentPage === 3?  <ButtonSelect onMouseEnter={() => this.hoverOn(3)}
                                                                  onMouseLeave={this.hoverOff}
                                                                  style={Object.assign({},this.state.hover && this.state.numb === 3 ?
                                                                      styles.hover : styles.teste, cor)} onClick={() => this.goToPage(2)}/>:
          <ButtonDeselect onMouseEnter={() => this.hoverOn(3)}
                          onMouseLeave={this.hoverOff}
                          style={Object.assign({},this.state.hover && this.state.numb === 3 ?
                              styles.hover : styles.teste, cor)}  onClick={() => this.goToPage(2)}/>;

      var botaoEdu = this.state.currentPage === 4?  <ButtonSelect onMouseEnter={() => this.hoverOn(4)}
                                                                  onMouseLeave={this.hoverOff}
                                                                  style={Object.assign({},this.state.hover && this.state.numb === 4 ?
                                                                      styles.hover : styles.teste, cor)} onClick={() => this.goToPage(3)}/>:
          <ButtonDeselect onMouseEnter={() => this.hoverOn(4)}
                          onMouseLeave={this.hoverOff}
                          style={Object.assign({},this.state.hover && this.state.numb === 4 ?
                              styles.hover : styles.teste, cor)}  onClick={() => this.goToPage(3)}/>;

      var botaoExp = this.state.currentPage === 5?  <ButtonSelect onMouseEnter={() => this.hoverOn(5)}
                                                                  onMouseLeave={this.hoverOff}
                                                                  style={Object.assign({},this.state.hover && this.state.numb === 5 ?
                                                                      styles.hover : styles.teste, cor)} onClick={() => this.goToPage(4)}/>:
          <ButtonDeselect onMouseEnter={() => this.hoverOn(5)}
                          onMouseLeave={this.hoverOff}
                          style={Object.assign({},this.state.hover && this.state.numb === 5 ?
                              styles.hover : styles.teste, cor)}  onClick={() => this.goToPage(4)}/>;
    return (
      <div className="App">
          <ReactPageScroller ref={c => this.reactPageScroller = c} pageOnChange={this.pageOnChange}>
              <Cabecalho/>
              <Sobre/>
              <Habilidades/>
              <Educacao/>
              <Experiencias/>
          </ReactPageScroller>
          <div style={styles.fixado}>
              <Tooltip title={"Saudações"} placement="left">
                  {botaoCab}
              </Tooltip>
              <br/>
              <Tooltip title={"Sobre"} placement="left">
                  {botaoSob}
              </Tooltip>
              <br/>
              <Tooltip title={"Habilidades"} placement="left">
                  {botaoHab}
              </Tooltip>
              <br/>
              <Tooltip title={"Educação"} placement="left">
                  {botaoEdu}
              </Tooltip>
              <br/>
              <Tooltip title={"Experiencia"} placement="left">
                  {botaoExp}
              </Tooltip>
              <br/>
          </div>

      </div>
    );
  }
}

export default App;
