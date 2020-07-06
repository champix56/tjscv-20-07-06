import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
const Button = (props) => {
  //console.log(props);
  
  const onclick=(event)=>{
    props.onClick(event);
  }
  return (
  <div className={styles.Button} data-testid="Button" onClick={onclick}>
    <div className={styles.container}>
    { props.text }
    </div>
  </div>
)};
Button.propTypes={
  text:PropTypes.string.isRequired,
  onClick:PropTypes.func
}
export default Button;
