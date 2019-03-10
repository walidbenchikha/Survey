import React from 'react';
import Papa from 'papaparse';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
// import { bindActionCreators } from 'redux';
// import NewSurveyView from '../components/NewSurvey';
// import { createSurveyRequest, resetCreateSurvey } from '../actions/surveys';
// import { Path } from '../routes';
import { Button, Modal } from 'react-bootstrap';
import * as api from '../api';
import initSurvey from '../constants/InitSurvey';

class UploadSurvey extends React.Component {
//   componentDidUpdate(prevProps, prevState) {
//     if (this.props.isSuccess) {
//       this.props.resetCreateSurvey();
//       this.props.router.push(Path.editSurvey(this.props.newSurvey));
//     }
//   }

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleUpload = this.handleUpload.bind(this);

        this.state = {
            data: undefined,
            show: false,
            error: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    errorHandler = (fn) => {
        return (ev) => {
            try {
                fn(ev);
            } catch(e) {
                this.setState({
                    error: true,
                });
            }
        }
    }

    upload = (event) => {
        // Assuming only one file
        let file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = this.errorHandler(function(e){
            const csvFile = atob([reader.result][0].split(',')[1]);
            // Error if the file is null
            if (csvFile) {
                const cleanRegex = /[0-9a-zA-Z"':;, \n|\?\#\_\-\!@\/\\.]+/g;
                const cleanCsv = csvFile.match(cleanRegex).join('');
                let data = Papa.parse(cleanCsv).data;
                console.log(data)
                this.setState({ data: data })
            } else {
                this.setState({
                    error: true,
                });
            }
        }.bind(this));
    }

    handleUpload = () => {
        if (this.state.data){
            //api.uploadSurvey(undefined, initSurvey)
            //.then(res => {
            //console.log(res)
            var res = {}
            res.title = "New Survey"
            var questions = [];
            this.state.data.map(function(item,i){
                
                if (item[1]=='mc'){
                    var question = {}
                    question.type = 'MULTIPLECHOICE';
                    question.title = item[0];
                    var options =[];
                    options.push({"content":item[2]});
                    options.push({"content":item[3]});
                    options.push({"content":item[4]});
                    options.push({"content":item[5]});
                    question.options=options;
                    questions.push(question);
                } else if (item[1]=='oe'){
                    var question = {}
                    question.type = 'OPENENDED';
                    question.title = item[0];
                    questions.push(question);
                }
                
            })
            res.questions = questions;
            api.uploadSurvey(res);
            //})
            //.catch(err => console.log(err));
            
            
            this.setState({ show: false });
        }
        
    }

    render() {
        return (
            <div>
            <Button variant="primary" onClick={this.handleShow}>
                Upload Survey
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type='file' label='Upload' accept='.csv'
                    ref={ (ref) => { this.fileChangedHandler = ref }}
                    style={{ display: 'none'}}
                    onChange={this.upload}
                />
                <Button 
                    color="success" outline
                    onClick={e => this.fileChangedHandler.click()}
                >
                    From computer
                </Button>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={this.handleUpload}>
                Upload File
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
        );
    }
}

export default UploadSurvey;