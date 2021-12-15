"use strict";

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var s9xYve4TpIeWbeylj = /*#__PURE__*/function () {
  function s9xYve4TpIeWbeylj(qYyahUImhVTLxXDq5, A7iIsBGr5DZUDEQcn, EeKbFLD3uWF73RNh6) {
    var _this = this;

    _classCallCheck(this, s9xYve4TpIeWbeylj);

    window.fps = qYyahUImhVTLxXDq5;
    this.A7iIsBGr5DZUDEQcn = A7iIsBGr5DZUDEQcn;
    this.EeKbFLD3uWF73RNh6 = EeKbFLD3uWF73RNh6;
    this.atOjfn_fvSiBbqBi3 = null;
    this.F0t4HpmBwa_fcVgYE = {};
    this.Z6y8lJxSBQfLFAJ6S = {};
    this.DTW9NOhIRq9vAhVf$ = document.querySelector('#id-canvas');
    this.lN$m9N2LWTb7I7Xvm = document.querySelector('#id-canvas-2');
    this.In50WRiFsKjTOpxTj = this.DTW9NOhIRq9vAhVf$.getContext('2d');
    this.E1rdi9vvvZ2gcmi$n = this.lN$m9N2LWTb7I7Xvm.getContext('2d');
    this.globalAlpha = 0.001;
    var fHKzgrUrQ2MpUFS_j = this;
    window.addEventListener('keydown', function (qMmZRx6GbKbv23BOa) {
      _this.Z6y8lJxSBQfLFAJ6S[qMmZRx6GbKbv23BOa.key] = true;
    });
    window.addEventListener('keyup', function (qMmZRx6GbKbv23BOa) {
      fHKzgrUrQ2MpUFS_j.Z6y8lJxSBQfLFAJ6S[qMmZRx6GbKbv23BOa.key] = false;
    });
    this.zvY_iWdJioH5Jb5MF();
  }

  _createClass(s9xYve4TpIeWbeylj, [{
    key: "XmpSOkXHKkEM8_8j$",
    value: function XmpSOkXHKkEM8_8j$(VXKTCIQyvDvHT4G4F) {
      var cqeGRSbI04Ni3Vo7L = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var ifm9yUCRi5Yd_L8sF = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (VXKTCIQyvDvHT4G4F.UMwZ6l4rObHoH6XOr) {
        this.In50WRiFsKjTOpxTj.drawImage(VXKTCIQyvDvHT4G4F.ILkYGYCBKV_VyM6$r, cqeGRSbI04Ni3Vo7L, ifm9yUCRi5Yd_L8sF, VXKTCIQyvDvHT4G4F.UMwZ6l4rObHoH6XOr, VXKTCIQyvDvHT4G4F.k$SQ9qUDr5$WcH7a2, VXKTCIQyvDvHT4G4F.cqeGRSbI04Ni3Vo7L, VXKTCIQyvDvHT4G4F.ifm9yUCRi5Yd_L8sF, VXKTCIQyvDvHT4G4F.UMwZ6l4rObHoH6XOr, VXKTCIQyvDvHT4G4F.k$SQ9qUDr5$WcH7a2);
      } else {
        this.In50WRiFsKjTOpxTj.drawImage(VXKTCIQyvDvHT4G4F.ILkYGYCBKV_VyM6$r, VXKTCIQyvDvHT4G4F.cqeGRSbI04Ni3Vo7L, VXKTCIQyvDvHT4G4F.ifm9yUCRi5Yd_L8sF);
      }
    }
  }, {
    key: "x4qgd$OTjxkbuorqK",
    value: function x4qgd$OTjxkbuorqK(VXKTCIQyvDvHT4G4F) {
      var cqeGRSbI04Ni3Vo7L = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var ifm9yUCRi5Yd_L8sF = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (VXKTCIQyvDvHT4G4F.UMwZ6l4rObHoH6XOr) {
        this.E1rdi9vvvZ2gcmi$n.drawImage(VXKTCIQyvDvHT4G4F.ILkYGYCBKV_VyM6$r, cqeGRSbI04Ni3Vo7L, ifm9yUCRi5Yd_L8sF, VXKTCIQyvDvHT4G4F.UMwZ6l4rObHoH6XOr, VXKTCIQyvDvHT4G4F.k$SQ9qUDr5$WcH7a2, VXKTCIQyvDvHT4G4F.cqeGRSbI04Ni3Vo7L, VXKTCIQyvDvHT4G4F.ifm9yUCRi5Yd_L8sF, VXKTCIQyvDvHT4G4F.UMwZ6l4rObHoH6XOr, VXKTCIQyvDvHT4G4F.k$SQ9qUDr5$WcH7a2);
      } else {
        this.E1rdi9vvvZ2gcmi$n.drawImage(VXKTCIQyvDvHT4G4F.ILkYGYCBKV_VyM6$r, VXKTCIQyvDvHT4G4F.cqeGRSbI04Ni3Vo7L, VXKTCIQyvDvHT4G4F.ifm9yUCRi5Yd_L8sF);
      }
    }
  }, {
    key: "H1DceJPCBOELBL0wX",
    value: function H1DceJPCBOELBL0wX() {
      this.atOjfn_fvSiBbqBi3.H1DceJPCBOELBL0wX();
    }
  }, {
    key: "HdbqFraxMqP0Whqnd",
    value: function HdbqFraxMqP0Whqnd() {
      this.atOjfn_fvSiBbqBi3.HdbqFraxMqP0Whqnd();
    }
  }, {
    key: "DprxaffWUms1yInMp",
    value: function DprxaffWUms1yInMp(XJkn5zaV1cnNGEq72, eehFW7ZfUPDtd1Xga) {
      this.F0t4HpmBwa_fcVgYE[XJkn5zaV1cnNGEq72] = eehFW7ZfUPDtd1Xga;
    }
  }, {
    key: "Q8TEQZEmwI_CLLAmS",
    value: function Q8TEQZEmwI_CLLAmS() {
      var hxHeH9umORze_4Lzk = this;
      var F0t4HpmBwa_fcVgYE = Object.keys(hxHeH9umORze_4Lzk.F0t4HpmBwa_fcVgYE);

      for (var P5vaOKnohK8gPmH23 = 0; P5vaOKnohK8gPmH23 < F0t4HpmBwa_fcVgYE.length; P5vaOKnohK8gPmH23++) {
        var XJkn5zaV1cnNGEq72 = F0t4HpmBwa_fcVgYE[P5vaOKnohK8gPmH23];

        if (hxHeH9umORze_4Lzk.Z6y8lJxSBQfLFAJ6S[XJkn5zaV1cnNGEq72]) {
          hxHeH9umORze_4Lzk.F0t4HpmBwa_fcVgYE[XJkn5zaV1cnNGEq72]();
        }
      }

      hxHeH9umORze_4Lzk.H1DceJPCBOELBL0wX();
      hxHeH9umORze_4Lzk.In50WRiFsKjTOpxTj.clearRect(0, 0, hxHeH9umORze_4Lzk.DTW9NOhIRq9vAhVf$.width, hxHeH9umORze_4Lzk.DTW9NOhIRq9vAhVf$.height);

      if (this.globalAlpha !== 0.001) {
        hxHeH9umORze_4Lzk.E1rdi9vvvZ2gcmi$n.globalAlpha = this.globalAlpha;
      } else {
        hxHeH9umORze_4Lzk.E1rdi9vvvZ2gcmi$n.globalAlpha = 0.001;
        hxHeH9umORze_4Lzk.E1rdi9vvvZ2gcmi$n.clearRect(0, 0, hxHeH9umORze_4Lzk.lN$m9N2LWTb7I7Xvm.width, hxHeH9umORze_4Lzk.lN$m9N2LWTb7I7Xvm.height);
      }

      hxHeH9umORze_4Lzk.HdbqFraxMqP0Whqnd();
      setTimeout(function () {
        hxHeH9umORze_4Lzk.Q8TEQZEmwI_CLLAmS();
      }, 1000 / window.fps);
    }
  }, {
    key: "jDi6HanScqtNLIEBX",
    value: function jDi6HanScqtNLIEBX(l5YQQCDFKunBHbpyz) {
      var hxHeH9umORze_4Lzk = this;
      var VXKTCIQyvDvHT4G4F = hxHeH9umORze_4Lzk.A7iIsBGr5DZUDEQcn[l5YQQCDFKunBHbpyz];

      if (l5YQQCDFKunBHbpyz.startsWith('ball_')) {
        var ILkYGYCBKV_VyM6$r = {
          _4grgN$w3LdAz6gxQ: VXKTCIQyvDvHT4G4F.width,
          Ff5wrdacHLY2q92ly: VXKTCIQyvDvHT4G4F.height,
          UMwZ6l4rObHoH6XOr: 32,
          k$SQ9qUDr5$WcH7a2: 32,
          ILkYGYCBKV_VyM6$r: VXKTCIQyvDvHT4G4F
        };
        return ILkYGYCBKV_VyM6$r;
      } else if (l5YQQCDFKunBHbpyz.startsWith('boom')) {
        var ILkYGYCBKV_VyM6$r = {
          _4grgN$w3LdAz6gxQ: VXKTCIQyvDvHT4G4F.width,
          Ff5wrdacHLY2q92ly: VXKTCIQyvDvHT4G4F.height,
          UMwZ6l4rObHoH6XOr: 85,
          k$SQ9qUDr5$WcH7a2: 85,
          ILkYGYCBKV_VyM6$r: VXKTCIQyvDvHT4G4F
        };
        return ILkYGYCBKV_VyM6$r;
      } else if (l5YQQCDFKunBHbpyz.startsWith('skeleton_inside')) {
        var ILkYGYCBKV_VyM6$r = {
          _4grgN$w3LdAz6gxQ: VXKTCIQyvDvHT4G4F.width,
          Ff5wrdacHLY2q92ly: VXKTCIQyvDvHT4G4F.height,
          UMwZ6l4rObHoH6XOr: 88,
          k$SQ9qUDr5$WcH7a2: 88,
          ILkYGYCBKV_VyM6$r: VXKTCIQyvDvHT4G4F
        };
        return ILkYGYCBKV_VyM6$r;
      } else if (l5YQQCDFKunBHbpyz.startsWith('light')) {
        var ILkYGYCBKV_VyM6$r = {
          _4grgN$w3LdAz6gxQ: VXKTCIQyvDvHT4G4F.width,
          Ff5wrdacHLY2q92ly: VXKTCIQyvDvHT4G4F.height,
          UMwZ6l4rObHoH6XOr: 64,
          k$SQ9qUDr5$WcH7a2: 64,
          ILkYGYCBKV_VyM6$r: VXKTCIQyvDvHT4G4F
        };
        return ILkYGYCBKV_VyM6$r;
      } else if (l5YQQCDFKunBHbpyz.startsWith('digits')) {
        var ILkYGYCBKV_VyM6$r = {
          _4grgN$w3LdAz6gxQ: VXKTCIQyvDvHT4G4F.width,
          Ff5wrdacHLY2q92ly: VXKTCIQyvDvHT4G4F.height,
          UMwZ6l4rObHoH6XOr: 15,
          k$SQ9qUDr5$WcH7a2: 20,
          ILkYGYCBKV_VyM6$r: VXKTCIQyvDvHT4G4F
        };
        return ILkYGYCBKV_VyM6$r;
      } else {
        if (!VXKTCIQyvDvHT4G4F) {
          fDffVYUG0xtqXVu$p('name', l5YQQCDFKunBHbpyz);
        }

        var ILkYGYCBKV_VyM6$r = {
          _4grgN$w3LdAz6gxQ: VXKTCIQyvDvHT4G4F.width,
          Ff5wrdacHLY2q92ly: VXKTCIQyvDvHT4G4F.height,
          ILkYGYCBKV_VyM6$r: VXKTCIQyvDvHT4G4F
        };
        return ILkYGYCBKV_VyM6$r;
      }
    }
  }, {
    key: "gZa$_1yMyyIC2NLPv",
    value: function gZa$_1yMyyIC2NLPv(atOjfn_fvSiBbqBi3) {
      var hxHeH9umORze_4Lzk = this;
      hxHeH9umORze_4Lzk.atOjfn_fvSiBbqBi3 = atOjfn_fvSiBbqBi3;
      setTimeout(function () {
        hxHeH9umORze_4Lzk.Q8TEQZEmwI_CLLAmS();
      }, 1000 / window.fps);
    }
  }, {
    key: "wv0FxjRZMX1opD7df",
    value: function wv0FxjRZMX1opD7df(atOjfn_fvSiBbqBi3) {
      this.atOjfn_fvSiBbqBi3 = atOjfn_fvSiBbqBi3;
    }
  }, {
    key: "AkRoUTH_waRbJj6Af",
    value: function AkRoUTH_waRbJj6Af(atOjfn_fvSiBbqBi3) {
      this.EeKbFLD3uWF73RNh6(this);
    }
  }, {
    key: "zvY_iWdJioH5Jb5MF",
    value: function zvY_iWdJioH5Jb5MF() {
      var hxHeH9umORze_4Lzk = this;
      var C_epawyI6dODFPYf9 = [];
      var PgMwYgRbBKxVId4KZ = Object.keys(hxHeH9umORze_4Lzk.A7iIsBGr5DZUDEQcn);

      var _loop = function _loop() {
        var l5YQQCDFKunBHbpyz = PgMwYgRbBKxVId4KZ[P5vaOKnohK8gPmH23];
        ld88_zK4WWI8sRojl = hxHeH9umORze_4Lzk.A7iIsBGr5DZUDEQcn[l5YQQCDFKunBHbpyz];
        var VXKTCIQyvDvHT4G4F = new Image();
        VXKTCIQyvDvHT4G4F.src = ld88_zK4WWI8sRojl;

        VXKTCIQyvDvHT4G4F.onload = function () {
          hxHeH9umORze_4Lzk.A7iIsBGr5DZUDEQcn[l5YQQCDFKunBHbpyz] = VXKTCIQyvDvHT4G4F;
          C_epawyI6dODFPYf9.push(1);

          if (C_epawyI6dODFPYf9.length == PgMwYgRbBKxVId4KZ.length) {
            hxHeH9umORze_4Lzk.AkRoUTH_waRbJj6Af();
          }
        };
      };

      for (var P5vaOKnohK8gPmH23 = 0; P5vaOKnohK8gPmH23 < PgMwYgRbBKxVId4KZ.length; P5vaOKnohK8gPmH23++) {
        var ld88_zK4WWI8sRojl;

        _loop();
      }
    }
  }], [{
    key: "mSZRgxWplq3ZEZ4Vr",
    value: function mSZRgxWplq3ZEZ4Vr() {
      for (var _len = arguments.length, Bwkkr_ikov$rBRxVw = new Array(_len), _key = 0; _key < _len; _key++) {
        Bwkkr_ikov$rBRxVw[_key] = arguments[_key];
      }

      this.P5vaOKnohK8gPmH23 = this.P5vaOKnohK8gPmH23 || _construct(this, Bwkkr_ikov$rBRxVw);
      return this.P5vaOKnohK8gPmH23;
    }
  }]);

  return s9xYve4TpIeWbeylj;
}();