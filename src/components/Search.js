/**
Not in use
*/

import React, { Component } from 'react'
//import '../css/postblog.css'
import Accordion from 'react-bootstrap/Accordion'
import axiosInstance from './MyAxios';

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      expression: '',
      filenames: []
    }

  }

  cleanExpression = (exp) => {
    exp = exp.replace("AND", "&");
    exp = exp.replace("OR", "|");

    var flag = true;
    var i = 0;

    for (i = 0; i < exp.length; i++) {
      if (exp[i] == '"') {
        if (flag) {
          exp = setCharAt(exp, i, '(')
        } else {
          exp = setCharAt(exp, i, ')')
        }
      } else if (exp[i] == '&' || exp[i] == '|') {
        flag = true;
      } else {
        flag = false;
      }
    }
    exp = '(' + exp + ')';

    return exp;
  }

  handleForm = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      console.log(this.state.expression);
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState((prevState) => ({
      expression: this.cleanExpression(prevState.expression),
    }));

    console.log(this.state.expression);

    axiosInstance.get('http://localhost:8000/search/' + this.state.expression)
      .then((res) => {
        this.setState(
          {
            filenames: []
          }
        )
        var keys = res.data.pdf_list;
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i][0];
          console.log(key)
          this.setState({
            filenames: [...this.state.filenames, key]
          });
        }

      })

    //event.target.reset()
  }



  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">

            <input type="text" className="form-control" id="inputExpression" name="expression" onChange={this.handleForm} placeholder="Enter Expression" />
          </div>

          <br></br>

          <center>
            <button type="submit" className="btn btn-primary" >Submit</button>
          </center>
          <br></br>
          <br></br>
          <ul>
            {this.state.filenames.map(file => <li>{file}</li>)}
          </ul>

        </form>
      </div>
    );
  }

}

export default Search;