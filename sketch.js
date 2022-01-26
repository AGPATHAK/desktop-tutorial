// Simulating Forces
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/Uibl0UE4VH8
// https://thecodingtrain.com/learning/nature-of-code/2.1-simulating-forces.html
// https://editor.p5js.org/codingtrain/sketches/kYWcOmch

let particles = [];

function setup() {
  createCanvas(400, 400);

  //particles.push(new Particle(200, 200));
}

function draw() {
  for (let i = 0; i < 1; i++) {
    particles.push(new Particle(mouseX, mouseY));
    background(100);
  }

  // if (mouseIsPressed) {
  //   let wind = createVector(0.5, 0.5);
  //   particle.applyForce(wind);
  // }

  for (let particle of particles) {
    let gravity = createVector(0.0, 0.1);
    particle.applyForce(gravity);


    particle.update();
    particle.edges();
    particle.show();
  }
  
  // for (let i = particles.length - 1; 0;i--){
  //   if (particles[i].isDead()){
  //     print(i, 'true')
  //     particle.splice(i,1);
  //   }
  //}
  //print(particles.length)
}
