import React from "react"
import { StyledBackdrop, StyledModalOverlay } from "./Modal.styles";
import { createPortal } from "react-dom";

const Backdrop = () => <StyledBackdrop />

const ModalOverlay = (props) => {
    return (
        <StyledModalOverlay>
          <div className="content">{props.children}</div>
        </StyledModalOverlay>
    )};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
};

export default Modal;
