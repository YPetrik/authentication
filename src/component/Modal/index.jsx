import './Modal.css';
const Modal = ({ children, shown, close }) => {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        close();
      }}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
