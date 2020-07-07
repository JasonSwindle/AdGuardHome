import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { formatNumber } from '../../helpers/helpers';
import { setLogsFilter } from '../../actions/queryLogs';

const Cell = ({
    value, percent, color, search,
}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onClick = async () => {
        await dispatch(setLogsFilter({
            search: `"${search}"`,
            response_status: '',
        }));

        history.push('/logs');
    };

    return <div className="stats__row">
        <div className="stats__row-value mb-1">
            <strong
                onClick={onClick}><span className="cursor--pointer">{formatNumber(value)}</span></strong>
            <small className="ml-3 text-muted">{percent}%</small>
        </div>
        <div className="progress progress-xs">
            <div
                className="progress-bar"
                style={{
                    width: `${percent}%`,
                    backgroundColor: color,
                }}
            />
        </div>
    </div>;
};

Cell.propTypes = {
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    search: PropTypes.string,
    onSearchRedirect: PropTypes.func,
};

export default Cell;
