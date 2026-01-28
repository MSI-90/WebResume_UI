import './Button.css';
import classNames from 'classnames';

export default function Button({baseButton, className, children, ...rest}) {
  const buttonClass = classNames(baseButton && 'Button', className);

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
}