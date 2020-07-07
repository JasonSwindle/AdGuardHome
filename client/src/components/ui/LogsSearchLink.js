import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setLogsFilter } from '../../actions/queryLogs';
import './LogsSearchLink.css';

const LogsSearchLink = ({ search, children, link = '/logs' }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onClick = async () => {
        await dispatch(setLogsFilter({
            search: `"${search}"`,
            response_status: '',
        }));

        history.push(link);
    };

    return <span onClick={onClick} className="stats__link">{children}</span>;
};

LogsSearchLink.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element]).isRequired,
    search: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default LogsSearchLink;
