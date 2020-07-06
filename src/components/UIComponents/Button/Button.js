import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
/**
 * 
 * @param {*} props 
 */
const Button = (props) => {
  console.log(props);
  //console.log(props);

  /**
   * 
   * @param {*} event 
   */
  const onclick = (event) => {
    const target = event.currentTarget;
    target.classList.add(styles.onclick);
    setTimeout(() => {
      target.classList.remove(styles.onclick);
    }, 500);
    if (props.onClick !== undefined) {
      props.onClick(event);
    }
  }
  return (
    <div className={styles.Button} data-testid="Button" onClick={onclick} style={{ border: `1px solid ${props.bgColor}` }}>
      <div className={styles.container} style={{ backgroundColor: props.bgColor }}>
        {props.children}
      </div>
    </div>
  )
};
Button.propTypes = {
  onClick: PropTypes.func,
  bgColor: PropTypes.string.isRequired
}
Button.defaultProps = {
  bgColor: 'tomato',
  onClick: (evt) => { },
}
export default Button;
