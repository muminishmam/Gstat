const favouriteTags = ['Adventure', 'Indie', 'Multiplayer', 'Puzzle', 'Single-player', 'Strategy']
const tagData = [10, 20, 30, 40, 50, 60]
const bgColours = [
    'rgba(216, 150, 99, 0.2)',
    'rgba(197, 162, 21, 0.2)',
    'rgba(145, 171, 1, 0.2)',
    'rgba(53, 205, 150, 0.2)',
    'rgba(104, 197, 232, 0.2)',
    'rgba(208, 91, 186, 0.2)',
    'rgba(201, 203, 207, 0.2)'
]

const borderColours = [
    'rgba(216, 150, 99)',
    'rgba(197, 162, 21)',
    'rgba(145, 171, 1)',
    'rgba(53, 205, 150)',
    'rgba(104, 197, 232)',
    'rgba(208, 91, 186)',
    'rgb(201, 203, 207)'
]

Chart.defaults.font.family = "'Poppins', sans-serif";

// <block:setup:1>
const data = {
    labels: favouriteTags,
    datasets: [{
        label: 'Play Time',
        backgroundColor: bgColours,
        borderColor: borderColours,
        hoverOffset: 4,
        data: tagData
    }]
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
const config = {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            title: {
                color: '#d5d6d7',
                display: true,
                font: {
                    size: 22
                },
                text: 'Favourite Tags'
            },
            legend: {
                display: true,
                labels: {
                    color: '#9ea0a3',
                }
            }
        },
        layout: {
            padding: {
                bottom: 15
            }
        }
    },
    plugins: [plugin]
};

document.getElementById("tagsButton").className = document.getElementById("tagsButton").className + "-active";

// </block:config>
