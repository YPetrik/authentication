import style from './Modal.module.scss';

const Modal = ({ children, shown, close }) => {
  return shown ? (
    <div
      className={style.modal__backdrop}
      onClick={() => {
        close();
      }}>
      <div
        className={style.modal__content}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
