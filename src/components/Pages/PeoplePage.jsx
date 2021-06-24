import React from 'react';
import { PersonDetails, PersonList } from '../SWComponents/index'
import Row from '../Row/Row'

export default class PeoplePage extends React.Component {

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
                left={<PersonList onItemSelected={this.onItemSelected} />}
                right={<PersonDetails itemId={selectedItem} />} />
        )
    }
}

