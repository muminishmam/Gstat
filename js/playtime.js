const playtimeDefaultLabel = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129']
const title = 'Playtime History of All Games'
const xLabel = 'Week'
const yLabel = 'Time (hr)'

const dataset1 = 'Game 1'
const dataset2 = 'Game 2'
const dataset3 = 'Game 3'
const dataset4 = "Game 4"

Chart.defaults.font.family = "'Poppins', sans-serif";

// <block:setup:1>
const data = {
    labels: playtimeDefaultLabel,
    datasets: [{
        label: dataset1,
        backgroundColor: 'rgba(197, 162, 21, 0.2)',
        borderColor: 'rgb(197, 162, 21)',
        borderWidth: 1,
        data: JSON.parse(localStorage.getItem('playtimeData'))
    },{
        label: dataset2,
        backgroundColor: 'rgba(104, 197, 232, 0.2)',
        borderColor: 'rgb(104, 197, 232)',
        borderWidth: 1,
        data: JSON.parse(localStorage.getItem('playtimeData2'))
    },{
        label: dataset3,
        backgroundColor: 'rgba(208, 91, 186, 0.2)',
        borderColor: 'rgb(208, 91, 186)',
        borderWidth: 1,
        data: JSON.parse(localStorage.getItem('playtimeData3'))
    },{
        label: dataset4,
        backgroundColor: 'rgba(53, 205, 150, 0.2)',
        borderColor: 'rgb(53, 205, 150)',
        borderWidth: 1,
        data: JSON.parse(localStorage.getItem('playtimeData4'))
    },
    ]
};
// </block:setup>

const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = '#1e2d35';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    }
};

// <block:config:0>
const configPlaytime = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            title: {
                color: '#d5d6d7',
                display: true,
                font: {
                    size: 22
                },
                text: title
            },
            legend: {
                display: true,
                labels: {
                    color: '#9ea0a3',
                }
            }
        },
        scales: {
            y: {
                grid: {
                    borderColor:'#d5d6d7',
                },
                stacked: true,
                ticks: {
                    color: '#9ea0a3',
                },
                title: {
                    color: '#d5d6d7',
                    display: true,
                    font: {
                        size: 16
                    },
                    text: yLabel
                }
            },
            x: {
                grid: {
                    borderColor:'#d5d6d7',
                    display: false
                },
                stacked: true,
                ticks: {
                    color: '#9ea0a3',
                },
                title: {
                    color: '#d5d6d7',
                    display: true,
                    font: {
                        size: 16
                    },
                    text: xLabel,
                }
            }
        }
    },
    plugins: [plugin]
};

document.getElementById("playtimeButton").className = document.getElementById("playtimeButton").className + "-active";

// </block:config>
