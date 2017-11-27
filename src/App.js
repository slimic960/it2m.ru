import React, { Component } from 'react';
import SectionFirst from './content/SectionFirst';
import SectionSecond from './content/SectionSecond';
import SectionThird from './content/SectionThird';
import SectionFourth from './content/SectionFourth';
import SectionFifth from './content/SectionFifth';

class App extends Component {
  render() {
    return (
      <div id="content">
        <SectionFirst/>
        <SectionSecond/>
        <SectionFourth/>
        <SectionFifth/>
        <SectionThird/>
        <ContextMenu/>
      </div>
    )
  }
}
export default App;


class ContextMenu extends Component {
    state = {
        visible: false,
    };

    componentDidMount() {
        document.addEventListener('contextmenu', this._handleContextMenu);
        document.addEventListener('click', this._handleClick);
        document.addEventListener('scroll', this._handleScroll);
    };

    componentWillUnmount() {
        document.removeEventListener('contextmenu', this._handleContextMenu);
        document.removeEventListener('click', this._handleClick);
        document.removeEventListener('scroll', this._handleScroll);
    }

    _handleContextMenu = (event) => {
        event.preventDefault();

        this.setState({ visible: true });

        const clickX = event.clientX;
        const clickY = event.clientY;
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        const rootW = this.root.offsetWidth;
        const rootH = this.root.offsetHeight;

        const right = (screenW - clickX) > rootW;
        const left = !right;
        const top = (screenH - clickY) > rootH;
        const bottom = !top;

        if (right) {
            this.root.style.left = `${clickX + 5}px`;
        }

        if (left) {
            this.root.style.left = `${clickX - rootW - 5}px`;
        }

        if (top) {
            this.root.style.top = `${clickY + 5}px`;
        }

        if (bottom) {
            this.root.style.top = `${clickY - rootH - 5}px`;
        }
    };

    _handleClick = (event) => {
        const { visible } = this.state;
        const wasOutside = !(event.target.contains === this.root);

        if (wasOutside && visible) this.setState({ visible: false, });
    };

    _handleScroll = () => {
        const { visible } = this.state;

        if (visible) this.setState({ visible: false, });
    };

    render() {
        const { visible } = this.state;

        return(visible || null) &&
            <div ref={ref => {this.root = ref}} className="contextMenu">
                <a href="#"><div className="contextMenu--option">Главная</div></a>
                <a href="#sectionFifth"><div className="contextMenu--option">Отзывы</div></a>
                <a href="#sectionFourth"><div className="contextMenu--option">О нас</div></a>
                <div className="contextMenu--separator" />
                <a href="#sectionThird"><div className="contextMenu--option">Оставить заявку</div></a>
            </div>
    };
}