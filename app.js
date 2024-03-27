let type_writer = document.getElementById('typewriter');

let typewriter = new Typewriter(type_writer, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString('A Developer')
  .pauseFor(2000)
  .deleteChars(9)
  .typeString('<span id="colored-dark">Coder</span>')
  .pauseFor(2000)
  .deleteChars(5)
  .typeString('<span id="colored">Future Engineer</span>')
  .pauseFor(2000)
  .start();



let scrollBtn = document.getElementById('scrollBtn');
scrollBtn.addEventListener('click', () => {
    let targetSection = document.getElementById('skills');
    skills.scrollIntoView({behavior : 'smooth'})
})