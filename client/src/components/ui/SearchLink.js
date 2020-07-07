import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

// TODO: remove
const SearchLink = (props) => {
    const {
        pathname = '/', children, search = '', onSearchRedirect,
    } = props;


    const dispatch = useDispatch();
    const searchValue = !search && typeof children === 'string' ? children : search;

    const params = {
        search: `"${searchValue}"`,
        response_status: '',
    };

    return <Link className='text-inherit' to={{
        pathname,
        params,
    }} onClick={() => dispatch(onSearchRedirect(params))}>
        {children}
    </Link>;
};

SearchLink.propTypes = {
    pathname: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number,
        PropTypes.element]).isRequired,
    search: PropTypes.string,
    onSearchRedirect: PropTypes.func,
};

export default SearchLink;
