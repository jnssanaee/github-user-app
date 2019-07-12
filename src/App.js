import React, { Component } from 'react';
import { Header, Container } from "./components";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: []
    };
  }

  hangulPattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  tableTemplate = ({ login, location, bio, url }) => {
    return `
        <table class="table">
            <thead>
            <tr>
                <th scope="col">User</th>
                <th scope="col">Location</th>
                <th scope="col">Bio</th>
                <th scope="col">Github</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>${login}</td>
                <td>${location}</td>
                <td>${bio}</td>
                <td>${url}</td>
            </tr>
            </tbody>
        </table> 
    `;
  };
  
  renderTable = (res) => {
    this.tableTemplate(res);
  };

  // emptyData = () => {
  //   const hangulCheck = hangulPattern.test(input.value);
  //   if (hangulCheck)
  //     return (areaJson.innerHTML =
  //       '<div class="arerNot">한글프로필은 존재하지 않습니다. <br />영문이나 숫자, 영문 + 숫자 조합으로 다시 입력하시기 바랍니다.</div>');
  //   areaJson.innerHTML = '<div class="arerNot">User Profile not found.</div>';
  // };

  handleApiRequest = (e) => {
    if (e.keyCode !== 13) return;

    const userName = e.target.value;
    fetch('https://api.github.com/users/' + userName)
      .then((res) => {
        if (res.ok) {
          res.json().then((res) => {
            this.setState({
              res: res
            })
            this.renderTable(res);
          });
        } else {
          //this.emptyData();
        }
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div id="app">
        <Header onKeyUp={this.handleApiRequest} />
        <Container res={this.state.res} />
      </div>
    )
  }
}

export default App;
