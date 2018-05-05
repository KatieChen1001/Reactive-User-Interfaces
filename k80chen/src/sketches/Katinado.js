import datGUI from "./dat.gui.min.js";

export default function sketch(t) {
  "use strict";

  class Particle {
    constructor(x, y, z) {
      this.pos = t.createVector(x, y, z);
      this.vel = t.createVector();
      this.acc = t.createVector();
    }

    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }

    applyForce(f) {
      this.acc.add(f);
    }

    flow(angle, maxDesiredVel, maxSteerForce) {
      // rewrite the fromAngle() function to form a new vector
      var desiredX = t.cos(angle);
      var desiredZ = t.sin(angle);
      var desiredVel = t.createVector(desiredX, -0.1, desiredZ);
      // var desiredVel = p5.Vector.fromAngle( angle );
      desiredVel.normalize();
      desiredVel.mult(maxDesiredVel);
      var steerForce = t.p5.Vector.sub(desiredVel, this.vel);
      // console.log(steerForce.y);
      steerForce.limit(maxSteerForce);
      this.applyForce(steerForce);
    }

    checkEdges(planeSize) {
      var EdgeLeft = -planeSize / 2;
      var EdgeRight = planeSize / 2;
      if (
        this.pos.x < EdgeLeft ||
        this.pos.x > EdgeRight ||
        this.pos.z < EdgeLeft ||
        this.pos.z > EdgeRight
      ) {
        this.pos.x = 0;
        this.pos.z = 0;
      }
      if (this.pos.y < 0) {
        this.pos.y = 660;
      }
    }

    display() {
      t.push();
      t.translate(this.pos.x, this.pos.y, this.pos.z);
      t.sphere(2);
      t.pop();
    }
  }

  class ParticleSystem {
    constructor(numOfP, planeSize, planeHeight) {
      this.planeSize = planeSize;
      this.planeHeight = planeHeight;
      this.edge1 = -this.planeSize / 2;
      this.edge2 = this.planeSize / 2;

      this.resolution = 30;

      this.angles = [];

      this.vector = t.createVector();

      this.isExploded = false;

      this.rows = t.ceil(this.planeSize / this.resolution);
      if (this.rows % 2 == 1) {
        this.rows++;
      } else if (this.rows % 2 == 0) {
        this.rows = this.rows;
      }

      this.cols = this.rows;

      this.numOfP = numOfP;

      this.particles = [];
      for (var i = 0; i < this.numOfP; i++) {
        this.particles.push(
          new Particle(
            t.random(this.edge1, this.edge2),
            t.random(0, 660),
            t.random(this.edge1, this.edge2)
          )
        );
      }
    }

    flowField() {
      // push();
      // translate(0, this.planeHeight, 0);

      for (var c = -this.cols / 2; c < this.cols / 2; c++) {
        for (var r = -this.rows / 2; r < this.rows / 2; r++) {
          var x = r * this.resolution + this.resolution / 2;
          var z = c * this.resolution + this.resolution / 2;

          var pos = t.createVector(x, 0, z); // create vector to each grid point

          // find the center point of the grid
          // create a vector to the center point
          var center = t.createVector(0, 0, 0);
          this.vector = t.p5.Vector.sub(center, pos);
          // get the angle of each point pointing to the center
          // + PI/2 to create a spiral / swirl
          var angle = t.atan2(this.vector.z, this.vector.x) + t.PI / 2;
          var index = r + c * this.rows;
          this.angles[index] = angle; // store the angle in angles array

          // ================= debugged Mode ================= //
          // push();
          // translate(x, 0, z);
          // rotateY(-angle);
          // fill(255);
          // box(2, 2, 2);
          // translate(this.resolution / 4, 0, 0);
          // box(this.resolution / 2, 1, 1);
          // pop();
        }
      }
      // pop();
    }

    run(maxDesiredVel, maxSteerForce) {
      for (var i = 0; i < this.particles.length; i++) {
        var p = this.particles[i];
        var r = t.floor(p.pos.x / this.resolution);
        var c = t.floor(p.pos.z / this.resolution);
        var index = r + c * this.rows;
        if (this.isExploded == false) {
          var angleAdj =
            t.map(p.pos.y, 660, 0, 0, -t.PI / 2) + t.random(t.PI / 18);
          p.flow(this.angles[index] + angleAdj, maxDesiredVel, maxSteerForce);
          p.checkEdges(this.planeSize);
        }
        p.update();

        p.display();
        //console.log(p.pos.y);
      }
    }

    explode(maxDesiredVel, maxSteerForce) {
      if (this.isExploded) {
        for (var i = 0; i < this.particles.length; i++) {
          var p = this.particles[i];
          // var heading = p.vel.z/p.vel.x;

          var r = t.floor(p.pos.x / this.resolution);
          var c = t.floor(p.pos.z / this.resolution);
          var index = r + c * this.rows;

          this.angles[index] = t.atan2(this.vector.z, this.vector.x);
          p.flow(this.angles[index], maxDesiredVel, maxSteerForce);
          p.update();
          if (p.pos.x < this.planeSize || p.pos.z < this.planeSize) {
            p.display();
          }
        }
      }
    }

    changeShape(shape) {
      for (var i = 0; i < this.particles.length; i++) {
        var p = this.particles[i];
        p.pos.x += i * shape;
      }
    }
  }

  // Nature of Code Fall 2017 --- NYU Shanghai
  // Final Project: Tornado Simulation
  // Katie Chen

  var canvasSize = 800;
  var resolution = 30;
  var p = [];

  var planeSize = 200;
  var planeHeight = -100;
  var numOfP = 100; // number of particles per plane
  var initLayer = 20;

  // ============================ adding GUI ============================ //
  var params = {
    debugMode: false, //create a debug mode, initialize it as a boolean
    maxDesiredVel: 2,
    maxSteerForce: 0.2,
    viewPointY: -200,
    viewPointZ: -600,
    rotX: 0,
    numOfLayer: 0,

    shapeParameter: 50,

    transform: function() {
      for (var i = 0; i < p.length; i++) {
        p[i].changeShape(params.shapeParameter);
      }
    }
  };

  // const gui = t.dat.gui.GUI();
  // gui.add(params, "numOfLayer").listen();
  // gui.add(params, "maxDesiredVel", 1, 7, 1);
  // gui.add(params, "maxSteerForce", 0.1, 0.7, 0.1);
  // gui.add(params, "rotX", -90, 90, 10);
  // gui.add(params, "viewPointY", -1000, 1000, 50);
  // gui.add(params, "viewPointZ", -1000, 1000, 50);
  // gui.add(params, "shapeParameter", -50, 50, 10);
  // gui.add(params, "transform");

  // const gui = t.dat.gui.GUI();
  t.dat.gui.add(params, "numOfLayer").listen();
  t.dat.gui.add(params, "maxDesiredVel", 1, 7, 1);
  t.dat.gui.add(params, "maxSteerForce", 0.1, 0.7, 0.1);
  t.dat.gui.add(params, "rotX", -90, 90, 10);
  t.dat.gui.add(params, "viewPointY", -1000, 1000, 50);
  t.dat.gui.add(params, "viewPointZ", -1000, 1000, 50);
  t.dat.gui.add(params, "shapeParameter", -50, 50, 10);
  t.dat.gui.add(params, "transform");

  function setup() {
    t.createCanvas(canvasSize, canvasSize, t.WEBGL);

    for (var i = 0; i < initLayer; i++) {
      p.push(
        new ParticleSystem(
          numOfP + i * 10,
          planeSize + i * 30,
          planeHeight + i * 40
        )
      );
      p[i].flowField();
    }
  }

  function draw() {
    t.scale(1, -1, 1); // scale the canvas --- reverse the y-axis
    t.background(0); // background color
    //orbitControl();                         // drag mouse to move around

    t.translate(0, params.viewPointY, params.viewPointZ);
    t.rotateX(t.radians(params.rotX));
    for (var i = 19; i < p.length; i++) {
      p[i].run(params.maxDesiredVel + i * 0.1, params.maxSteerForce);
    }
  }

  function keyPressed() {
    if (t.keyCode === t.ENTER) {
      for (var i = 0; i < p.length; i++) {
        p[i].isExploded = true;
        p[i].explode(5, 2);
      }
    }
  }
}
