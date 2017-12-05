import React, {Component} from 'react';
import BottomNavigation from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';

const style = {
    navFootStyle:{
        backgroundColor: 'black',
        paddingBottom: 20,
        paddingTop: 20,
        height: 'auto'
    },
    navFootButtonStyle:{
        margin: 'auto',
        paddingLeft: '15px',
    },
    iconStyle: {
        color: 'rgba(33, 182, 255, 0.99)',
        paddingRight: 5,
        top: 8,
    },
    infoStyle: {
        color: '#333333',
        paddingRight: 35,
        fontWeight: 'bold'
    },
    footerInfoPosition: {
        textAlign: 'center',
        paddingBottom: 15,
    }
};

const recentsIcon = <FontIcon className="material-icons" style={style.iconStyle}>phone</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons" style={style.iconStyle}>location_on</FontIcon>;
const emailIcon = <FontIcon className="material-icons" style={style.iconStyle}>email</FontIcon>;

class Footer extends Component {
    render() {
        return (
            <BottomNavigation id="footer-bar"  style={style.navFootStyle}>
                <div style={style.navFootButtonStyle}>
                <FooterAdress/>
                </div>
            </BottomNavigation>
        );
    }
}
export default Footer;


class FooterAdress extends Component {
    render() {
        return (
            <div style={style.footerInfoPosition}>
                <p style={style.infoStyle}>НАШ ОСНОВНОЙ АДРЕС:</p>
                {/*<span style={style.infoStyle}>{recentsIcon} Телефон: +7 900-112-31-19</span>*/}
                <span style={style.infoStyle}>{favoritesIcon} Адрес: г.Тверь ш.Санкт-Петербургское, 53а </span>
                <span style={style.infoStyle}>{emailIcon} E-mail: it2m@mail.ru</span>
            </div>
        );
    }
}