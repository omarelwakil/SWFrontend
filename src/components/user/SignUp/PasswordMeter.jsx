import React from 'react';
import PropTypes from "prop-types";
import './PasswordMeter.css';

/**
 * Component for PasswordMeter in the Input box of the Password
 * @component
 * @example
 * const width = '50%'
 * const backgroundPM = '#e2292b'
 * return(
 *   <PasswordMeter width={widthPM} bg = {backgroundPM} />
 * )
 */

function PasswordMeter(props) {
    return (
        <div className="progress" style={{height:'4px'}}>
            <div className="progress-bar short " style={{width:props.width,background:props.bg}}>

            </div>
        </div>
    );

}

PasswordMeter.propTypes = {
    /**
     * width of the Password Meter
     */
     width : PropTypes.string.isRequired,
    /**
     * Background color of the Password Meter 
     */
     bg : PropTypes.string.isRequired,
  }
  
  PasswordMeter.defaultProps = { 
    width: '0',
    bg: '#e2292b',
  
  }
  
  

export default PasswordMeter;