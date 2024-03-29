// alert("It is better at firefox")
let type_writer = document.getElementById('typewriter');

let typewriter = new Typewriter(type_writer, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString('<span id="colored1">A Developer</span>')
  .pauseFor(2000)
  .deleteChars(11)
  .typeString('<span id="colored1">A Coder</span>')
  .pauseFor(2000)
  .deleteChars(7)
  .typeString('<span id="colored1">A Future Engineer</span>')
  .pauseFor(2000)
  .start();



let scrollBtn = document.getElementById('scrollBtn');
scrollBtn.addEventListener('click', () => {
    let targetSection = document.getElementById('skills');
    targetSection.scrollIntoView({behavior : 'smooth'})
})


let leaveMsgBtn = document.getElementById('leaveMsgBtn');
leaveMsgBtn.addEventListener('click', () => {
  let targetSection = document.getElementById('contact');
  targetSection.scrollIntoView({behavior : 'smooth'})
})

let viewProjectBtn = document.getElementById('viewProjectBtn');
viewProjectBtn.addEventListener('click', () => {
  let targetSection = document.getElementById('projects');
  targetSection.scrollIntoView({behavior : 'smooth'})
})



let skills = document.getElementById('skills');
let skillsPos = skills.offsetTop;
let projects = document.getElementById('projects');
let projectsPos = projects.offsetTop;


let getBottomScrollPosition = () => document.documentElement.scrollHeight - window.innerHeight;


document.addEventListener('scroll', () => {
  // let scrollPosTop = window.scrollY;
  // let scrollPosBot = getBottomScrollPosition();
  // console.log(scrollPosTop);
  // console.log(scrollPosBot);
  
  // if(scrollPosBot >= skillsPos) {
  //   console.log('working');
  //     let h1 = document.getElementsByClassName('h1');
  //     h1.classList.add('animate1')
  // }
})