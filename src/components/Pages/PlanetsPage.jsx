import React from 'react';
import { PlanetDetails, PlanetList } from '../SWComponents/index'
import Row from '../Row/Row'

export default class PlanetPage extends React.Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {
        const { selectedItem } = this.state;
        return (
            <Row
                left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails itemId={selectedItem} />} />
        )
    }
}