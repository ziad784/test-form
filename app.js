const answers = [
    {"q1":"All"},
    {"q2":"keep away"},
    {"q3":"Worry"},
    {"q4":"Anxiety"}
]

const right_words = [
    "Well done!",
    "Excellent!",
    "Good Job!",
    "Very Good!",
    "Bravo!",
    "Great!",
    "Amazing!",
    "You did it!",
    "That’s good!",
    "Wonderful!",
    "You got it",
    "I’m Proud of you!",
    "Nice work!",
    "Keep it up",
    "You did very well!"
]


const TryAgain_words = [
    "Try once more",
    "Give it another try!",
    "Try again!",
    "Come on! You can do it!",
    "Never give up!",
    "Keep tying!",
    "Stay strong!",
    "Try once more!",
    "Never Stop!"
]


const wrong_short_words = [
    "Sorry!",
    "No!",
    "Oops!",
    "This is not true!",
    
]
const wrong_long_words = [
    "Your answer is wrong. The correct answer is",
    "This is not the right answer. The correct answer is",
    "Incorrect answer. The correct answer is",
    "The correct answer is",
    
]

const correct_imgs = [
    "imgs/correct/correct1.gif",
    "imgs/correct/correct2.gif",
    "imgs/correct/correct3.gif",
    "imgs/correct/correct4.gif"
]

const again_imgs = [
    "imgs/again/again1.gif",
    "imgs/again/again2.gif",
    "imgs/again/again3.gif"
]

const wrong_imgs = [
    "imgs/wrong/wrong1.gif",
    "imgs/wrong/wrong2.gif",
    "imgs/wrong/wrong3.gif"

]


const correct_sounds = [
    "sounds/correct/correct1.mp3",
    "sounds/correct/correct2.mp3",
    "sounds/correct/correct3.mp3",
    "sounds/correct/correct4.mp3",
    "sounds/correct/correct5.mp3",
    "sounds/correct/correct6.mp3"

]

const again_sounds = [
    "sounds/again/again1.mp3",
    "sounds/again/again2.mp3",


]

const wrong_sounds = [
    "sounds/wrong/wrong1.mp3",
    "sounds/wrong/wrong2.mp3",
    "sounds/wrong/wrong4.mp3",
    "sounds/wrong/wrong3.mp3",


]



function getRandomWord(words){
    return words[Math.floor(Math.random() * words.length)]
}

let try_count ;


const answers_array = Array.from(document.querySelectorAll(".answers"));

answers_array.forEach((ele)=>{
    const q_array = Array.from(document.querySelectorAll("."+ele.dataset.q));
   
    q_array.forEach((element)=>{
      
        element.children[0].addEventListener("change",(e)=>{

            const card = document.getElementById(ele.dataset.q+"_card");
           
            const right_ans = answers[parseInt(ele.dataset.q.split("q")[1]) - 1][ele.dataset.q]
            
            
            if(right_ans == e.target.value){

                const audio = new Audio() 
                audio.src = getRandomWord(correct_sounds)
                audio.play()
                
                card.style.display = "flex";
                card.innerHTML = `<div class="x_mark"><i class="fa-solid fa-xmark"></i></div>
                <div><img width="100" height="100" style="object-fit:contain;" src="${getRandomWord(correct_imgs)}" alt=""></div>
                <div class="right"><span class="green">${getRandomWord(right_words)}</span> Correct answer.</div>`

                document.getElementById(ele.dataset.q+"_rating").style.display = "flex"
                q_array.forEach((radio)=>{
                    radio.children[0].disabled = true
                })

                card.addEventListener("click",(e)=>{
          

                    document.getElementById(e.currentTarget.dataset.btn).style = "block"
                    card.style.display = "none"

                })
               

            }else{

             
                if(card.children.length === 0){
                  
                    const audio = new Audio() 
                    audio.src = getRandomWord(again_sounds)
                    audio.play()
                    card.style.display = "flex";
                    card.innerHTML = ` <div class="x_mark"><i class="fa-solid fa-xmark"></i></div>
                    <div><img width="100"  height="100" style="object-fit:contain;" src="${getRandomWord(again_imgs)}" alt=""></div>
                    <div class="try_again orange">${getRandomWord(TryAgain_words)}</div>`
                    element.remove();

                }else{

                    
                    
                    if(card.children[2].classList.contains("try_again")){

                        const random_index = Math.floor(Math.random() * wrong_short_words.length)
                        const wrong_short = wrong_short_words[random_index];
                        const wrong_long = wrong_long_words[random_index]
                        const audio = new Audio() 
                        audio.src = getRandomWord(wrong_sounds)
                        audio.play()
                        
                        card.style.display = "flex";
                        card.innerHTML = `<div class="x_mark"><i class="fa-solid fa-xmark"></i></div>
                        <div style="flex:1"><img width="100" height="100" style="object-fit:contain;" src="${getRandomWord(wrong_imgs)}" alt=""></div>
                        <div class="wrong" style="flex:2"><span class="red">${wrong_short}</span> <span class="black">${wrong_long}</span> <span class="blue">"${right_ans}"</span> </div>`
    
                        document.getElementById(ele.dataset.q+"_rating").style.display = "flex"
                        q_array.forEach((radio)=>{
                            radio.children[0].disabled = true
                        })
    
                        card.addEventListener("click",(e)=>{
                  
    
                            document.getElementById(e.currentTarget.dataset.btn).style = "block"
                            card.style.display = "none"
    
                        })
                       


                    }

                   

                }
            
            }


         

        })
    })
})




const show_btns = Array.from(document.querySelectorAll(".show_btn"))

show_btns.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        
        document.getElementById(e.currentTarget.dataset.card).style.display = "flex"
        ele.style.display = "none"
    })
})



const rating = Array.from(document.querySelectorAll(".rating"))

rating.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        
        const color_name = e.currentTarget.className.split("_")[1];
        console.log(color_name);
        e.currentTarget.classList.add(color_name)

        rating.forEach((ele)=>{
            
            if(ele.dataset.q == e.currentTarget.dataset.q){
                if(ele != e.currentTarget){
                    ele.classList.remove(ele.classList[2])
                }

            }

           
        })

    })
})
