import React, { Component } from 'react';
import { Header, Container, ContainerFail } from "./components";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
      isResponseOK: false,
      isResponseFail: false
    };
  }

  handleApiRequest = (e) => {
    if (e.keyCode !== 13) return;

    const userName = e.target.value;
    const hangulPattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const hangulCheck = hangulPattern.test(userName);

    if (hangulCheck) return alert('영문이나 숫자, 영문 + 숫자 조합으로 다시 입력하시기 바랍니다.')

    fetch('https://api.github.com/users/' + userName)
      .then((res) => {
        if (res.ok) {
          res.json().then((res) => {
            this.setState({
              res: res,
              isResponseFail: false,
              isResponseOK: true
            })
          });
        } else {
          this.setState({
            isResponseOK: false,
            isResponseFail: true,
          })
        }
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { isResponseOK, isResponseFail } = this.state;

    return (
      <div id="app">
        <Header onKeyUp={this.handleApiRequest} />
        {
          isResponseOK ? 
            <Container renderRes={this.state.res} /> : null
        }
        {
          isResponseFail ?
            <ContainerFail /> : null
        }
      </div>
    )
  }
}

export default App;
