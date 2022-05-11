const answers = [
    {"q1":"All"},
    {"q2":"keep away"},
    {"q3":"Worry"},
    {"q4":"Anxiety"},
    {"q5":"Tips for dealing with stress"},
    {"q6":"Relax and stop worrying"},
    {"q7":"A magazine about human health"},
    {"q8":"Stress"},
    {"q9":"Travel more"},
    {"q10":"A fact"},
    {"q11":"Stressful person"},
    {"q12":"Solve it by taking easy steps"},
    {"q13":"Wake up and greet the day"},
    {"q14":"Good, happy, constructive"},
    {"q15":"Sad"},
    {"q16":"Control your response to stress"},
    {"q17":"Tips for dealing with stress"},
    {"q18":"People"},
    {"q19":"He would eat and sleep well"},
    {"q20":"Too much stress = Affected health in a bad way"},
]

const causes_answers = [
    {"q1":"Because you can find this information directly while reading first paragraph."},
    {"q2":'Because you can recognize while reading text, that " keep away" is the only verb in the text that suits the meaning of the verb "avoid" It is mentioned directly in paragrah 2.'},
    {"q3":'Because you can recognize directly while reading paragraph 2, that the word " worry" is mentioned in the previous phrase. Then, the text use the pronoun "it" to refer to "worry" when talking about it again.'},
    {"q4":'Because you can recognize directly while reading paragraph 3 that text mentioned " Anxeity and stress" together. This means they are connected. So, Anxeity" has similar meaning to " stress" .'},
    {"q5":"Because when you think while reading the whole text, you will find that this answer talks about the text 's idea in general, not about a specific paragraph. It covers all the paragraphs' ideas."},
    {"q6":"Because when you think while reading paragraph 3, It talks about reading and listening to Qur’an. then, says it refreshes heart and mind. So, you can guess that the meaning of this phrase is good and positive and opposite to worry."},
    {"q7":"Because this text is talking about stress which affects human health. So, this text suits magazines that interests in human health."},
    {"q8":"Because when you think of the text . It says that thinking too much and worry are not good things. So, they will not cause something good like relaxing, good heath and life."},
    {"q9":'Because the text talks about all the choices as tips for dealing with stress, but never mention " travel more" .'},
    {"q10":"Because this is truth known by everyone and mentioned in the text. It is not an opinion of the writer."},
    {"q11":'Because in paragragh 5 , these words mentioned as the symptoms of stress. So, the person who has stress, called "stressful person". He is not happy, healthy nor organized person.'},
    {"q12":"Because the last paragragh of the text tells us about what to do when trying to solve a problem. It mentions the true and wrong behaviours."},
    {"q13":'Because this phrase is mentioned in paragragh 4. The verb "greet"means saying "Hi "to other people, but here it says "greet the day" . You can guess, It means be happy and positive.'},
    {"q14":'Because "positive" mentioned many times in the text as a good thing. Also, good things give happiness. So, you can put it in the group words that has good meanings.'},
    {"q15":`Because while reading paragrapgh 4 you can recognize the fact that " stress lowered body resistance to diseases" and this is not good, great, happy , or nice fact. It's a sad fact.`},
    {"q16":`Because while reading the whole text , you can recognize that each paragraph gives one tip to control stress. But if we want only one sentence that represents the text. It will be that we should control our response to stress. You can find it in paragraph 1.`},
    {"q17":`Because each paragraph has one idea and the good title of the passage should be general and cover all the ideas in the paragraphs`},
    {"q18":`Because when we teach people about the diseases that stress can cause and give them tips for controlling it, this can help them to reduce it.`},
    {"q19":`Because controlling stress is good for health, you can predict/ guess that a person who controls his stress will eat and sleep well.`},
    {"q20":`Because from reading the whole text, you can come out with the result that says: stress is not good for health.`},
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
    "sounds/wrong/wrong3.mp3",


]

const next_btn = document.getElementById("next_btn");
const back_btn = document.getElementById("back_btn");



let page = 1;

function RenderPage(){
    const count = page * 4
    const questions = Array.from(document.querySelector(".questions").children)
    questions.forEach((ele)=>{
        ele.style.display = "none"
    })
    for (let i = count - 4; i < count; i++) {
        const element = questions[i];
   
        element.style.display = "block"
        
    }
}


window.onload = RenderPage


function Validation(){
    const count = page * 4
    const questions = Array.from(document.querySelector(".questions").children)
    let isvalid = true;

    for (let i = count - 4; i < count; i++) {
        const element = questions[i];
   
        const q_num = element.children[1].dataset.q
        
        if(document.querySelector(`input[name="${q_num}"]:checked`) == null){

            isvalid = false;
            const err = document.createElement("div")
            err.className = `err err_${q_num}`;
            err.innerHTML = `
            <i class="fa-solid fa-circle-exclamation"></i>
            <div>Please, answer all questions before continuing.</div>
            
            `

            if(!element.children[element.children.length - 1].classList.contains("err")){
                element.appendChild(err);
            }

        } 

    }


    return isvalid;
    
}



next_btn.addEventListener("click",()=>{
    if(Validation()){
        if(page + 1 <= 5){
            page = page + 1;
            document.querySelector(".body").scrollTop = 0
            RenderPage()
            back_btn.style.display = "block"
            if(page == 5){
                next_btn.style.display = "none"
            }
        }

    }

   
})

back_btn.addEventListener("click",()=>{
    
    
        page -= 1 
        console.log(page);
        document.querySelector(".body").scrollTop = 0
        RenderPage()
        if(page == 1){
            back_btn.style.display = "none"
        }
    

    

   
})



function getRandomWord(words){
    return words[Math.floor(Math.random() * words.length)]
}

let try_count ;


const answers_array = Array.from(document.querySelectorAll(".answers"));

answers_array.forEach((ele)=>{
    const q_array = Array.from(document.querySelectorAll("."+ele.dataset.q));
   
    q_array.forEach((element)=>{
      
        element.children[0].addEventListener("change",(e)=>{
            const q_num = ele.dataset.q

            document.querySelector(".err_"+q_num)?.remove();

            const card = document.getElementById(ele.dataset.q+"_card");
           
            const right_ans = answers[parseInt(ele.dataset.q.split("q")[1]) - 1][ele.dataset.q]

            
            
            if(right_ans == e.target.value){

                const cause_answer = causes_answers[parseInt(ele.dataset.q.split("q")[1]) - 1][ele.dataset.q]

                const all_answers = Array.from(document.querySelectorAll(".answer"))
                all_answers.forEach((ele)=>{
                    
                    if(!ele.children[0].classList.contains("none_editable")){
                        ele.children[0].disabled = false
                    }
                    
                    
                   
                
            })


                const audio = new Audio() 
                audio.src = getRandomWord(correct_sounds)
                audio.play()
                
                card.style.display = "block";
                
                card.innerHTML = `<div class="x_mark"><i class="fa-solid fa-xmark"></i></div>
                <div style="flex:1"><img class="emoji_img" style="object-fit:contain;" src="${getRandomWord(correct_imgs)}" alt=""></div>
                <div style="flex:3" class="right"><span class="green">${getRandomWord(right_words)} Correct answer.</span> ${cause_answer}</div>`

                document.getElementById(ele.dataset.q+"_rating").style.display = "flex"
                q_array.forEach((radio)=>{
                    radio.children[0].disabled = true
                    radio.children[0].classList.add("none_editable")
                })
                console.log(q_array);

                const x_marks = Array.from(document.querySelectorAll(".x_mark"))
                x_marks.forEach((ele)=>{
                    ele.addEventListener("click",()=>{

                            
                    document.getElementById(card.dataset.btn).style = "block"
                    card.style.display = "none"
                    })
                })

            

               

            }else{

             
                if(card.children.length === 0){
                  
                    const audio = new Audio() 
                    audio.src = "sounds/again/again2.mp3"
                    audio.play()
                    card.style.display = "block";
                   
                    card.innerHTML = ` 
                    <div style="flex:1"><img class="emoji_img" style="object-fit:contain;" src="${getRandomWord(again_imgs)}" alt=""></div>
                    <div class="try_again orange" style="flex:2">${getRandomWord(TryAgain_words)}</div>`
                    element.remove();

                    const all_answers = Array.from(document.querySelectorAll(".answer"))
                    all_answers.forEach((ele)=>{
                        if(!ele.classList.contains(q_num)){
                            ele.children[0].disabled = true
                        }
                    })

                }else{

                    
                    
                    if(card.children[1].classList.contains("try_again")){
                        const all_answers = Array.from(document.querySelectorAll(".answer"))
                        all_answers.forEach((ele)=>{
                            
                                                    
                            if(!ele.children[0].classList.contains("none_editable")){
                                ele.children[0].disabled = false
                            }
                            
                        })

                        const cause_answer = causes_answers[parseInt(ele.dataset.q.split("q")[1]) - 1][ele.dataset.q]

                        const random_index = Math.floor(Math.random() * wrong_short_words.length)
                        const wrong_short = wrong_short_words[random_index];
                        const wrong_long = wrong_long_words[random_index]
                        const audio = new Audio() 
                        audio.src = getRandomWord(wrong_sounds)
                        audio.play()
                        
                        card.style.display = "block";
                        
                        card.innerHTML = `<div class="x_mark"><i class="fa-solid fa-xmark"></i></div>
                        <div style="flex:1"><img class="emoji_img" style="object-fit:contain;" src="${getRandomWord(wrong_imgs)}" alt=""></div>
                        <div class="wrong" style="flex:2"><span class="red">${wrong_short}</span> <span class="black">${wrong_long}</span> <span class="blue">"${right_ans}"</span> ${cause_answer} </div>`
    
                        document.getElementById(ele.dataset.q+"_rating").style.display = "flex"
                        q_array.forEach((radio)=>{
                            radio.children[0].disabled = true
                            radio.children[0].classList.add("none_editable")
                        })
    
                        const x_marks = Array.from(document.querySelectorAll(".x_mark"))
                        x_marks.forEach((ele)=>{
                            ele.addEventListener("click",()=>{

                                    
                            document.getElementById(card.dataset.btn).style = "block"
                            card.style.display = "none"
                            })
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
        
        document.getElementById(e.currentTarget.dataset.card).style.display = "block"
        ele.style.display = "none"
    })
})



const rating = Array.from(document.querySelectorAll(".rating"))

rating.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        
        const color_name = e.currentTarget.className.split("_")[1];

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



