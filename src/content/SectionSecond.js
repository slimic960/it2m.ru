import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

const imgHtml = require('../img/html-icon.png');
const imgCss = require('../img/css-icon.png');
const imgPhp = require('../img/php-icon.png');
const imgJs = require('../img/js-icon.png');
const favoritesIcon = <FontIcon className="material-icons"/>;
const style = {
    languageStyle: {
        width: '80px',
        height: '80px',
        marginLeft: '-15px',
        paddingRight: '100px'
    }
};

class SectionSecond extends Component {
    render() {
        return (
            <div id="sectionSecond">
                    <div id="sectionSecondH1">
                        <div className="top-border leftFifthBorder"/>
                        <div className="top-border rightFifthBorder"/>
                        <h1>РАЗРАБОТКА ВЕБ-ПРИЛОЖЕНИЙ НА ЗАКАЗ</h1>
                        <SectionSecondIcon/>
                     </div>
            </div>
        );
    }
}
export default SectionSecond;


class SectionSecondIcon extends Component {
    render() {
        return (
            <div>
                <IconButton
                    className="languesStyle"
                    tooltip="HTML"
                    tooltipPosition="top-center"
                    style={style.languageStyle}
                ><img src={imgHtml}/>
                </IconButton>
                <IconButton
                    className="languesStyle"
                    tooltip="CSS"
                    tooltipPosition="top-center"
                    style={style.languageStyle}
                ><img src={imgCss}/>
                </IconButton>
                <IconButton
                    className="languesStyle"
                    tooltip="PHP"
                    tooltipPosition="top-left"
                    style={style.languageStyle}
                ><img src={imgPhp}/>
                </IconButton>
                <IconButton
                    className="languesStyle"
                    tooltip="JS"
                    tooltipPosition="top-left"
                    style={style.languageStyle}
                ><img src={imgJs}/>
                </IconButton>
            </div>
        );
    }
}