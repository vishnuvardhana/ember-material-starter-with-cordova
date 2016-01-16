/*
    Component c3-chart.js 
    1.Used to insert chart 
    2.Change options like enableMenu,graphTypes,chartDiv

    Important Point 
    To have Multiple Graphs In same page make sure you change 'chartDiv' parameter 

 */
import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        menuItemClick(typeOfChart) {

                this.set('typeOfChart', typeOfChart);
            },

    },
    chartTitle: Ember.computed('typeOfChart', function() {
        return 'C3 - ' + this.get('typeOfChart') + ' Graph';
    }),
    enableMenu: true,
    graphTypes: ['Bar', 'Line', 'Area', 'Step', 'Pie'], //list of graph types

    /*
       Change your graph library if you want to inside this function didRender
     */
    didRender: function() {



        let myChartData = this.get('myChartData');
        let typeOfChart = this.get('typeOfChart');
        if (!typeOfChart) {
            typeOfChart = 'Bar';
            this.set('typeOfChart', 'Bar');
        }
        // if chart data is not availalbe
        // If you want to parameterize graph options you can pass it as parameter to the
        if (!myChartData) {
            myChartData = {};
            myChartData.series1 = ["Lengend 1", 100, 200, 300, 400, 500];
            myChartData.series2 = ["Legend 2", 150, 250, 350, 450, 550];
        }

        let chart = c3.generate({
            bindto: '.' + this.get('chartDiv'),
            data: {
                columns: [myChartData.series1, myChartData.series2],
                type: typeOfChart.toLowerCase(),
                onclick: function(graphNode) {
                    alert("Graph Node " + graphNode.index + " clicked");

                }
            },
            axis: {
                y: {
                    label: {
                        text: 'Sample Label',
                        position: 'outer-middle',
                    }
                }
            },

        });
        this.set('chartInstance', chart);



    },


});
