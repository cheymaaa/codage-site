window.onload = function () {
  function $(param) {
    if (arguments[1] == true) {
      return document.querySelectorAll(param);
    } else {
      return document.querySelector(param);
    }
  }
  var $box1 = $(".box-1 ul li", true);
  var $box3 = $(".box-3");
  var $length = $box1.length;

  var current = 0;
  var timer;
  timer = setInterval(go, 1000);
  function go() {
    for (var j = 0; j < $length; j++) {
      $box1[j].style.display = "none";
      // $box2.children[j].className = "";
    }
    if ($length == current) {
      current = 0;
    }
    $box1[current].style.display = "block";
    // $box2.children[current].className = "on";
    current++;
  }

  for (var k = 0; k < $length; k++) {
    $box1[k].onmouseover = function () {
      clearInterval(timer);
    };
    $box1[k].onmouseout = function () {
      timer = setInterval(go, 1000);
    };
  }
  for (var p = 0; p < $box3.children.length; p++) {
    $box3.children[p].onmouseover = function () {
      clearInterval(timer);
    };
    $box3.children[p].onmouseout = function () {
      timer = setInterval(go, 1000);
    };
  }
  $box3.children[0].onclick = function () {
    back();
  };
  $box3.children[1].onclick = function () {
    go();
  };
  function back() {
    for (var j = 0; j < $length; j++) {
      $box1[j].style.display = "none";
      // $box2.children[j].className = "";
    }
    if (current == 0) {
      current = $length;
    }
    $box1[current - 1].style.display = "block";
    // $box2.children[current-1].className = "on";
    current--;
  }

  nexts();
};

function nexts() {
  function $(param1) {
    if (arguments[1] == true) {
      return document.querySelectorAll(param1);
    } else {
      return document.querySelector(param1);
    }
  }
  var $box1_1 = $(".box-1_1 ul li", true);
  var $box3_1 = $(".box-3_1");
  var $length = $box1_1.length;

  var current = 0;
  var timer;
  timer = setInterval(gos, 1000);
  function gos() {
    for (var j = 0; j < $length; j++) {
      $box1_1[j].style.display = "none";
      // $box2.children[j].className = "";
    }
    if ($length == current) {
      current = 0;
    }
    $box1_1[current].style.display = "block";
    // $box2.children[current].className = "on";
    current++;
  }

  for (var k = 0; k < $length; k++) {
    $box1_1[k].onmouseover = function () {
      clearInterval(timer);
    };
    $box1_1[k].onmouseout = function () {
      timer = setInterval(gos, 1000);
    };
  }
  for (var p = 0; p < $box3_1.children.length; p++) {
    $box3_1.children[p].onmouseover = function () {
      clearInterval(timer);
    };
    $box3_1.children[p].onmouseout = function () {
      timer = setInterval(gos, 1000);
    };
  }
  $box3_1.children[0].onclick = function () {
    backs();
  };
  $box3_1.children[1].onclick = function () {
    gos();
  };
  function backs() {
    for (var j = 0; j < $length; j++) {
      $box1_1[j].style.display = "none";
      // $box2.children[j].className = "";
    }
    if (current == 0) {
      current = $length;
    }
    $box1_1[current - 1].style.display = "block";
    // $box2.children[current-1].className = "on";
    current--;
  }
}
