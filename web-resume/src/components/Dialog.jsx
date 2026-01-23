import {useEffect} from "react";
import Button from "./Button";
import './Dialog.css';

export default function Dialog(props) {
  const {
    header,
    modal = false,
    extendedDismiss = true,
    onAction = () => {},
    hasCancel = true,
  } = props;

  useEffect(() => {
    function dismissClick(e) {
      if (e.target.classList.contains('DialogModal')) {
        onAction('dismiss');
      }
    }

    function dismissKey(e) {
      if (e.key === 'Escape') {
        onAction('dismiss');
      }
    }

    if (modal) {
      document.body.classList.add('DialogModalOpen');
      if (extendedDismiss) {
        document.body.addEventListener('click', dismissClick);
        document.addEventListener('keydown', dismissKey);
      }
    }
    return () => {
      document.body.classList.remove('DialogModalOpen');
      document.body.removeEventListener('click', dismissClick);
      document.removeEventListener('keydown', dismissKey);
    };
  }, [onAction, modal, extendedDismiss]);

  return (
    <div className={modal ? 'Dialog DialogModal' : 'Dialog'}>
      <div className={modal ? 'DialogModalWrap' : null}>
        <div className="DialogHeader">{header}</div>
        <div className="DialogBody">
          { Array.isArray(props.children) &&
          props.children.map((child, index) => (
            <p className="DialogBodyContent" key={index}>
              <span>{index + 1}) </span>
              {child}
            </p>
            ))}
        </div>
        <div className="DialogFooter">
          {hasCancel &&
            <Button
              className="DialogDismiss"
              onClick={() => onAction('dismiss')}>
              Закрыть
            </Button>}
        </div>
      </div>
    </div>
  );
}