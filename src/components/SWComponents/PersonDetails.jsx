import React from 'react'
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { withSwapiService } from '../HocHelpers/';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props} >

            <Record field="gender" label="Gender:" />
            <Record field="eyeColor" label="Eye Color:" />
            <Record field="birthYear" label="Birth year:" />
        </ItemDetails >
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(PersonDetails, mapMethodsToProps);
