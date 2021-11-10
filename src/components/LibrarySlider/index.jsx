import React, { Component } from 'react';
import Library from '../../../pages/library';

class LibrarySlider extends Component {
    state = {
        checkState: [
            { id: 1, open: false},
        ]
    };

    render() {
        return (
            <div>
                <div id="library" onClick={() => console.log('hello')}>

                    {this.state.checkState.map((check) => (
                        <Library key={check.id} open={check.open} />
                    ))}
                </div>
            </div>
        );
    }
}

export default LibrarySlider;
