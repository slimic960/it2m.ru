import React, {Component} from 'react';
import {Parallax, Background}  from 'react-parallax';

class SectionFourth extends Component {
    constructor(props) {
        super(props);
        this.init();
    }
    init() {
        this.state = {
            mousePos: {x: 0, y: 0}
        }
    }
    mouseMove(e) {
        this.setState({
            mousePos: {
                x: e.pageX - (window.innerWidth / 2),
                y: e.pageY - (window.innerHeight / 2)
            }
        })
    }

    render() {
        let offset = {
            transform: `translate3d( ${this.state.mousePos.x / -100}px, ${this.state.mousePos.y / -100}px, 0 )`,
            width: `${window.innerWidth}px`
        };
        return (
            <div id="sectionFourth" onMouseMove={this.mouseMove.bind(this)}>
                <Parallax strength={300}>
                    <Background>
                        <img id="sectionFourthImg" style={offset}/>
                    </Background>
                    <div id="sectionFourth">
                        <div className="aboutUs">
                                <div className="drop-shadow curled">
                                <h1>Почему выбирают нас?</h1>
                                </div>
                            <ul>
                                <li>
                                    <div><h3><span>Гарантируем прозрачность</span></h3></div>
                                    <div>Наши системы позволяют заказчику заказать приложение и увидеть степень готовности проекта в любой момент времени.</div>
                                </li>
                                <li>
                                    <div><h3><span>Ориентированы на результат</span></h3></div>
                                    <div>Взятые на себя проектные обязательства мы выполним вне зависимости от внешних факторов.
                                        Бизнес заказчика — главный приоритет для нас! Стоимость создания приложения должна оплачиваться прибылью!</div>
                                </li>
                                <li>
                                    <div><h3><span>Адаптируемся к изменениям</span></h3></div>
                                    <div>Работа с заказчиком корректируется, исходя из требований.
                                        Мы применяем передовые методологии разработки, обеспечивая результат по срокам, стоимости и объему работ.
                                        Поэтому в рейтинге разработчиков приложений мы поднимаемся все выше.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Parallax>
            </div>
        );
    }
}
export default SectionFourth;
