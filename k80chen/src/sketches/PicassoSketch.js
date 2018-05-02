// Programing Design Systems Fall 2017
// NYU Shanghai IMA
// Katie Chen - "Artists Reduced --- Pablo Picasso"

export default function sketch(picasso) {
  const canvasSize = 500;
  // ==================== body parameter ==================== //
  const PicassoHeight = canvasSize * 2 / 5; // height of the body rectangle
  const PicassoWidth = PicassoHeight / 2; // width of the body rectangle

  // ==================== eye parameters ==================== //
  const EyeSize = PicassoHeight * 0.1; // eye - outer square
  const eyeSize = EyeSize / 2; // eye - inner square
  const spaceBetweenEye = EyeSize * 3 / 2;

  // ==================== ear parameters ==================== //
  const earW = spaceBetweenEye * 1.5;
  const earH = earW * 2 / 3;

  // ================== colors parameters =================== //
  const bgColor = ["#c2a4ff", "#ffc2a4", "#e1ffa4", "#17c8b2"];
  // const bodyColor = [];
  const hatColor = ["#5d336c", "#083249"];
  const earColor = ["#d1ead6", "#721f1e", "#386b39"];
  const bodyEarNose = ["#de7fb6", "#e37d70", "#ee1846", "#e64927", "#0284ce"];
  const legColor = ["#5d336c", "#258c94"];

  let ramBgClr = picasso.floor(picasso.random(4));
  let ramBodyClr = picasso.floor(picasso.random(2));
  let ramHat = picasso.random(0.9);
  let ramNoseClr = picasso.floor(picasso.random(5));
  let ramLegClr = picasso.floor(picasso.random(2));
  let ramEarBtmClr = picasso.floor(picasso.random(4));
  let ramEarClr = picasso.floor(picasso.random(2));

  picasso.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.ramBgClr) {
      ramBgClr = props.ramBgClr;
    }

    if (props.ramBodyClr) {
      ramBodyClr = props.ramBodyClr;
    }

    if (props.ramHat) {
      ramHat = props.ramHat;
    }

    if (props.ramNoseClr) {
      ramNoseClr = props.ramNoseClr;
    }
    if (props.ramLegClr) {
      ramLegClr = props.ramLegClr;
    }

    if (props.ramEarBtmClr) {
      ramEarBtmClr = props.ramEarBtmClr;
    }

    if (props.ramEarClr) {
      ramEarClr = props.ramEarClr;
    }
  };

  picasso.setup = function() {
    picasso.createCanvas(canvasSize, canvasSize);
    picasso.background(picasso.color(bgColor[ramBgClr]));
    picasso.translate(picasso.width / 2, picasso.height / 2);
    picasso.noStroke();

    // ===================== drawing the body --- two colors of body ===================== //
    picasso.rectMode(picasso.CENTER);
    let bodyclr = ramBodyClr;
    // let bodyEarNoseclr = picasso.floor(picasso.random(5));
    picasso.fill(picasso.color(bodyEarNose[bodyclr]));
    picasso.rect(0, 0, PicassoWidth, PicassoHeight);

    // ===================== draw hat -- three types of hats ===================== //
    let whichHat = ramHat;
    if (whichHat < 0.3) {
      // Jazz hat
      const hatclr = picasso.random(1) > 0.5;
      if (hatclr) {
        picasso.fill(picasso.color(hatColor[0]));
      } else {
        picasso.fill(picasso.color(hatColor[1]));
      }
      picasso.rect(
        0,
        -1 * PicassoHeight / 4 - spaceBetweenEye,
        PicassoWidth * 1.7,
        eyeSize * 1.2
      );
      picasso.rect(
        0,
        -1 * PicassoHeight / 4 - spaceBetweenEye - EyeSize,
        PicassoWidth * 1.1,
        EyeSize * 2
      );
    } else if (whichHat > 0.3 && whichHat < 0.6) {
      // rectangle hat
      const hatclr = picasso.random(1) > 0.5;
      if (hatclr) {
        picasso.fill(picasso.color(hatColor[0]));
      } else {
        picasso.fill(picasso.color(hatColor[1]));
      }
      picasso.rect(
        0,
        -1 * PicassoHeight / 4 - spaceBetweenEye * 2,
        PicassoWidth * 1.2,
        spaceBetweenEye * 2
      );
    } else if (whichHat > 0.6 && whichHat < 0.9) {
      // trapezoid hat
      const hatclr = picasso.random(1) > 0.5;
      if (hatclr) {
        picasso.fill(picasso.color(hatColor[0]));
      } else {
        picasso.fill(picasso.color(hatColor[1]));
      }
      // const trapezoidHatHeight = spaceBetweenEye * 3;
      picasso.beginShape();
      picasso.vertex(
        -1 * PicassoWidth * 1.3 / 2,
        -1 * PicassoHeight / 4 - spaceBetweenEye
      );
      picasso.vertex(
        PicassoWidth * 1.3 / 2,
        -1 * PicassoHeight / 4 - spaceBetweenEye
      );
      picasso.vertex(
        PicassoWidth * 0.8 / 2,
        -1 * PicassoHeight / 4 - spaceBetweenEye * 3
      );
      picasso.vertex(
        -1 * PicassoWidth * 0.8 / 2,
        -1 * PicassoHeight / 4 - spaceBetweenEye * 3
      );
      picasso.endShape(picasso.CLOSE);
    }

    // ===================== draw right ear ===================== //
    picasso.fill(picasso.color("#ffda01"));
    picasso.rect(PicassoWidth / 2 + earH * 1.2 / 2, 0, earH * 1.2, earW * 1.2);

    // ===================== draw nose ===================== //
    let noseclr = ramNoseClr;
    while (noseclr === bodyclr) {
      noseclr = picasso.floor(picasso.random(5));
    }
    picasso.fill(picasso.color(bodyEarNose[noseclr]));
    const noseW = PicassoWidth * 1.2;
    const noseH = spaceBetweenEye * 1.7;
    picasso.rect(
      PicassoWidth * 0.1,
      -1 * PicassoHeight / 4 + spaceBetweenEye,
      noseW,
      noseH
    );

    // ===================== draw eyes --- two eyes or one eye ===================== //
    const numOfEyes = picasso.random(1) > 0.5;
    if (numOfEyes) {
      // two eyes
      picasso.fill(255);
      picasso.rect(
        0 - spaceBetweenEye / 2,
        -1 * PicassoHeight / 4,
        EyeSize,
        EyeSize
      );
      picasso.rect(
        0 + spaceBetweenEye / 2,
        -1 * PicassoHeight / 4,
        EyeSize,
        EyeSize
      );
      picasso.fill(0);
      picasso.rect(
        0 - spaceBetweenEye / 2,
        -1 * PicassoHeight / 4,
        eyeSize,
        eyeSize
      );
      picasso.rect(
        0 + spaceBetweenEye / 2,
        -1 * PicassoHeight / 4,
        eyeSize,
        eyeSize
      );
    } else {
      // one eye
      picasso.fill(255);
      picasso.rect(0, -1 * PicassoHeight / 4, EyeSize, EyeSize);
      picasso.fill(0);
      picasso.rect(0, -1 * PicassoHeight / 4, eyeSize, eyeSize);
    }

    // ===================== draw legs ===================== //
    const leg1 = spaceBetweenEye * 3;
    const leg2 = spaceBetweenEye * 1.7;
    const legW = spaceBetweenEye;
    let legclr = picasso.floor(picasso.random(2));
    // left leg
    picasso.fill(picasso.color(legColor[legclr]));
    picasso.beginShape();
    picasso.vertex(-PicassoWidth / 2, PicassoHeight / 2 - leg1);
    picasso.vertex(-PicassoWidth / 2, PicassoHeight / 2);
    picasso.vertex(-PicassoWidth / 2 + legW, PicassoHeight / 2);
    picasso.vertex(-PicassoWidth / 2 + legW, PicassoHeight / 2 - leg2);
    picasso.endShape(picasso.CLOSE);
    // right leg
    legclr = picasso.floor(picasso.random(2));
    picasso.fill(picasso.color(legColor[legclr]));
    picasso.beginShape();
    picasso.vertex(PicassoWidth / 2, PicassoHeight / 2 - leg1);
    picasso.vertex(PicassoWidth / 2, PicassoHeight / 2);
    picasso.vertex(PicassoWidth / 2 - legW, PicassoHeight / 2);
    picasso.vertex(PicassoWidth / 2 - legW, PicassoHeight / 2 - leg2);
    picasso.endShape(picasso.CLOSE);

    // ===================== draw left ear! ===================== //
    picasso.fill(picasso.color(earColor[2]));
    // ear top
    picasso.rect(
      -PicassoWidth / 2 - earW / 2 + 0.25 * earW,
      -1 * PicassoHeight / 4,
      earW,
      earH
    );
    // ear bottom
    let earBtmclr = picasso.floor(picasso.random(4));
    while (earBtmclr === bodyclr || earBtmclr === noseclr) {
      earBtmclr = picasso.floor(picasso.random(4));
    }
    picasso.fill(picasso.color(bodyEarNose[earBtmclr]));
    picasso.rect(-PicassoWidth / 2 + 0.25 * earW, 0, earW * 2, earH * 2);
    // ear middle
    const earclr = picasso.floor(picasso.random(2));
    picasso.fill(picasso.color(earColor[earclr]));
    picasso.rect(
      -PicassoWidth / 2 - earW / 2 + 0.25 * earW,
      -1 * PicassoHeight / 4 + earH / 2,
      earH,
      earW
    );

    // ===================== draw mouth ===================== //
    const mouthW = PicassoWidth * 0.6;
    const mouthH = mouthW * 0.15;
    picasso.fill(picasso.color("#721f1e"));
    picasso.rect(PicassoWidth * 0.2, spaceBetweenEye * 0.6, mouthW, mouthH);
  };
}
