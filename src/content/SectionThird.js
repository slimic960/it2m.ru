import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator} from 'react-material-ui-form-validator';
import axios, { get } from "axios";

const style = {
    formStyle:{
        backgroundColor: 'white',
        width: '350px',
        height: 'auto',
        margin: '30px auto',
        borderRadius: '5px',
        boxShadow: 'inset 1px 1px 3px -1px #757575'
    },
    formStyleH1:{
        paddingTop: '25px',
    },
    ButtonForm:{
        marginTop: '15px',
        marginBottom: '15px',
    },
    circleForBackground:{
        width: '100%',
        height: '100%',
        position: 'absolute',
    }
};




class SectionThird extends Component {
    render() {
        return (
            <div id="sectionThird">
                    <div id="order-form">
                    <Form/>
                    </div>
            </div>
        );
    }
}
export default SectionThird;

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display_visible: true,
            valueName: '',
            valueEmail: '',
            valueMessage: ''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        ValidatorForm.addValidationRule('isNameMatch', (value) => {
            if (value !== this.state.valueName) {
                alert(value);
                return false;
            }
            return true;
        });
    }

    handleChangeName(event) {
        this.setState({valueName: event.target.value.substr(0, 28)});
    }
    handleChangeEmail(event) {
        this.setState({valueEmail: event.target.value.substr(0, 50)});
    }
    handleChangeMessage(event) {
        this.setState({valueMessage: event.target.value.substr(0, 300)});
    }

    handleSubmit(event) {
        let config = {
            headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'}
        };

        axios.get('http://it2m.ru:3001/', {
            params: {
                tName: this.state.valueName,
                eMail: this.state.valueEmail,
                message: this.state.valueMessage
            },
        }, config)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.setState({display_visible: !this.state.display_visible});
        setTimeout(function () {
            this.setState({display_visible: !this.state.display_visible});
        }.bind(this), 4000);
        this.setState({
            valueName: '',
            valueEmail: '',
            valueMessage: ''
        });
        event.preventDefault();
    }


    render() {
        const { email } = this.state.valueEmail;
        const { textName } = this.state.valueName;
        let bgColor = this.state.display_visible ? "block" : "none";
        let bgColorCircular = this.state.display_visible ? "none" : "block";
        return (
            <ValidatorForm
                ref="form"
                className="orderStyle"
                onSubmit={this.handleSubmit.bind(this)}
                style={style.formStyle}
                onError={errors => console.log(errors)}>

                    <h2 style={style.formStyleH1}>
                        ОСТАВЬТЕ ЗАЯВКУ
                    </h2>
                    <div className="formField">
                    <div className="Circular">
                        <CircularProgress size={80} thickness={5} style={{display: bgColorCircular}}/>
                    </div>

                    <TextValidator
                        floatingLabelText="Ваше Имя"
                        onChange={this.handleChangeName}
                        name="textName"
                        value={this.state.valueName}
                        style={{display: bgColor}}
                        validators={['isNameMatch','required']}
                        errorMessages={['Отсутствует имя', 'Обязательное поле']}
                    /><br />
                    <TextValidator
                        floatingLabelText="Email"
                        onChange={this.handleChangeEmail}
                        name="email"
                        value={this.state.valueEmail}
                        style={{display: bgColor}}
                        validators={['required', 'isEmail']}
                        errorMessages={['Обязательное поле', 'Некорректный Email']}
                    /><br />
                    <TextField
                        hintText="Сообщение"
                        multiLine={true}
                        rows={2}
                        rowsMax={100}
                        style={{display: bgColor}}
                        value={this.state.valueMessage}
                        onChange={this.handleChangeMessage}
                    /><br />
                    <RaisedButton type="submit" className="buttonOrderForm" label="Отправить" primary={true} style={{display: bgColor}}/>

                    </div>

            </ValidatorForm>
        )
    }
}

class Drawing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: []
        };
    }

    move(evt) {
        if (evt.target.tagName.toLowerCase() === 'svg') {
            evt.preventDefault();
            let svgPos = this.refs.svg.getBoundingClientRect();
            let x = evt.clientX,
                y = evt.clientY;
            if (evt.type==='touchmove') {
                x = evt.touches[0].pageX,
                    y = evt.touches[0].pageY;
            }
            x = x - svgPos.left;
            y = y - svgPos.top;
            let points = this.state.points;
            if (points.length > 50) {
                points.shift();
            }
            points.push({
                x: x,
                y: y
            });
            this.setState(points);
        }
    }
    render() {
        let points = <circle cx="100" cy="100" r="3" />;
        if (this.state.points.length > 0) {
            let allPoints = this.state.points,
                d = '';
            points = allPoints.map(function(point, i) {
                let last = (i === allPoints.length - 1);
                let first = (i === 0);
                if (first) {
                    d += 'M ';
                }
                d += ' ' + point.x + ' ' + point.y;
                if (first) {
                    d += ' L ';
                }
                if (last) {
                    return <path stroke="white" fill="none" d={d} />
                };
            });

        }

        return (
            <div onMouseMove={this.move.bind(this)} onTouchMove={this.move.bind(this)} style={style.circleForBackground}>
                <svg ref="svg" width="100%" height="100%">
                    <defs>
                        <marker id="arrow" markerWidth="4" markerHeight="20" refX="0" refY="4" orient="auto"  viewBox="0 0 50 50">
                            <path d="M0,0 L0,6 L9,3 z" fill="#f00" />
                        </marker>
                    </defs>
                    {points}
                </svg>
            </div>
        )
    }
}

