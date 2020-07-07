import React from 'react';
import PropTypes from 'prop-types';

import './IconTooltip.css';

const IconTooltip = ({ text, type = '' }) => <div data-tooltip={text}
                                                  className={`tooltip-custom ml-1 ${type}`} />;

IconTooltip.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
};

export default IconTooltip;
