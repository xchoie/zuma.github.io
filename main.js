"use strict";

var avcwsjc1vklUl8_9r = function avcwsjc1vklUl8_9r(p4z5Opi6WPTBsITTh, bpuaTaATZt0fevaY4) {
  bpuaTaATZt0fevaY4 = bpuaTaATZt0fevaY4 - 1;
  var Ugv5X7Pzdd$IR_9SV = jp6bNCtg70C_F6lDS["map".concat(bpuaTaATZt0fevaY4)].IX4ne88LY2PyS0B4r;
  var d8VPBioxbaP9pTZHI = [];

  for (var P5vaOKnohK8gPmH23 = 0; P5vaOKnohK8gPmH23 < Ugv5X7Pzdd$IR_9SV.length; P5vaOKnohK8gPmH23++) {
    var FESKLsOCY9qk4VdPB = Ugv5X7Pzdd$IR_9SV[P5vaOKnohK8gPmH23];
    var Rcrz86S04GPLYy_sA = new yHfMJFPlc_LfWNdeA(FESKLsOCY9qk4VdPB);
    d8VPBioxbaP9pTZHI.push(Rcrz86S04GPLYy_sA);
  }

  return d8VPBioxbaP9pTZHI;
};

var d8VPBioxbaP9pTZHI = [];

var iVSCWh9_B42ijrUWe = function iVSCWh9_B42ijrUWe(p4z5Opi6WPTBsITTh, zwbvHkVsISxzYlSL1) {
  if (!zwbvHkVsISxzYlSL1) {
    return;
  }

  window.paused = false;
  window.addEventListener('keydown', function (qMmZRx6GbKbv23BOa) {
    var ILSV1UoXkSM3$6k83 = qMmZRx6GbKbv23BOa.key;

    if (ILSV1UoXkSM3$6k83 === 'p') {
      window.paused = !window.paused;
    } else if ('12345678'.includes(ILSV1UoXkSM3$6k83)) {
      d8VPBioxbaP9pTZHI = avcwsjc1vklUl8_9r(Number(ILSV1UoXkSM3$6k83));
    }
  });
  document.querySelector('#id-input-speed').addEventListener('input', function (qMmZRx6GbKbv23BOa) {
    var jr4LhdIBngMkIZXao = qMmZRx6GbKbv23BOa.target;
    window.fps = Number(jr4LhdIBngMkIZXao.value);
  });
};

var SVDRJeRoGcKYYfaVx = function SVDRJeRoGcKYYfaVx() {
  var A7iIsBGr5DZUDEQcn = {
    stage_5: 'img/地图/map5.jpg',
    ball_0: 'img/balls/blue.png',
    ball_1: 'img/balls/green.png',
    ball_2: 'img/balls/purple.png',
    ball_3: 'img/balls/yellow.png',
    ball_4: 'img/balls/red.png',
    ball_5: 'img/balls/white.png',
    paddle: 'img/paddle.png',
    paddle_fire: 'img/paddle_fire.png',
    boom: 'img/boom/boom.png',
    skeleton_outside: 'img/skeleton/ia_100000000097.png',
    skeleton_ring: 'img/skeleton/ring.png',
    skeleton_inside: 'img/skeleton/skeleton_once.png',
    light: 'img/闪光/闪光.png',
    score: 'img/score.png',
    digits: 'img/digits2.png',
    add: 'img/add.png',
    effect_0: 'img/blue.png',
    effect_1: 'img/green.png',
    effect_2: 'img/purple.png',
    effect_3: 'img/yellow.png'
  };
  var p4z5Opi6WPTBsITTh = s9xYve4TpIeWbeylj.mSZRgxWplq3ZEZ4Vr(30, A7iIsBGr5DZUDEQcn, function (hxHeH9umORze_4Lzk) {
    var lLHts9hvTSvM0xdAe = XFivkVCpJS8NkZzPG(p4z5Opi6WPTBsITTh);
    hxHeH9umORze_4Lzk.gZa$_1yMyyIC2NLPv(lLHts9hvTSvM0xdAe);
  });
  iVSCWh9_B42ijrUWe(p4z5Opi6WPTBsITTh, true);
};

SVDRJeRoGcKYYfaVx();