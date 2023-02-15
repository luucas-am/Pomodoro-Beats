import React, { MouseEventHandler } from 'react'
import './Modal.css'

const Modal = (props: {onClose: MouseEventHandler<HTMLButtonElement>;  show: boolean }) => {
    if (!props.show) 
        return null

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='title'>Welcome to Pomodoro Beats!</h4>
                </div>
                <div className='modal-body'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium sollicitudin viverra. Duis bibendum turpis sed nulla suscipit, 
                    sit amet euismod lorem eleifend. Vestibulum viverra vel odio ac efficitur.
                </div>
                <div className='modal-footer'>
                    <button onClick={props.onClose} className='btn'>Get Started!</button>
                </div>
            </div>
        </div>
    )
}

export default Modal