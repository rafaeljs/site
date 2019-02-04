import React, { Component } from 'react';
import Cabecalho from './Cabecalho/Cabecalho';
import Sobre from './Sobre/Sobre';
import ReactPageScroller from "react-page-scroller";
import ButtonSelect from '@material-ui/icons/RadioButtonChecked';
import ButtonDeselect from '@material-ui/icons/RadioButtonUnchecked';

import './App.css';

const styles = {
    fixado: {
        top:'30vh',
        right:'20px',
        zIndex: 2,
        position: 'fixed',
    },
    cor: {
       margin:10,
       color:'black',
    },
    corCab:{
        margin: 10,
        color:'white',
    }

};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
    }
    goToPage = (number) => {
        this.reactPageScroller.goToPage(number);
    };
    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };
  render() {
      var cor = this.state.currentPage === 1? styles.corCab:styles.cor;
      var botaoCab = this.state.currentPage === 1?  <ButtonSelect style={cor} onClick={() => this.goToPage(0)}/>:
          <ButtonDeselect style={cor} onClick={() => this.goToPage(0)}/>;
      var botaoSob = this.state.currentPage === 2?  <ButtonSelect style={cor} onClick={() => this.goToPage(1)}/>:
          <ButtonDeselect style={cor} onClick={() => this.goToPage(1)}/>;
    return (
      <div className="App">
          <ReactPageScroller ref={c => this.reactPageScroller = c} pageOnChange={this.pageOnChange}>
              <Cabecalho/>
              <Sobre/>
          </ReactPageScroller>
          <div style={styles.fixado}>
              {botaoCab}
              <br/>
              {botaoSob}
              <br/>
          </div>

      </div>
    );
  }
}

export default App;
