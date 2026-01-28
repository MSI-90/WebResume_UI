import './Button.css';
import classNames from 'classnames';

export default (props) => props.href ? (
  <a {...props} className={classNames(props.baseButton && 'Button', props.className)}>
    {props.children}
  </a>
) : (
  <button {...props} className={classNames(props.baseButton && 'Button', props.className)} />
);