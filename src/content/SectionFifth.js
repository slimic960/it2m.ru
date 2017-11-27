import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import FlatButton from 'material-ui/FlatButton';

const imgReviewOne = require('../img/review1.jpg');
const imgReviewTwo = require('../img/review2.png');
const imgReviewThree = require('../img/review3.jpg');
const isMobile = window.innerWidth <= 700;

const style = {
    avatar:{
        margin: 5,
        boxShadow: '1px 1px 2px 0px black',
        zIndex: 5,
        top: -8,
        left: 14
    },
    navFootButtonStyle: {
        margin: 'auto',
        color: 'white',
        minWidth: 36
    }
};
const playIcon = <FontIcon style={style.buttomRightHeader} className="material-icons">play_arrow</FontIcon>;
const pauseIcon = <FontIcon style={style.buttomRightHeader} className="material-icons">pause</FontIcon>;

class SectionSecond extends Component {
    render() {
        return (
            <div id="sectionFifth" className="zig-zag-bottom zig-zag-top">
                <div id="sectionFifthdH1">
                    <div className="top-border leftFifthBorder"/>
                    <div className="top-border rightFifthBorder"/>
                    <h1>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h1>
                </div>
                <div className="blockReview blockReviewPseudo">
                    <Slider/>
                </div>
            </div>
        );
    }
}
export default SectionSecond;


const AvatarSimpleOne = () => (
    <List>
        <ListItem style={style.listStyle}
            disabled={true}
            leftAvatar={
                <Avatar
                    src={imgReviewOne}
                    size={90}
                    style={style.avatar}
                    className="avatarReview"
                />
            }
        >
            <p>"Компетентность, профессионализм и оперативность позволили в сжатые сроки успешно решить поставленную задачу. В нашем проекте команда компании «IT Дабл М»
                подтвердила свою надежность, энтузиазм, а также внимательное и добросовестное отношение к поставленным задачам".</p>
        </ListItem>
    </List>
);


const AvatarSimpleTwo = () => (
    <List>
        <ListItem style={style.listStyle}
                  disabled={true}
                  leftAvatar={
                      <Avatar
                          src={imgReviewTwo}
                          size={90}
                          style={style.avatar}
                          className="avatarReview"
                      />
                  }
        >
            <p>"Ваш профессиональный подход к разработке и реализации каждого проекта заслуживает самых высоких отзывов. «IT Дабл М» зарекомендовало себя как надежный партнер, готовый работать в сложных условиях и выполнять значительные объемы на качественно высоком уровне."</p>
        </ListItem>
    </List>
);

const AvatarSimpleThree = () => (
    <List>
        <ListItem style={style.listStyle}
                  disabled={true}
                  leftAvatar={
                      <Avatar
                          src={imgReviewThree}
                          size={90}
                          style={style.avatar}
                          className="avatarReview"
                      />
                  }
        >
            <p>"Компания «IT Дабл М» — это хорошо организованная и клиентоориентированная команда профессионалов. Они находят индивидуальный подход к каждому проекту и максимально быстро формируют под него команду."</p>
        </ListItem>
    </List>
);

const FlatButtonPlay = () => (
    <div style={style.navFootButtonStyle}>
        <FlatButton
            labelPosition="after"
            primary={true}
            style={style.navFootButtonStyle}
            icon={playIcon}
        />
    </div>
);

const FlatButtonPause = () => (
    <div style={style.navFootButtonStyle}>
        <FlatButton
            labelPosition="after"
            primary={true}
            style={style.navFootButtonStyle}
            icon={pauseIcon}
        />
    </div>
);


class Slider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            slides: [
                {
                    textSlide: <AvatarSimpleOne/>,
                },
                {
                    textSlide: <AvatarSimpleTwo/>,
                },
                {
                    textSlide: <AvatarSimpleThree/>,
                }
            ],
            autoplay: false,
            active: 0
        };

        this.state.max = this.state.slides.length;
        this.timer = this.timer.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(this.timer, 6000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    timer() {

        if (this.state.autoplay === true) {

            if (this.state.active === this.state.max - 1) {
                this.state.active = 0;
            } else {
                this.state.active++;
            }

            this.setState({
                active: this.state.active
            });
        }
    }

    toggleAutoPlay(){

        this.setState({
            autoplay: !this.state.autoplay
        });
    }

    nextOne(){

        if (this.state.active < this.state.max - 1) {

            this.setState({
                active: this.state.active + 1
            });
        }
    }

    prevOne(){
        if (this.state.active > 0) {

            this.setState({
                active: this.state.active - 1
            });
        }
    }

    dots(index, event){

        this.setState({
            active: index
        });
    }

    isActive(value){
        if(this.state.active === value){
            return "active";
        }
    }

    render(){

        let transition = this.state.active * - 100;
        let style = {
            width: ( this.state.slides.length * 100 ) + 'vw',
            transform: 'translateX(' + transition + 'vw)'
        }

        let slides = this.state.slides.map( (item, index) => (
                <div className="each"
                     key={index}>{item.textSlide}</div>
            )
        );


        let dots = this.state.slides.map( (item, index) => (
                <li className={this.isActive(index) + " dots" }
                    key={index}
                    ref="dots"
                    onClick={this.dots.bind(this, index)}>
                    <a>&#9679;</a>
                </li>
            )
        );

        let playStop;

        if(this.state.autoplay){

            playStop =  <FlatButtonPlay/>;
        }else {
            playStop =  <FlatButtonPause/>;
        }

        return (
            <div>

                <div className="slider">

                    <div className="wrapper" style={style}>
                        {slides}
                    </div>

                    <button className="arrows prev" ref="prev" onClick={this.prevOne.bind(this)} >
                        <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </button>

                    <button className="arrows next" ref="next" onClick={this.nextOne.bind(this)} >
                        <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </button>

                    <ul className="dots_container">
                        {dots}
                    </ul>

                    <a className="toggle-play" onClick={this.toggleAutoPlay.bind(this)}>
                        {playStop}
                    </a>

                </div>

            </div>
        );
    }
}
