// Programming Design Systems Fall 2017
// NYU Shanghai IMA
// Katie Chen - "Artists Reduced -- Malevinch"

export default function sketch(Malevinch) {
  const canvasSize = 500;

  // draw lines
  const minlinelen = canvasSize / 4;
  const maxlinelen = canvasSize * 3 / 4;
  const area1 = canvasSize * 0.25;
  let lineCounter = 0;
  let numOfLines;

  // draw rect
  const maxRect = canvasSize / 6;
  const minRect = maxRect / 4;
  const area2 = canvasSize * 0.35;
  let rectCounter = 0;
  let numOfRect;

  // draw circle
  const maxCir = canvasSize / 8;
  const minCir = maxRect / 4;
  const area3 = canvasSize * 0.45;
  let cirCounter = 0;
  let numOfCir;

  // color palettes
  const bgColor = ["#e0d6bd", "#fee1b3"];
  const shapeColor = [
    "#8a502f",
    "#e6a415",
    "#324f6b",
    "#a04130",
    "#373352",
    "#2a292d",
    "#083249"
  ];

  Malevinch.setup = function() {
    Malevinch.createCanvas(canvasSize, canvasSize);

    Malevinch.background(
      Malevinch.color(bgColor[Malevinch.floor(Malevinch.random(2))])
    );
    Malevinch.noStroke();
    Malevinch.translate(Malevinch.width / 2, Malevinch.height / 2);

    numOfLines = Malevinch.floor(canvasSize / 500);
    numOfRect = numOfLines + 2;
    numOfCir = numOfLines - 2;

    while (lineCounter <= numOfLines) {
      Malevinch.drawline(
        Malevinch.random(-area1, area1),
        Malevinch.random(-area1, area1),
        minlinelen,
        maxlinelen
      );
      lineCounter++;
    }

    while (rectCounter <= numOfRect) {
      Malevinch.drawRect(
        Malevinch.random(-area2, area2),
        Malevinch.random(-area2, area2),
        minRect,
        maxRect
      );
      rectCounter++;
    }

    while (cirCounter <= numOfCir) {
      Malevinch.drawCircle(
        Malevinch.random(-area3, area3),
        Malevinch.random(-area3, area3),
        minCir,
        maxCir
      );
      cirCounter++;
    }
  };

  Malevinch.drawline = function(x, y, minlinelen, maxlinelen) {
    Malevinch.push();
    Malevinch.translate(x, y);
    Malevinch.rectMode(Malevinch.CENTER);
    const h = Malevinch.map(Malevinch.random(1), 0, 1, minlinelen, maxlinelen);
    const w = minlinelen * 0.05;
    const angle = Malevinch.map(Malevinch.random(1), 0, 1, 0, 180);
    Malevinch.rotate(Malevinch.radians(angle));
    Malevinch.fill(shapeColor[Malevinch.floor(Malevinch.random(7))]);
    // alpha(100);
    Malevinch.rect(0, 0, h, w);
    Malevinch.pop();
  };

  Malevinch.drawRect = function(x, y, minRect, maxRect) {
    Malevinch.push();
    Malevinch.translate(x, y);
    Malevinch.rectMode(Malevinch.CENTER);
    const h = Malevinch.map(Malevinch.random(1), 0, 1, minRect, maxRect);
    const w = h * Malevinch.random(1, 1.2);
    const angle = Malevinch.map(Malevinch.random(1), 0, 1, 0, 180);
    Malevinch.rotate(Malevinch.radians(angle));
    Malevinch.fill(shapeColor[Malevinch.floor(Malevinch.random(7))]);
    Malevinch.rect(0, 0, h, w);
    Malevinch.pop();
  };

  Malevinch.drawCircle = function(x, y, minCir, maxCir) {
    Malevinch.push();
    Malevinch.translate(x, y);
    const r = Malevinch.map(Malevinch.random(1), 0, 1, minRect, maxRect);
    Malevinch.fill(shapeColor[Malevinch.floor(Malevinch.random(7))]);
    Malevinch.ellipse(0, 0, r, r);
    Malevinch.pop();
  };
}
