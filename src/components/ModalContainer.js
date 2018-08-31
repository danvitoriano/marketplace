import React from "react";
import { css, style } from "glamor";

const slideUp = css.keyframes({
  "0%": { transform: "translateY(1000px)" },
  "100%": { transform: "translateY(0)" }
});

const opacity = css.keyframes({
  "0%": { opacity: "0" },
  "100%": { opacity: "1" }
});

const styles = {
  modal: css({
    position: "fixed",
    zIndex: 1,
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.4)",
    animation: `${opacity} .3s ease-in`
  }),
  modal_content: css({
    backgroundColor: "white",
    margin: "10% auto",
    padding: 20,
    border: "1px solid darkgray",
    animation: `${slideUp} .3s ease-in`,
    width: "80vw",
    "@media(min-width: 768px)": {
      width: "60vw"
    }
  }),
  close: css({
    color: "darkgray",
    float: "right",
    fontSize: 28,
    fontWeight: "bold",
    "&:hover": {
      color: "black",
      textDecoration: "none",
      cursor: "pointer"
    }
  })
};

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = { show: "block" };
  }

  handleClick() {
    this.setState({ show: "none" });
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    this.setState({ show: this.props.show });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.show !== this.props.show) {
      return this.setState({ show: "block" });
    }
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ show: "none" });
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <div
        {...styles.modal}
        {...style({
          display: this.state.show
        })}
      >
        <div {...styles.modal_content} ref={this.setWrapperRef}>
          <span
            data-cy="close-modal"
            {...styles.close}
            onClick={this.handleClick}
          >
            &times;
          </span>
          {this.props.render}
        </div>
      </div>
    );
  }
}

export default ModalContainer;
