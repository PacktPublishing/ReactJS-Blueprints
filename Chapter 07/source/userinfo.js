module.exports = {
  getInitialState(){
    username: ""
  },

  componentDidMount(){
    let username;
    if(localStorage.getItem("username")){
      username = localStorage.getItem("username");
    }

    if(!username || username === undefined){
      localStorage.setItem("username", require("./tools/username")());
    }

    this.setState({username: username})
  }

}

