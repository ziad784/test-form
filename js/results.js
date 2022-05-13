const ctx = document.getElementById('myChart').getContext('2d');
const ctx2 = document.getElementById('rate_chart').getContext('2d');
const one_result_ctx = document.getElementById('one_result_chart').getContext('2d');
const one_rate_ctx = document.getElementById('one_rate_chart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Right Answers'],
        datasets: [{
            label: 'Total Result',
            data: [12],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',

            ],
            borderWidth: 1
        }
    
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
 new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Poor','Not bad','Ok','So good','Excellent'],
        datasets: [{
            label: 'Total Rating',
            data: [3,4,7,2,4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',

            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


 new Chart(one_result_ctx, {
    type: 'bar',
    data: {
        labels: ['Level 1','Level 2','Level 3','Level 4','Level 5'],
        datasets: [{
            label: 'Answers',
            data: [3,4,1,2,4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',

            ],
            borderWidth: 1
        }
    
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

 new Chart(one_rate_ctx, {
    type: 'bar',
    data: {
        labels: ['Level 1','Level 2','Level 3','Level 4','Level 5'],
        datasets: [{
            label: 'Rating',
            data: [3,4,1,2,4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',

            ],
            borderWidth: 1
        }
    
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

