import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TapTile from './TapTile';

class App extends Component {
    render() {
        let beers = [{
                id: 0,
                tapNumber: 1,
                itemName: 'Basement IPA',
                ownerName: 'Scofflaw Brewing',
                description: 'American IPA',
                abv: '8%',
                remainingPercentage: 20
            },
            {
                id: 1,
                tapNumber: 2,
                itemName: 'Wandering Blues',
                ownerName: 'Orpheus Brewing',
                description: 'American Wild Ale',
                abv: '5%', 
                remainingPercentage: 30
            },
            {
                id: 2,
                tapNumber: 3,
                itemName: 'Slap Fight',
                ownerName: 'Monday Night Brewing',
                description: 'Double IPA',
                abv: '8.5%', 
                remainingPercentage: 90
            },
            {
                id: 3,
                tapNumber: 4,
                itemName: 'St. Bernardus Tripel',
                ownerName: 'St. Bernardus Brewery',
                description: 'Tripel',
                abv: '8%', 
                remainingPercentage: 90
            }
        ];

        const _getPercentageClass = (percentage) => {
            var percentageColor = 'remaining-high';

            if (percentage <= 66 && percentage > 33) {
                percentageColor = 'remaining-medium';
            } else if (percentage <= 33 && percentageColor > 5) {
                percentageColor = 'remaining-low';
            } else if (percentage <= 5) {
                percentageColor = 'remaining-almost-gone';
            }

            return percentageColor;
        };

        return (
            <div>

                {beers.map((beer, index) => {
                    return <TapTile
                            key={index}
                            tapNumber={beer.tapNumber}
                            itemName={beer.name}
                            ownerName={beer.ownerName}
                            description={`${beer.description}, ${beer.abv}`}
                            remainingPercentage={beer.remainingPercentage}
                            percentageClass={_getPercentageClass(beer.remainingPercentage)}>
                        </TapTile>;
                })}

            </div>
        );
    }
}

export default App;
