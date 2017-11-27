import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

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
    handleChangeName(event) {
        this.setState({valueName: event.target.value});
    }
    handleChangeEmail(event) {
        this.setState({valueEmail: event.target.value});
    }
    handleChangeMessage(event) {
        this.setState({valueMessage: event.target.value});
    }

    handleSubmit(event) {
        this.setState({display_visible: !this.state.display_visible});
        alert('Name: ' + this.state.valueName + ' Email: ' + this.state.valueEmail + ' Message: ' + this.state.valueMessage);
        event.preventDefault();
    }


    render() {
        let bgColor = this.state.display_visible ? "block" : "none";
        let bgColorCircular = this.state.display_visible ? "none" : "block";
        return (
            <form className="orderStyle" style={style.formStyle}>
                <h2 style={style.formStyleH1}>
                    ОСТАВЬТЕ ЗАЯВКУ
                </h2>
                <div className="formField">
                <div className="Circular">
                    <CircularProgress size={80} thickness={5} style={{display: bgColorCircular}}/>
                </div>
                <TextField
                    hintText="Ваше Имя"
                    floatingLabelText="Ваше Имя"
                    style={{display: bgColor}}
                    value={this.state.valueName}
                    onChange={this.handleChangeName}
                /><br />
                <TextField
                    hintText="E-mail"
                    floatingLabelText="E-mail"
                    style={{display: bgColor}}
                    value={this.state.valueEmail}
                    onChange={this.handleChangeEmail}
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
                <RaisedButton className="buttonOrderForm" label="Отправить" primary={true} style={{display: bgColor}} onClick={this.handleSubmit.bind(this)}/>
                </div>
            </form>
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

