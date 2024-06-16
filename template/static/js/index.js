const timer = document.querySelector('#time-viwer');
const quesitions_items = document.querySelector('.quesition-items ol');
const table_th = document.querySelector('.answer .box table thead tr');
const table_td_span = document.querySelector('.answer .box table tbody tr');

let time_limit = ( (3*60) + (0) )*60 + (0) ; // ((hours*60) + (minutes))*60 + (seconds)

function countDown(){
    time_limit--;
    let hours = Math.floor(time_limit/3600);
    let minutes = Math.floor(time_limit/60)%60;
    let seconds = time_limit%60;
    let text = `Tugash vaqti ${hours}:${minutes}:${seconds}`
    if(time_limit < 0 ){
        alert('Vaqt ugadi !');
        clearInterval(time_dispatcher);
        text = 'Vaqt tugadi';
    }
    timer.innerHTML = text;
}
const time_dispatcher = setInterval(countDown,1000);
let dataText = `[{
    "question": "English is ______ international language.",
    "answer1": "a",
    "answer2": "an",
    "answer3": "the",
    "answer4": "*",
    "correct": "an"
  },
  {
    "question": "Milan is ______ Italian city.",
    "answer1": "a",
    "answer2": "an",
    "answer3": "the",
    "answer4": "*",
    "correct": "an"
  },
  {
    "question": "A JVC is ______ Japanese camera",
    "answer1": "a",
    "answer2": "an",
    "answer3": "the",
    "answer4": "*",
    "correct": "a"
  },
  {
    "question": "I have two ______ .",
    "answer1": "sister",
    "answer2": "sisters",
    "answer3": "a sister",
    "answer4": "sister's",
    "correct": "sisters"
  },
  {
    "question": "It’s ______ Spanish orange.",
    "answer1": "a",
    "answer2": "an",
    "answer3": "the",
    "answer4": "*",
    "correct": "a"
  },
  {
    "question": "It’s ______ green apple.",
    "answer1": "a",
    "answer2": "an",
    "answer3": "the",
    "answer4": "*",
    "correct": "a"
  }
]`;
let dataJson ;

  function insertQuesition(question,a,b,c,d,id){

    let joinHtmlQuesition = `<li><div class="item" id="question-${id}">
                                        <div class="question">
                                            <p>${question}</p>
                                        </div>
                                        <div class="variants">
                                                <p >
                                                    <input type="radio" name="b1-${id}" id="b1-${id}-a" >
                                                    <label for="b1-${id}-a">${a}</label>
                                                </p>
                                                <p>
                                                    <input type="radio" name="b1-${id}" id="b1-${id}-b">
                                                    <label for="b1-${id}-b">${b}</label>
                                                </p>
                                                <p>
                                                    <input type="radio" name="b1-${id}" id="b1-${id}-c">
                                                    <label for="b1-${id}-c">${c}</label>
                                                </p>
                                                <p>
                                                    <input type="radio" name="b1-${id}" id="b1-${id}-d">
                                                    <label for="b1-${id}-d">${d}</label>
                                                </p>
                                        </div>
                                    </div></li>`;
    let joinTableNumber = `<th>${id}</th>`;
    let joinTableSpan = `<td><a href="#question-${id}"><span id="span-${id}" ></span></a></td>`;
    quesitions_items.insertAdjacentHTML('beforeend',joinHtmlQuesition);
    table_th.insertAdjacentHTML('beforeend',joinTableNumber);
    table_td_span.insertAdjacentHTML('beforeend',joinTableSpan);
    return true;
  }
function generateData(){
    for(let i = 0 ;i < dataJson.length;i++){
        insertQuesition(dataJson[i].question,dataJson[i].answer1,dataJson[i].answer2,dataJson[i].answer3,dataJson[i].answer4,i+1)
    }
}
var answer_data = {};
$(document).ready(function(){
    dataJson = $.parseJSON(dataText)
    generateData()
    $('.quesition-items input').on('click',function(event){
        let main_id = $(this).attr('id');
        let current_id = main_id.split("-")[1];
        let temp_span = '#span-'+current_id;
        console.log('salom',main_id);
        $(temp_span).css("background-color", "green");
        event.stopPropagation();
        // event.preventDefault();
        console.log(answer_data[main_id.split("-").join('_')])
        answer_data['quesition_'+current_id] = main_id;
        console.log('ok',answer_data)
    })
});
