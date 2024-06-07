const user1 = prompt("ENTER PLAYER 1");
const user2 = prompt("ENTER PLAYER 2");

const random = Math.random() * 2
const change = Math.floor(random);

if (change === 0) {
    alert(user1 + " " + "WINS");
}

else {
    alert(user2 + " " + "WINS")
}