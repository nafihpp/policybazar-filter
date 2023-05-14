import "./Modal.css";

export const Modal = ({ children, handleChange }) => {
    return (
        <div className="modal">
            <div className="modal-overlay" onClick={handleChange}></div>
            <div className="modal-content">{children}</div>
        </div>
    );
};
