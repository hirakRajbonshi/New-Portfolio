const NO_PART = 100;
const PART_COLOR = '#ffffff'
const PART_SPEED = 1;
const PART_SIZE = 2;

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
//center shifted
ctx.translate(canvas.width/2, canvas.height/2);

//MOUSE POSITION
let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/100)*(canvas.width/100)
}
window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});


let particles = [];

class Particle {
    constructor(x, y, theta, u, v, vx, vy, orgSize, size) {
        this.x = x;
        this.y = y;
        this.theta = theta;
        this.u = u;
        this.v = v;
        this.vx = vx,
        this.vy = vy;
        this.orgSize = orgSize;
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 0.7*(this.size), 0, 2*Math.PI);
        ctx.fillStyle = PART_COLOR;
        ctx.fill();
        ctx.arc(this.x, this.y, 2*(this.size), 0, 2*Math.PI);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
    }

    update() {

        if(this.size < 3) {
            this.size += 0.005;
        }
        if(this.x > canvas.width/2 || this.x < -canvas.width/2) {
            this.x = Math.random()*20-10;
            this.y = Math.random()*20-10;
            this.size = this.orgSize;
        }
        if(this.y > canvas.height/2 || this.y < -canvas.height/2) {
            this.x = Math.random()*20-10;
            this.y = Math.random()*20-10;
            this.size = this.orgSize;
        }
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
    }
}
const randomSign = () => {
    return Math.random() > 0.5 ? 1 : -1;
}
const initializer = () => {
    for(let i = 0; i < NO_PART; i++) {
        let x = (Math.random()*canvas.width/2) * randomSign();
        let y = (Math.random()*canvas.height/2) * randomSign();
        let theta = 0;
        if(x > 0 && y > 0) {
            theta = Math.random()*0.5*Math.PI;
        } else if(x < 0 && y > 0) {
            theta = Math.random()*0.5*Math.PI + Math.PI/2;
        } else if(x < 0 && y < 0) {
            theta = Math.random()*0.5*Math.PI + Math.PI;
        } else {
            theta = Math.random()*0.5*Math.PI + 3*Math.PI/2;
        }
        let u = PART_SPEED*Math.random();
        let vx = u*Math.cos(theta);
        let vy = u*Math.sin(theta);
        let size = PART_SIZE*Math.random();
        particles.push(new Particle(x, y, theta, u, u, vx, vy, size, size))
    }
}

let isScrolling;

let speedMove = () => {
    clearTimeout(isScrolling);
    canvas.style.backgroundColor = 'rgb(4, 4, 4)';
    isScrolling = setTimeout(() => {
        for(let i = 0; i < NO_PART; i++) {
            particles[i].v = particles[i].u;
            particles[i].vx = particles[i].v*Math.cos(particles[i].theta);
            particles[i].vy = particles[i].v*Math.sin(particles[i].theta);
            initializer();
        canvas.style.backgroundColor = 'rgb(0, 0, 0)';
        }
        isScrolling = false;
    }, 100)
    for(let i = 0; i < NO_PART; i++) {
        if(particles[i].v < 3) {
            particles[i].v *= 1.1;
            particles[i].vx = particles[i].v*Math.cos(particles[i].theta);
            particles[i].vy = particles[i].v*Math.sin(particles[i].theta);
        }
    }
}
window.addEventListener("mousemove", speedMove)
window.addEventListener("scroll", speedMove)




const animate = () => {
    if(isScrolling) {
        requestAnimationFrame(animate);
    } else {
        requestAnimationFrame(animate);
    }
    ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
    for(let i = 0; i < NO_PART; i++) {
        particles[i].update();
    }
}
initializer();
animate();

window.addEventListener("resize", () => {
    canvas.width = this.innerWidth;
    canvas.height = this.innerHeight;
});