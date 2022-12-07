let msg1 = document.querySelector(".msg1");
let msg2 = document.querySelector(".msg2");
let msg3 = document.querySelector(".msg3");
let guessed_num = [];
let chance = 10;
let ans = Math.floor(Math.random() * 50) + 1;
console.log(ans);

//play the game
function play() {
    let guess_num = Number(document.getElementById("guess_num").value);
    let status = document.getElementById("status-div");
    let alert = document.querySelector(".alert");
    //guess num check
    if (guess_num < 1 || guess_num > 50) {
        alert.innerHTML =
            `
            <h4 class="alert-text">Your number is not between 1 and 50!</h4>
        `;
        msg1.innerText = "";
        chance--;
        msg2.innerText = "Number of chance to guess:" + chance;
        guessed_num.push(guess_num);
        msg3.innerText = "Guessed numbers are: " + guessed_num;
        status.classList.add("wrong");
        document.getElementById("guess_num").value = "";
    } else {
        alert.innerHTML = "";
        //answer the game!
        if (guess_num === ans) {
            msg1.style.color = "blue";
            msg1.innerText = "Finally, You win in number guess game!";
            chance--;
            msg2.innerText = "Number of chance to guess: " + chance;
            guessed_num.push(guess_num);
            msg3.innerText = "Guessed numbers are: " + guessed_num;
            status.classList.add("true");
            document.querySelector(".btn-guess").disabled = true;
        } else {
            msg1.style.color = "red";
            msg1.innerText = "Please, guess the number again!";
            chance--;
            msg2.innerText = "Number of chance to guess:" + chance;
            guessed_num.push(guess_num);
            msg3.innerText = "Guessed numbers are: " + guessed_num;
            status.classList.add("wrong");
            document.getElementById("guess_num").value = "";
        }

        //chance check
        if (chance <= 0) {
            document.querySelector(".btn-guess").disabled = true;
            restart();
        }
    }
}

function restart() {
    ans = Math.floor(Math.random() * 50) + 1;
    console.log(ans);
    document.querySelector(".btn-guess").disabled = false;
    document.getElementById("guess_num").value = "";
    msg1.style.color = "green ";
    msg1.innerText = "Your game is successfully restart!!";
    chance = 10;
    msg2.innerText = "Number of chance to guess: " + chance;
    guessed_num = [];
    msg3.innerText = "Guessed numbers are: " + guessed_num;

    //remove border color
    let status = document.getElementById("status-div");
    status.classList.remove("true");
    status.classList.remove("wrong");

    let alert = document.querySelector(".alert");
    alert.innerHTML = "";
}