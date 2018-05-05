// "Miniature Artists -- Piet Mondrian"
// All Rights Reserved

export default function sketch(Mondrian) {
  const canvasSize = 500; // size of canvas
  const brush = 1500 * 0.001; // strokeWeight
  const MondrianColor = ["#fff001", "#ff0101", "#0101fd"];

  Mondrian.setup = function() {
    Mondrian.createCanvas(canvasSize, canvasSize);
    Mondrian.background(255);
    Mondrian.strokeWeight(brush);
    Mondrian.stroke(0);

    Mondrian.MondrianDraw(0, 0, canvasSize, canvasSize);
  };

  Mondrian.MondrianDraw = function(x, y, w, h) {
    const colorIt = Mondrian.random(1) > 0.5;

    const drawSquare = Mondrian.random(1) > 0.5; // greater than 0.5: draw square; less than 0.5: draw rectangle
    const newW = Mondrian.random(0.5, 0.8);
    const newH = Mondrian.random(0.7, 0.9);

    if (colorIt) {
      if (MondrianColor.length > 0) {
        const whichColor = Mondrian.floor(
          Mondrian.random(MondrianColor.length)
        );
        Mondrian.fill(Mondrian.color(MondrianColor[whichColor]));
        MondrianColor.splice(whichColor, 1);
      } else {
        Mondrian.fill(255);
      }
    } else {
      Mondrian.fill(255);
    }

    Mondrian.rect(x, y, w, h);

    if (drawSquare && w > canvasSize / 6 && h > canvasSize / 12) {
      Mondrian.MondrianDraw(x, y, w * newW, h * newW);
      Mondrian.MondrianDraw(
        x + w * newW,
        y + h * newW,
        w * (1 - newW),
        h * (1 - newW)
      );
    } else if (!drawSquare && h > canvasSize / 4 && w > canvasSize / 12) {
      Mondrian.MondrianDraw(x, y, w, h * newH);
      Mondrian.MondrianDraw(x, y + h * newH, w, h * (1 - newH));
    }
  };
}
