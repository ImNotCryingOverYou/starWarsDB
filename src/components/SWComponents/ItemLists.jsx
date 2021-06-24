import React from 'react'
import ItemList from '../ItemList/ItemList';
import { withData, withSwapiService } from '../HocHelpers';


const withChildFunction = (Wrarpped, fn) => {
    return (props) => {
        return (
            <Wrarpped {...props}>
                {fn}
            </Wrarpped>
        )
    }
}

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => <span>{name}({model})</span>;

withChildFunction(ItemList, renderName);


const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople,
    }
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets,
    }
}

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships,
    }
}

const PersonList = withSwapiService(
    withData(withChildFunction(ItemList, renderName)),
    mapPersonMethodsToProps
);

const PlanetList = withSwapiService(
    withData(withChildFunction(ItemList, renderName)),
    mapPlanetMethodsToProps
);

const StarshipList = withSwapiService(
    withData(withChildFunction(ItemList, renderModelAndName)),
    mapStarshipMethodsToProps
);


export {
    PersonList,
    PlanetList,
    StarshipList
};