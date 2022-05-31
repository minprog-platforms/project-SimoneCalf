import React, { Component } from 'react';
import Plot from 'react-plotly.js';

function ZoutGrafiek(props) {
    // const [salt, setSalt] = useState(0);


    // const calculateSalt = Object.entries(LocalStorage).map(entry => {
    //     const name=entry[0]
    // })

    var xSavings = [1.3586, 3.78];
    
    //var xSavings = [salt];

    //var xSavings = {calculateSalt}

    var ySavings = ['zout', 'fat'];
    
    
    var trace1 = {
    x: xSavings,
    y: ySavings,
    xaxis: 'x1',
    yaxis: 'y1',
    type: 'bar',
    marker: {
        color: 'rgba(50,171,96,0.6)',
        line: {
        color: 'rgba(50,171,96,1.0)',
        width: 1
        }
    },
    name: 'Household savings, percentage of household disposable income',
    orientation: 'h'
    };
    
    
    var data = [trace1];
    
    var layout = {
        title: 'Hoeveelheid binnengekregen zout',
        xaxis1: {
            range: [0, 10],
            domain: [0, 0.5],
            //domain: [0, 1],
            zeroline: false,
            showline: false,
            showticklabels: true,
            showgrid: true
        },
        legend: {
            x: 0.029,
            y: 1.238,
            font: {
            size: 10
            }
        },
        margin: {
            l: 100,
            r: 20,
            t: 200,
            b: 70
        },
        //width: 600,
        width: 800,
        height: 600,
        paper_bgcolor: 'rgb(248,248,255)',
        plot_bgcolor: 'rgb(248,248,255)',
        annotations: [
            {
            xref: 'paper',
            yref: 'paper',
            x: -0.2,
            y: -0.109,
            text: 'In de staafdiagram ziet u de hoeveelheid zout die u vandaag heeft binnengekregen in gram en hoeveel procent van de aanbevolen dagelijkse hoeveelheid',//'OECD ' + '(2015), Household savings (indicator), ' + 'Household net worth (indicator). doi: ' + '10.1787/cfc6f499-en (Accessed on 05 June 2015)',
            showarrow: false,
            font:{
                family: 'Arial',
                size: 10,
                color: 'rgb(150,150,150)'
            }
            }
        ]
    };
    
    for ( var i = 0 ; i < xSavings.length ; i++ ) {
    var result = {
        xref: 'x1',
        yref: 'y1',
        x: xSavings[i]+2.3,
        y: ySavings[i],
        text: xSavings[i] + '%',
        font: {
        family: 'Arial',
        size: 12,
        color: 'rgb(50, 171, 96)'
        },
        showarrow: false,
    };
    layout.annotations.push(result);
    }
    
    return (
        <Plot
          data={data}
          layout={layout}
        />
      );

}

export default ZoutGrafiek