var leftClick = 0

function hideMenu (){
    var left = document.getElementById('left');
    if(leftClick%2){   
        left.style.display = 'none'
    } else {
        left.style.position = 'absolute'
        left.style.display = 'block'
        left.style.zIndex = '1'
        left.style.width = '300px'
        left.style.height = '700px'
    }
    leftClick++;
}

function make() {
    var aboutMe = document.getElementById('about');
    var pos = 0;
    var opac = 0.1;
    var id = setInterval(frame, 7);
    function frame() {
      if (pos == 120) {
        clearInterval(id);
      } else {
        pos++;
        aboutMe.style.left = pos + 'px';
        if(pos%10==0){
            opac+=0.1;
            aboutMe.style.opacity = opac.toString();
        }
      }
    }
}


function scrollAppear (){
    var anim_edu = document.querySelector('.education');
    var anim_edu_context1 = document.querySelector('.edu_context1');
    var anim_edu_context2 = document.querySelector('.edu_context2');
    var anim_skills = document.querySelector('.skills-context');
    var anim_contact = document.querySelector('.contact');
    var animPos1 = anim_edu.getBoundingClientRect().top;
    var animPos2 = anim_skills.getBoundingClientRect().top;
    var animPos3 = anim_contact.getBoundingClientRect().top;
    var animPos4 = anim_edu_context1.getBoundingClientRect().top;
    var animPos5 = anim_edu_context2.getBoundingClientRect().top;
    var screenPos = window.innerHeight;
    if(animPos1 < screenPos){
        anim_edu.classList.add('appear');
    }
    if(animPos2 < screenPos){
        anim_skills.classList.add('appear');
    }
    if(animPos3 < screenPos){
        anim_contact.classList.add('appear');
    }
    if(animPos4 < screenPos){
        anim_edu_context1.classList.add('edu_context-appear');
    }
    if(animPos5 < screenPos){
        anim_edu_context2.classList.add('edu_context-appear');
    }
}

window.addEventListener('scroll',scrollAppear);


function move(place){
    if(place=='about'){
    var pos = 0;
    var id = setInterval(frame, 1);
    function frame() {
      if (pos == 450) {
        clearInterval(id);
      } else {
        pos=pos+3;
        window.scrollTo(0,pos);
      }
    }
    }
}


function check(){
  var name = document.querySelector('.messenger_name');
  var email = document.querySelector('.messenger_mail');
  var message = document.querySelector('.messenger_message');
  window.history.back();
  window.scrollTo(0, 2300);
  if(name.value == ""){
    name.style.border = '1px solid red';
  }
  if(email.value == ""){
    email.style.border = '1px solid red';
  }
  if(message.value == ""){
    message.style.border = '1px solid red';
  }
}