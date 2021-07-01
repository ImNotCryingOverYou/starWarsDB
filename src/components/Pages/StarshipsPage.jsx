import React from 'react';
import { StarshipList } from '../SWComponents/index'
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({ history }) => {
    return (
        <StarshipList
            onItemSelected={(id) => history.push(id)} />

    );
};

export default withRouter(StarshipsPage);