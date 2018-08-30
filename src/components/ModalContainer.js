import React from "react";
import { css, style } from "glamor";

const styles = {
  modal: css({
    position: "fixed",
    zIndex: "1",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.4)"
  }),
  modal_content: css({
    backgroundColor: "#fefefe",
    margin: "15% auto",
    padding: "20px",
    border: "1px solid #888",
    width: "80%"
  }),
  close: css({
    color: "#aaa",
    float: "right",
    fontSize: "28px",
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
