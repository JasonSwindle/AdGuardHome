import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { setLogsFilter } from '../../actions/queryLogs';
import './LogsSearchLink.css';

const LogsSearchLink = ({
    search = '', response_status = '', children, link = '/logs',
}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const onSearchRedirect = async () => {
        await dispatch(setLogsFilter({
            search: search && `"${search}"`,
            response_status,
        }));

        history.push(link);
    };

    const onEnterPress = async (e) => {
        if (e.key === 'Enter') {
            await onSearchRedirect();
        }
    };

    return <a onClick={onSearchRedirect} onKeyDown={onEnterPress}
              className={'stats__link'}
              tabIndex={0}
              title={t('click_to_view_queries')}
              aria-label={t('click_to_view_queries')}>{children}</a>;
};

LogsSearchLink.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element]).isRequired,
    search: PropTypes.string,
    response_status: PropTypes.string,
    link: PropTypes.string,
};

export default LogsSearchLink;
