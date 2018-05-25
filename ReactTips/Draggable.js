import React, { Component } from 'react';
import { b, createBlock } from '../../helpers/bem';
import ReactModal from 'react-modal';
import Draggable from 'react-draggable';
import ColoredIcon from '../ColoredIcon/ColoredIcon';
import { get, isNull } from 'lodash';
import './DraggableModal.css';
import 'element-closest';
import contains from 'contains';

const block = createBlock('DraggableModal');

class DraggableModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeOnClickOutside: get(this, 'props.closeOnClickOutside', true),
      clickOutsideFunc: get(this, 'props.clickOutsideFunc', () => {}),
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
      style: {
        top: 'inherit',
        left: 'inherit'
      }
    };
    this.escFunction = this.escFunction.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      closeOnClickOutside: get(
        this,
        'nextProps.closeOnClickOutside',
        this.state.closeOnClickOutside
      ),
      clickOutsideFunc: get(
        this,
        'nextProps.clickOutsideFunc',
        this.state.clickOutsideFunc
      )
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }
  dragMouseDown = e => {
    e = e || window.event;
    // get the mouse cursor position at startup:
    this.setState({
      pos3: e.clientX,
      pos4: e.clientY
    });
    console.log(document)
    this.modal.addEventListener('mouseup', this.closeDragElement, false);
    this.modal.addEventListener('mousemove', this.elementDrag, false);
    /*  document.onmouseup = this.closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = this.elementDrag;*/
  };

  elementDrag = e => {
    console.log(this.modal.style)
    e = e || window.event;
    const {pos1, pos2, pos3, pos4} = this.state;
    // calculate the new cursor position:
    this.setState({
      pos1: pos3 - e.clientX,
      pos2: pos4 - e.clientY,
      pos3: e.clientX,
      pos4: e.clientY,
      style: {
        top: (this.modal.offsetTop - pos2) + "px",
        left: (this.modal.offsetLeft - pos1) + "px"
      }
    });
  };

  closeDragElement = e => {
    console.warn('aaa')
    /* stop moving when mouse button is released:*/
    this.modal.removeEventListener('mouseup', this.closeDragElement, true)
    this.modal.removeEventListener('mousemove', this.elementDrag, true);
    /*    document.onmouseup = null;
        document.onmousemove = null;*/
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  escFunction(event) {
    const { closeOnClickOutside, clickOutsideFunc } = this.state;
    if (closeOnClickOutside && event.keyCode === 27) {
      clickOutsideFunc();
    }
  }

  handleOutsideClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const { closeOnClickOutside, clickOutsideFunc } = this.state;
    if (
      closeOnClickOutside &&
      e.target.closest('.DraggableModal__modal') === null
    ) {
      if (this.node) {
        if (contains(this.node, e.target)) {
          return;
        }
      }
      clickOutsideFunc();
    }
  }

  render() {
    const {pos1, pos2, pos3, pos4, style} = this.state;
    console.log(pos1, pos2, pos3, pos4)
    const label = get(this, 'props.label', '');
    const children = get(this, 'props.children', null);
    const headerComp = get(this, 'props.headerComp', null);
    const headerProp = get(this, 'props.header', null);
    const header = headerProp === 'no' ? <div /> : headerProp;
    const footerProp = get(this, 'props.footer', null);
    const footer = footerProp === 'no' ? <div /> : footerProp;
    const onCancelBtnClick = get(this, 'props.onCancelBtnClick', () => {});
    const onConfirmBtnClick = get(this, 'props.onConfirmBtnClick', () => {});
    const cancelButtonText = get(this, 'props.cancelButtonText', 'Cancel');
    const confirmButtonText = get(this, 'props.confirmButtonText', false);

    return (
      <div className={b(block)} onClick={this.handleOutsideClick}>
        {/* <Draggable>*/}
        <div className={b(block, 'modal')} style={{ width: 'fit-content', ...style }} ref={el => this.modal = el}>
          <div className={b(block, 'modal-inside')} >
            <div className={b(block, 'header-wrapper')} ref={el => this.header = el}
                 onMouseDown={this.dragMouseDown}
            >{header || (
              <div className={b(block, 'header')}>
                <div className={b(block, 'label')}>{label}</div>
                {headerComp && (
                  <div className={b(block, 'add-header')}>{headerComp}</div>
                )}
                <div
                  className={b(block, 'close-icon')}
                  onClick={e => {
                    e.preventDefault();
                    onCancelBtnClick();
                  }}
                >
                  <ColoredIcon
                    icon={'close fal fa-times'}
                    holderSize={47}
                    holderColor={'#ddd'}
                    iconSize={30}
                    color={'white'}
                    className={'close'}
                  />
                </div>
              </div>
            )}</div>
            {children && (
              <div className={b(block, 'body')}>
                {React.cloneElement(children, { ...this.props })}
              </div>
            )}
            {footer || (
              <div className={b(block, 'footer')}>
                {confirmButtonText && (
                  <div
                    className={b(block, 'footer-confirm')}
                    onClick={e => {
                      e.preventDefault();
                      onConfirmBtnClick();
                    }}
                  >
                    {confirmButtonText}
                  </div>
                )}
                {cancelButtonText && (
                  <div
                    className={b(block, 'footer-cancel')}
                    onClick={e => {
                      e.preventDefault();
                      onCancelBtnClick();
                    }}
                  >
                    {cancelButtonText}
                  </div>
                )}
              </div>
            )}
          </div>
          <Draggable handle="strong" {...dragHandlers}>
            <div className="box no-cursor">
              <strong className="cursor"><div>Drag here</div></strong>
              <div>You must click my handle to drag me</div>
            </div>
          </Draggable>
        </div>
        {/*  </Draggable>*/}
      </div>
    );
  }
}

export default DraggableModal;





