const canvas = document.getElementById("gamecanvas"),
      ctx = canvas.getContext("2d");

let vector = [2, 2];

function move(pos) {
    ctx.fillStyle = "white";
    ctx.fillRect (0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "black";
    pos = [pos[0] + vector[0], pos[1] + vector[1]];
    ctx.fillRect(pos[0], pos[1], 10, 10);
    if (pos[0] == 0) vector[0] *= -1;
    else if (pos[0] == canvas.width - 10) vector[0] *= -1;
    if (pos[1] == 0) vector[1] *= -1;
    else if (pos[1] == canvas.height - 10) vector[1] *= -1;
    setTimeout(move, 1, pos);
}
move([0, 0]);
