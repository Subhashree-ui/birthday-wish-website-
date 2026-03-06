function start(){
            let answer = prompt("Who is the most handsome boy in my life? 😏");

            if (answer && answer.toLowerCase() === "jay"){
                document.body.innerHTML=`
                <h1>🎂 Happy Birthday Jay Babu ❤️</h1>
                <img src="cake.jpg" alt= "Jay" >
                <p>Access Granted ✅</p>
                <p>You just unlocked my efforts and love from me 💕</p>
                <p>Stay happy, stay crazy & stay mine 😘</p>
                <h3>🎉 Have an amazing year ahead!</h3>
                <audio id="song" src="love.mp3" autoplay></audio>
                `;
               setInterval(createHeart,300);
            } else {
                alert("❌ Wrong answer! Try again… Think harder 😜");
            }
        }
        function createHeart() {
           const heart = document.createElement("div");
           heart.className = "heart";
           heart.innerHTML = "❤️";
           heart.style.left = Math.random() * 100 + "vw";
           heart.style.fontSize = (Math.random() * 20 + 10) + "px";
           document.body.appendChild(heart);

           setTimeout(() => {
             heart.remove();
       }, 5000);
    }