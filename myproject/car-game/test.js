//unused script code for game development

//sources: https://github.com/CreateJS/AdobeAnimateDemo

/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ping Pong Game</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #222;
            color: white;
            font-family: Arial, sans-serif;
        }
        #gameWindow {
            width: 600px;
            height: 400px;
            background-color: black;
            position: relative;
            overflow: hidden;
            border: 4px solid white;
        }
        .paddle {
            width: 10px;
            height: 80px;
            background-color: white;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
        #leftPaddle { left: 10px; }
        #rightPaddle { right: 10px; }
        .ball {
            width: 15px;
            height: 15px;
            background-color: white;
            position: absolute;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .controls {
            margin-top: 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 5px;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
        }
        #restart { background-color: green; }

        .close-button {
            display: inline-block;
            padding: 10px 20px;
            margin: 5px;
            color: white;
            background-color: red;
            border: none;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h2>Choose Your Side</h2>
    <button class="button" id="leftSide" style="background-color: blue;">Left (Blue)</button>
    <button class="button" id="rightSide" style="background-color: red;">Right (Red)</button>
    
    <div id="gameContainer" class="hidden">
        <div id="gameWindow">
            <div id="leftPaddle" class="paddle"></div>
            <div id="rightPaddle" class="paddle"></div>
            <div class="ball" id="ball"></div>
        </div>
        <div class="controls">
            <button class="button" id="restart">Restart</button>
            <button class="close-button" onclick="closeGame()">Close</button>
        </div>
        <h3>Score: <span id="score">0 - 0</span></h3>
    </div>

    <script>
        let playerPaddle, botPaddle, ball, playerScore = 0, botScore = 0, maxScore = 20;
        let ballX = 300, ballY = 200, ballSpeedX = 4, ballSpeedY = 4;
        let playerY = 200, botY = 200;
        let playerSide = "left";
        let gameActive = false;
        
        document.getElementById("leftSide").addEventListener("click", function() {
            startGame("left");
        });
        
        document.getElementById("rightSide").addEventListener("click", function() {
            startGame("right");
        });

        function startGame(side) {
            playerSide = side;
            document.getElementById("gameContainer").classList.remove("hidden");
            document.querySelector("h2").classList.add("hidden");
            document.getElementById("leftSide").classList.add("hidden");
            document.getElementById("rightSide").classList.add("hidden");
            
            playerPaddle = document.getElementById(side === "left" ? "leftPaddle" : "rightPaddle");
            botPaddle = document.getElementById(side === "left" ? "rightPaddle" : "leftPaddle");
            
            gameActive = true;
            gameLoop();
        }

        document.addEventListener("mousemove", function(event) {
            let rect = document.getElementById("gameWindow").getBoundingClientRect();
            let y = event.clientY - rect.top - 40;
            playerPaddle.style.top = `${Math.max(0, Math.min(320, y))}px`;
        });
        
        function gameLoop() {
            if (!gameActive) return;

            ballX += ballSpeedX;
            ballY += ballSpeedY;

            if (ballY <= 0 || ballY >= 385) ballSpeedY *= -1;
            if (ballX <= 20 && ballY >= playerPaddle.offsetTop && ballY <= playerPaddle.offsetTop + 80) ballSpeedX *= -1;
            if (ballX >= 570 && ballY >= botPaddle.offsetTop && ballY <= botPaddle.offsetTop + 80) ballSpeedX *= -1;
            
            if (ballX <= 0) {
                botScore++;
                resetBall();
            }
            if (ballX >= 600) {
                playerScore++;
                resetBall();
            }
            
            botPaddle.style.top = `${ballY - 40}px`;
            document.getElementById("ball").style.left = `${ballX}px`;
            document.getElementById("ball").style.top = `${ballY}px`;
            document.getElementById("score").textContent = `${playerScore} - ${botScore}`;
            
            if (playerScore >= maxScore || botScore >= maxScore) {
                alert(playerScore >= maxScore ? "You Win!" : "Bot Wins!");
                resetGame();
            } else {
                requestAnimationFrame(gameLoop);
            }
        }
        
        function resetBall() {
            ballX = 300;
            ballY = 200;
            ballSpeedX *= -1;
        }
        
        function resetGame() {
            playerScore = 0;
            botScore = 0;
            resetBall();
        }
        
        function closeGame() {
            window.close();
        }
    </script>
</body>
</html>*/
