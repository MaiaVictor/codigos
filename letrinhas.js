window.onload = () => {
  const main = document.getElementById("main");

  const alph = "abcdefghijklmnopqrstuvwxyz ".split("");

  const keys = document.createElement("div");
  keys.style.padding = "0px 32px";
  keys.style.backgroundColor = "#EEEEEE";
  keys.style.borderBottom = "1px solid #A0A0A0";
  main.appendChild(keys);

  const ptbr = document.createElement("textarea");
  ptbr.style.padding = "8px";
  ptbr.style.width = "100%";
  ptbr.style.height = "64px";
  ptbr.style.fontFamily = "monospace";
  ptbr.style.fontSize = "16px";
  ptbr.style.color = "#505050";
  ptbr.oninput = () => refresh();
  //ptbr.onchange = () => refresh();
  main.appendChild(ptbr);

  const symb = document.createElement("div");
  symb.style.padding = "8px";
  symb.style.width = "100%";
  symb.style.fontFamily = "monospace";
  symb.style.fontSize = "16px";
  symb.style.color = "#505050";
  main.appendChild(symb);

  const refresh = () => {
    symb.innerHTML = "";
    ptbr.value.split("").forEach((key) => {
      if (sprites[key.toLowerCase()]) {
        symb.appendChild(makeSprite("", sprites[key.toLowerCase()]));
      }
    });
  };

  const makeSprite = (() => {
    var memo = {};
    return (key, map) => {
      const str = JSON.stringify(map);
      if (memo[str]) {
        return memo[str];
      }
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.style.cursor = "pointer";
      canvas.style.margin = "6px";
      canvas.width = 32;
      canvas.height = 32;
      canvas.onclick = () => {
        if (key) {
          ptbr.value += key;
          refresh();
        }
      };
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var j = 0; j < 16; ++j) {
        for (var i = 0; i < 16; ++i) {
          if (map[j][i] === "x") {
            ctx.fillStyle = "black";
            ctx.rect(i * 2, j * 2, 2, 2);
            ctx.fill();
          };
        };
      };
      return canvas;
    };
  })();

  const sprites = {
    a: [
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "xxxxxxxxxxxxxxxx"],
    b: [
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "xxxxxxxxxxxxxxxx"],
    c: [
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "xxxxxxxxxxxxxxxx"],
    d: [
      "xxxxxxxxxxxxxxxx",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      " xxxxxxxxxxxxxxx"],
    e: [
      "xxxxxxxxxxxxxxxx",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "xxxxxxxxxxxxxxxx"],
    f: [
      "xxxxxxxxxxxxxxxx",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "xxxxxxxxxxxxxxxx"],
    g: [
      "xxxxxxxxxxxxxxxx",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x"],
    h: [
      "xxxxxxxxxxxxxxxx",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x"],
    i: [
      "xxxxxxxxxxxxxxxx",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               "],
    j: [
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "       xx      x",
      "       xx      x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "xxxxxxxxxxxxxxxx"],
    k: [
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x      xx      x",
      "x      xx      x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "xxxxxxxxxxxxxxxx"],
    l: [
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x      xx       ",
      "x      xx       ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "xxxxxxxxxxxxxxxx"],
    m: [
      "xxxxxxxxxxxxxxxx",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "       xx      x",
      "       xx      x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      " xxxxxxxxxxxxxxx"],
    n: [
      "xxxxxxxxxxxxxxxx",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x      xx      x",
      "x      xx      x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "xxxxxxxxxxxxxxxx"],
    o: [
      "xxxxxxxxxxxxxxxx",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x      xx       ",
      "x      xx       ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "xxxxxxxxxxxxxxxx"],
    p: [
      "xxxxxxxxxxxxxxxx",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "       xx      x",
      "       xx      x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x",
      "               x"],
    q: [
      "xxxxxxxxxxxxxxxx",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x      xx      x",
      "x      xx      x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x",
      "x              x"],
    r: [
      "xxxxxxxxxxxxxxxx",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x      xx       ",
      "x      xx       ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               ",
      "x               "],
    s: [
      "xx              ",
      "  xx            ",
      "    xx          ",
      "      xx        ",
      "        xx      ",
      "          xx    ",
      "            xx  ",
      "              xx",
      "              xx",
      "            xx  ",
      "          xx    ",
      "        xx      ",
      "      xx        ",
      "    xx          ",
      "  xx            ",
      "xx              "],
    t: [
      "x              x",
      "x              x",
      " x            x ",
      " x            x ",
      "  x          x  ",
      "  x          x  ",
      "   x        x   ",
      "   x        x   ",
      "    x      x    ",
      "    x      x    ",
      "     x    x     ",
      "     x    x     ",
      "      x  x      ",
      "      x  x      ",
      "       xx       ",
      "       xx       "],
    u: [
      "       xx       ",
      "       xx       ",
      "      x  x      ",
      "      x  x      ",
      "     x    x     ",
      "     x    x     ",
      "    x      x    ",
      "    x      x    ",
      "   x        x   ",
      "   x        x   ",
      "  x          x  ",
      "  x          x  ",
      " x            x ",
      " x            x ",
      "x              x",
      "x              x"],
    v: [
      "              xx",
      "            xx  ",
      "          xx    ",
      "        xx      ",
      "      xx        ",
      "    xx          ",
      "  xx            ",
      "xx              ",
      "xx             ",
      "  xx            ",
      "    xx          ",
      "      xx        ",
      "        xx      ",
      "          xx    ",
      "            xx  ",
      "              xx"],
    w: [
      "xx              ",
      "  xx            ",
      "    xx          ",
      "      xx        ",
      "        xx      ",
      "          xx    ",
      "            xx  ",
      "       xx     xx",
      "       xx     xx",
      "            xx  ",
      "          xx    ",
      "        xx      ",
      "      xx        ",
      "    xx          ",
      "  xx            ",
      "xx              "],
    x: [
      "x              x",
      "x              x",
      " x            x ",
      " x            x ",
      "  x          x  ",
      "  x          x  ",
      "   x        x   ",
      "   x   xx   x   ",
      "    x  xx  x    ",
      "    x      x    ",
      "     x    x     ",
      "     x    x     ",
      "      x  x      ",
      "      x  x      ",
      "       xx       ",
      "       xx       "],
    y: [
      "       xx       ",
      "       xx       ",
      "      x  x      ",
      "      x  x      ",
      "     x    x     ",
      "     x    x     ",
      "    x      x    ",
      "    x  xx  x    ",
      "   x   xx   x   ",
      "   x        x   ",
      "  x          x  ",
      "  x          x  ",
      " x            x ",
      " x            x ",
      "x              x",
      "x              x"],
    z: [
      "              xx",
      "            xx  ",
      "          xx    ",
      "        xx      ",
      "      xx        ",
      "    xx          ",
      "  xx            ",
      "xx     xx       ",
      "xx     xx       ",
      "  xx            ",
      "    xx          ",
      "      xx        ",
      "        xx      ",
      "          xx    ",
      "            xx  ",
      "              xx"],
    " ": [
      "                ",
      "                ",
      "                ",
      "                ",
      "                ",
      "                ",
      "                ",
      "                ",
      "                ",
      "                ",
      "                ",
      "                ",
      "                ",
      "                ",
      "                ",
      "                "]
  };

  alph.forEach((c) => keys.appendChild(makeSprite(c, sprites[c])));
  

};
