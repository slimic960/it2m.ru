import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

const isMobile = window.innerWidth <= 1024;
const logo = require('../img/logo.png');
const style = {
    navStyle:{
        backgroundColor: 'none',
    },
    paper: {
        float: 'left',
        margin: '16px 32px 16px 0',
    },
    rightIcon: {
        textAlign: 'center',
        lineHeight: '24px',
    },
    navFootButtonStyle: {
        margin: 'auto',
        color: 'white',
    },
    logoImgMobile:{
        marginTop: 8
    }
};

const recentsIcon = <FontIcon className="material-icons">home</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">event_note</FontIcon>;
const nearbyIcon = <FontIcon className="material-icons">backup</FontIcon>;
const faceIcon = <FontIcon className="material-icons">face</FontIcon>;
const assignmentIcon = <FontIcon className="material-icons">assignment_turned_in</FontIcon>;

const FlatButtonExampleComplex = () => (
    <div style={style.navFootButtonStyle}>
        <FlatButton
            href="#"
            label="Начало"
            labelPosition="after"
            primary={true}
            style={style.navFootButtonStyle}
            icon={recentsIcon}
        />
        <FlatButton
            href="#sectionFifth"
            label="Отзывы"
            labelPosition="after"
            primary={true}
            style={style.navFootButtonStyle}
            icon={favoritesIcon}
        />
        <FlatButton
            href="#sectionFourth"
            label="О нас"
            labelPosition="after"
            primary={true}
            style={style.navFootButtonStyle}
            icon={faceIcon}
        />
        <FlatButton
            href="#sectionThird"
            label="Оставить заявку"
            labelPosition="after"
            primary={true}
            style={style.navFootButtonStyle}
            icon={assignmentIcon}
        />
    </div>
);

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'menuOpen': false,
        }
    }
    openMenu() {
        let newState = !this.state.menuOpen;
        this.setState({
            'menuOpen': newState
        });
    }

    render() {
        let logoImg =  <span><img className="logo" src={logo}/><span className="logoText">IT</span><span className="logoTextNext">2M</span></span>;
        let logoImgMobile =  <img className="logo" src={logo} style={style.logoImgMobile}/>;
        if (isMobile) {
            return (
                <AppBar id="nav-bars" onLeftIconButtonTouchTap={this.openMenu.bind(this)} style={style.navStyle}>
                    {this.state.menuOpen ? <MenuExampleIcons /> : null}
                    {logoImgMobile}
                </AppBar>
            );
        } else {
            return (
                <AppBar id="nav-bars" iconElementLeft={logoImg} style={style.navStyle}>
                    <FlatButtonExampleComplex />
                </AppBar>
            );
        }
    }
}

export default Header;

const MenuExampleIcons = () => (
    <div id="navMenu">
        <Paper style={style.paper}>
            <Menu>
                <MenuItem primaryText="Начало" href="#" leftIcon={recentsIcon} />
                <MenuItem primaryText="Отзывы" href="#sectionFifth" leftIcon={favoritesIcon} />
                <MenuItem primaryText="О нас"  href="#sectionFourth" leftIcon={faceIcon} />
                <Divider />
                <MenuItem primaryText="Оставить заявку" href="#sectionThird" leftIcon={assignmentIcon} />
            </Menu>
        </Paper>
    </div>
);
