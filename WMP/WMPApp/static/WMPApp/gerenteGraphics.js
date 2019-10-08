    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var ctx2 = canvas.getContext("2d");
    ctx.moveTo(0, 270);
    ctx.lineTo(100, 170);
    ctx2.fillRect(95,165,10,10)
    ctx.lineTo(200, 300);
    ctx2.fillRect(195,295,10,10)
    ctx.lineTo(300, 240);
    ctx2.fillRect(295,235,10,10)
    ctx.lineTo(400, 180);
    ctx2.fillRect(395,175,10,10)
    ctx.lineTo(500, 190);
    ctx2.fillRect(495,185,10,10)
    ctx.lineTo(600, 140);
    ctx2.fillRect(595,135,10,10)
    ctx.lineTo(700, 40);
    ctx2.font = "30px Arial";
    ctx2.fillText("Tareas cumplidas", 5, 50)
    ctx.strokeStyle = "#83D4FF";
    ctx.stroke();
