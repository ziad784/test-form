


const ctx = document.getElementById('myChart').getContext('2d');
const ctx2 = document.getElementById('rate_chart').getContext('2d');
const one_result_ctx = document.getElementById('one_result_chart').getContext('2d');
const one_rate_ctx = document.getElementById('one_rate_chart').getContext('2d');

const rating_data = JSON.parse(localStorage.getItem("rating"));
const answers_data = JSON.parse(localStorage.getItem("answers_data"))

let right_ans_count = 0;



function Percentage(part_num,total_num){
    return (100 * part_num) / total_num
}

answers_data.forEach((element,i) => {
    const current_num = (i + 1).toString()
   

    if(element["q"+current_num] === "right"){
        right_ans_count += 1
    }
});

let poor_rate_count = 0;
let notBad_rate_count = 0;
let ok_rate_count = 0;
let soGood_rate_count = 0;
let excellent_rate_count = 0;


rating_data.forEach((element,i)=>{
    const current_num = (i + 1).toString()
   

    if(element["q"+current_num] === "Poor"){
        poor_rate_count += 1
    }
   

    if(element["q"+current_num] === "Not bad"){
        notBad_rate_count += 1
    }
   

    if(element["q"+current_num] === "Ok"){
        ok_rate_count += 1
    }
   

    if(element["q"+current_num] === "So good"){
        soGood_rate_count += 1
    }
   

    if(element["q"+current_num] === "Excellent"){
        excellent_rate_count += 1
    }
    
})


let level1_ans_count = 0;
let level2_ans_count = 0;
let level3_ans_count = 0;
let level4_ans_count = 0;
let level5_ans_count = 0;

answers_data.forEach((element,i) => {
    const current_num = (i + 1).toString()
   
    if(current_num <= 4){
        if(element["q"+current_num] === "right"){
            level1_ans_count += 1
        }

    }

    if(current_num > 4 && current_num <=8 ){
        if(element["q"+current_num] === "right"){
            level2_ans_count += 1
        }
    }

    if(current_num > 8 && current_num <= 12 ){
        if(element["q"+current_num] === "right"){
            level3_ans_count += 1
        }
    }

    if(current_num > 12 && current_num <= 16 ){
        if(element["q"+current_num] === "right"){
            level4_ans_count += 1
        }
    }

    if(current_num > 16 && current_num <= 20 ){
        if(element["q"+current_num] === "right"){
            level5_ans_count += 1
        }
    }


});









const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Right Answers'],
        datasets: [{
            label: 'Total Result',
            data: [Percentage(right_ans_count,20)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',

            ],
            borderWidth: 1,
            barPercentage:0.6
        },{
            type: 'line',
            label: '',
            data: [100],
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
            data: [Percentage(poor_rate_count,20),Percentage(notBad_rate_count,20),Percentage(ok_rate_count,20),Percentage(soGood_rate_count,20),Percentage(excellent_rate_count,20)],
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
        },{
            type: 'line',
            label: '',
            data: [100],
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
            data: [Percentage(level1_ans_count,20),Percentage(level2_ans_count,20),Percentage(level3_ans_count,20),Percentage(level4_ans_count,20),Percentage(level5_ans_count,20)],
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
        },{
            type: 'line',
            label: '',
            data: [100],
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

 const rating_chart = new Chart(one_rate_ctx, {
    type: 'bar',
    data: {
        labels: ['Poor','Not bad','Ok','So good','Excellent'],
        datasets: [{
            label: 'Rating',
            data: [3,4,1,2,5],
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
        },{
            type: 'line',
            label: '',
            data: [100],
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


