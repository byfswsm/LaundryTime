import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';

const Toaster = ({
    showToast,
    setShowToast,
}) => {

    return (
        <>
            <div>
                <Toast onClose={() => setShowToast(false)} bg="info" show={showToast} delay={3000} autohide>
                    <Toast.Body>Email sent successfully.</Toast.Body>
                </Toast>
            </div>
            {/* <Button onClick={() => setShowToast(true)}>Show Toast</Button> */}
        </>
    );
}

export default Toaster;