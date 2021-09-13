import React, { Component } from 'react'
import axios from './MyAxios'
import '../css/Home.css'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pdf from './MyPdf'
import axiosInstance from './MyAxios';
import Axios from 'axios';


function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expression: '',
            filenames: [],
            isSearch: false,
            currPDF: '',
            currExpression: '',
            isLoaded: false,
            page:1,
            pdfPerpage:5,
            keyList:[],
            currentFilenames:[],
            lastInd:5
        }

    }
    cleanExpression = (exp) => {
        exp = exp.replace(/AND/g, "&");
        exp = exp.replace(/OR/g, "|");

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
        this.setState({
            page:1
        })
    }

    useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
    }));

    selectButton = (filename) => {
        console.log(filename)
        this.setState({
            currPDF: filename
        })
        
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            isSearch: true
        });
        let currExp = this.state.expression;
        this.setState({
            currExpression: currExp
        })
        this.setState({
            isLoaded: false
        })
       
        axios.defaults.withCredentials=true;
        axios.get('http://103.39.135.158/api/search/' + this.cleanExpression(this.state.expression)+"/")
            .then((res) => {
                console.log(res)
                this.setState(
                    {
                        filenames: []
                    }
                )
                var keys = Object.keys(res.data.pdf_list);
                var urls = Object.values(res.data.pdf_list);
                
                this.setState({
                    keyList:res.data.keys,
                })
                for (var i = 0; i < keys.length; i++) {
                    var key = [keys[i],urls[i]];
                    this.setState({
                        filenames: [...this.state.filenames, key],
                        expression: currExp
                        
                    });
                }
               
                if (this.state.filenames.length > 0) {
                    this.setState({
                        currPDF: this.state.filenames[0][1]
                    })
                }

                this.setState({
                    isLoaded: true
                })
                var tp = []
                for(var i=0;i<Math.min(this.state.pdfPerpage,this.state.filenames.length);i++){
                    tp.push(this.state.filenames[i][1])
                }
                this.setState({
                    currentFilenames:tp,
                    lastInd:Math.min(this.state.pdfPerpage,this.state.filenames.length),
                    
                })
                console.log(this.state.currentFilenames)
            })
    }
    prevPage=()=>{
        var tp = []
        var st = Math.max(0,this.state.lastInd - (this.state.pdfPerpage * 2))
        console.log(this.state.lastInd,this.state.pdfPerpage,st)
        for (var i=st;i < Math.min(st + this.state.pdfPerpage,this.state.filenames.length);i++){
            tp.push(this.state.filenames[i][1])
        }
        this.setState({
            currentFilenames:tp,
            lastInd:Math.min(st + this.state.pdfPerpage,this.state.filenames.length),
            page:this.state.page-1,
            currPDF:this.state.filenames[st][1]
        })
    }
    nextPage=()=>{
        var tp = []
        var st = this.state.page * this.state.pdfPerpage
        console.log(st)
        for(var i=st;i<Math.min(st + this.state.pdfPerpage, this.state.filenames.length);i++){
            tp.push(this.state.filenames[i][1])
        }
        this.setState({
            currentFilenames:tp,
            lastInd:Math.min(st + this.state.pdfPerpage,this.state.filenames.length),
            page:this.state.page+1,
            currPDF:this.state.filenames[st][1]
        })
    }
 
    render() {
        return (
            <div className="homepage center" style={{ height: "100vh", paddingBottom: "100px" }}>
                {
                    !this.state.isSearch &&

                    <div className="container" style={{ width: "70%", position: "relative", top: "30%" }}>
                        <h1 style={{ fontSize: "3em", color: "white" }}>COURT CASE JOURNAL</h1>
                        <br></br>
                        <div class="input-group md-form form-sm form-2 pl-0">
                            <form class="input-group md-form form-sm form-2 pl-0" onSubmit={this.handleSubmit}>
                                <input class="form-control my-0 py-1 lime-border" type="text" placeholder="Search" name="expression" aria-label="Search" onChange={this.handleForm} />
                                <button type="submit" style={{ width: "100px", height: "34px", backgroundColor: "#574F22" }}><img src="/static/icons/search.png" style={{ position: "relative", bottom: "15%", marginTop: "0px" }} /></button>
                            </form>
                        </div>
                    </div>

                }
                {
                    this.state.isSearch &&
                    <div style={{ height: "100%" }}>
                        <div className="container" style={{ width: "50%", position: "relative", top: "0%" }}>
                            <h1 style={{ fontSize: "2em", color: "white" }}>COURT CASE JOURNAL</h1>
                            <br></br>
                            <div class="input-group md-form form-sm form-2 pl-0">
                                <form class="input-group md-form form-sm form-2 pl-0" onSubmit={this.handleSubmit}>
                                    <input class="form-control my-0 py-1 lime-border" type="text" placeholder="Search" name="expression" aria-label="Search" onChange={this.handleForm} />
                                    <button type="submit" style={{ width: "50px", height: "34px", backgroundColor: "#574F22" }}><img src="/static/icons/search.png" style={{ position: "relative", bottom: "10%", marginTop: "0px" }} /></button>
                                </form>
                            </div>
                            <br></br><br></br>
                        </div>
                        {
                            !this.state.isLoaded ?
                                <div className>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <h4 style={{ color: "white" }}>Search: {this.state.currExpression}</h4>
                                    <br></br>
                                    <div className={this.useStyles.root}>
                                        <CircularProgress color='primary' size='5rem' thickness='3.6' />
                                    </div>
                                </div>
                                :

                                this.state.currentFilenames.length > 0 ?
                                    <div style={{ alignContent: "center", backgroundColor: "white", width: "100%", height: "100%" }} className="center">
                                        <br></br>
                                        <h4 style={{ color: "black" }}>Search: {this.state.currExpression}</h4>
                                        <br></br>
                                        <div style={{ height: "80%" }}>
                                            <div style={{ height: "100%", display: "flex", justifyContent: "space-around", marginLeft: "50px", marginRight: "50px" }}>
                                                <div style={{flexDirection:"column"}}>
                                                <div className="card" style={{width:"250%", height: "80%", overflow: "scroll", overflowX: "hidden", alignContent: "center", border: "5px solid white", background: "#FFFFFF" }}>
                                                    <h5 class="card-title">Most Relevant Files</h5>
                                                    <ul class="list-group list-group-flush">
                                                        {this.state.currentFilenames.map(file =>
                                                            <li class="list-group-item">
                                                                {/* <button className="search-card" value={file} onClick={this.selectButton}>
                                                                    {file}
                                                                </button> */}
                                                                <div className="search-card" value={file[0]} onClick={()=>this.selectButton(file)}>
                                                                    <div className="file-head">{file[0]}</div>
                                                                    <div className="file-description">dfad</div>
                                                                </div>
                                                            </li>)}
                                                    </ul>
                                                    
                                                </div>
                                                    <div className="pagination">
                                                                    
                                                    {this.state.lastInd - this.state.pdfPerpage > 0 ? <div onClick={this.prevPage}>&laquo;</div> : " "}
                                                    <div className="active">{this.state.page}</div>
                                                    {this.state.lastInd < this.state.filenames.length ? <div onClick={this.nextPage}>&raquo;</div> : " "}
                                                    </div>  
                                                </div>
                                                <div style={{flex:0.5, width: "40%", height: "100%" ,float: "right", alignContent: "center", border: "5px solid white", background: "#FFFFFF" }}>
                                                    <Pdf fileUrl={this.state.currPDF[1]} keys={this.state.keyList}></Pdf>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <center>
                                            <br></br><br></br>
                                            <h4 style={{ color: "white" }}>Search: {this.state.currExpression}</h4>
                                            <br></br>
                                            <h4 style={{ color: "white" }}>Sorry! No results found</h4>
                                        </center>
                                    </div>
                        }
                    </div>
                }
            </div>
        );
    }

}

export default Home;