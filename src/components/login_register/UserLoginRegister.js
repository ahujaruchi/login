import React from "react";
import $ from "jquery";
import LoginComponent from "./login";

class UserLoginRegister extends React.Component {
  state = {
    datas: []
  };

  componentDidMount() {
    const postsPromise = fetch(
      "https://fakerestapi.azurewebsites.net/api/Users"
    );

    postsPromise
      .then(datas => datas.json())
      .then(datas => {
        console.log(datas);
        this.setState({ datas });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleSubmit = (users, passd) => {
    var user = $("." + users).val();
    var pass = $("." + passd).val();
    var findfil = this.state.datas.filter((data, index) => {
      var valueprint =
        data.UserName === user && data.Password === pass ? true : null;
      //console.log(valueprint);
      return valueprint;
    });

    if (findfil.length === 1) {
      window.location.href = "http://www.w3schools.com";
    }
  };

  render() {
    // var dn = this.state.datas.map((data, index) => {
    //   return (
    //     <div className="" key={index}>
    //       {data.UserName}
    //     </div>
    //   );
    // });
    return (
      <div>
        <LoginComponent submit={this.handleSubmit}></LoginComponent>
      </div>
    );
  }
}

export default UserLoginRegister;
