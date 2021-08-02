import React, { Component } from 'react';

const Hoverable = (WrappedComponent) => {
    class HoverableComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                hovered: false,
                click: false
            }
        }

        onMouseEnter = () => {

            this.setState({ hovered: true });
        };

        onMouseLeave = () => {
            this.setState({ hovered: false });
        };
        clickHandler = () => {
            const { click } = this.state;
            this.setState({ click: !click })
        }

        render() {
            const { hovered, click } = this.state;
            return (
                <div
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onClick={this.clickHandler}
                >
                    <WrappedComponent
                        hovered={hovered}
                        click={click}
                    />
                </div>
            );
        }

    }

    return HoverableComponent;
};

export default Hoverable;