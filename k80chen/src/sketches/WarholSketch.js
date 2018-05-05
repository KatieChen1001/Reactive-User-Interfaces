// "Miniature Artists -- Andy Warhol"
// All Rights Reserved

export default function sketch(andy) {
  const canvasSize = 500; // size of the canvas
  // const WarholColor = []; //andy warhol color palette
  const h = canvasSize * 3 / 4 * 5 / 12; // height of the can
  const w1 = h * 0.8; // semimajor axis of big ellipse
  const w2 = w1 * 0.7; // semimajor axis of small ellipse
  const k1 = 3; // big ellipse semimajor : semiminor axis ratio
  const k2 = k1 + 1; // small ellipse semimajor : semiminor axis ratio
  const h1 = w1 / k1; // semiminor axic of big ellipse
  const h2 = w2 / k2; // semiminor axic of small ellipse
  const r = h * 0.25; // center circle size
  const brush = canvasSize * 0.001; // strokeWeight

  const WarholColor = [
    { bg: "#f6f035", top: "#202276", bottom: "#8daf26", brand: "#dc222a" },
    { bg: "#1678df", top: "#da1479", bottom: "#f6f035", brand: "#e68124" },
    { bg: "#8daf26", top: "#e68124", bottom: "#f4f5a6", brand: "#da1479" },
    { bg: "#dc222a", top: "#201f24", bottom: "#216b5e", brand: "#f9f9f9" },
    { bg: "#e68124", top: "#78438b", bottom: "#76b5ea", brand: "#da1479" }
  ];

  let ramBgClr = andy.random(5);

  andy.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.ramBgClr) {
      ramBgClr = props.ramBgClr;
      // console.log(ramBgClr);
    }
  };

  andy.setup = function() {
    andy.createCanvas(canvasSize, canvasSize);
    // console.log(ramBgClr);
    let ram = andy.floor(ramBgClr); // random which color palette to choose from
    // initialize color palette
    // lower half of the can will have the same color as the lid

    andy.rectMode(andy.CENTER);
    andy.strokeWeight(brush);
    andy.stroke(0);

    // draw frame
    andy.fill(andy.color(WarholColor[ram].bg));
    andy.rect(
      andy.width / 2,
      andy.height / 2,
      canvasSize - brush,
      canvasSize - brush
    );

    // draw can outline
    andy.push();
    andy.noFill();
    andy.rect(andy.width / 2, andy.height / 2, w1, h);
    andy.pop();

    // draw can lower body --- bottom ellipse with stroke
    andy.fill(andy.color(WarholColor[ram].bottom));
    andy.ellipse(andy.width / 2, andy.height / 2 + h / 2, w1, h1);
    // draw can lower body --- bottom rect no stroke
    andy.push();
    andy.noStroke();
    andy.fill(andy.color(WarholColor[ram].bottom));
    andy.rect(andy.width / 2, andy.height / 2 + h / 4, w1 - brush, h / 2); // strokeWeight offset
    andy.pop();

    // draw can upper body
    andy.push();
    andy.noStroke();
    andy.fill(andy.color(WarholColor[ram].top));
    andy.ellipse(andy.width / 2, andy.height / 2, w1 - brush, h1); // strokeWeight offset
    andy.fill(andy.color(WarholColor[ram].top));
    andy.rect(andy.width / 2, andy.height / 2 - h / 4, w1 - brush, h / 2); // strokeWeight offset
    andy.pop();

    // draw big ellipse
    andy.fill(255);
    andy.ellipse(andy.width / 2, andy.height / 2 - h / 2, w1, h1);

    // draw small ellipse
    andy.fill(andy.color(WarholColor[ram].bottom));
    andy.ellipse(andy.width / 2, andy.height / 2 - h / 2, w2, h2);

    // draw center ellipse
    andy.fill(andy.color(WarholColor[ram].brand));
    andy.ellipse(andy.width / 2, andy.height / 2 + h1 / 2, r, r);
  };

  // p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
  //   if (props.rotation) {
  //     rotation = props.rotation * Math.PI / 180;
  //   }
  // };
  //
  // p.draw = function() {
  //   p.background(100);
  //   p.noStroke();
  //   p.push();
  //   p.rotateY(rotation);
  //   p.box(100);
  //   p.pop();
  // };
}
