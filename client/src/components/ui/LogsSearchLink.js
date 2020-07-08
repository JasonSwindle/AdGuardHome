import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { setLogsFilter } from '../../actions/queryLogs';
import './LogsSearchLink.css';
import { RESPONSE_FILTER } from '../../helpers/constants';
import { formatQueryParams } from '../../helpers/helpers';

const LogsSearchLink = ({
    search = '', response_status = '', children, link = '/logs',
}) => {
    const { t } = useTranslation();

    const to = link === '/logs' ? `/logs${formatQueryParams(search, response_status)}` : link;

    return <Link to={to}
                 className={'stats__link'}
                 tabIndex={0}
                 title={t('click_to_view_queries')}
                 aria-label={t('click_to_view_queries')}>{children}</Link>;
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
