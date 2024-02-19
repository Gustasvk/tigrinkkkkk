let balance = 100;

function startBetting() {
    openModal();
    resetGame();
}

function bet() {
    const betAmount = parseInt(document.getElementById('bet-input').value);

    if (betAmount > balance) {
        alert('Você não tem saldo suficiente para essa aposta.');
        return;
    }

    playGame();

    const winMessage = document.getElementById('win-message');
    const balanceMessage = document.getElementById('balance-message');

    if (winMessage.innerText === 'Parabéns! Você ganhou!') {
        balance += betAmount;
    } else {
        balance -= betAmount;
    }

    updateBalance();
}

function playGame() {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');

    const randomNumber1 = generateRandomNumber();
    const randomNumber2 = generateRandomNumber();
    const randomNumber3 = generateRandomNumber();

    box1.innerText = randomNumber1;
    box2.innerText = randomNumber2;
    box3.innerText = randomNumber3;

    const winMessage = document.getElementById('win-message');

    if (randomNumber1 === randomNumber2 && randomNumber2 === randomNumber3) {
        winMessage.innerText = 'Parabéns! Você ganhou!';
        winMessage.classList.add('win-animation');
    } else {
        winMessage.innerText = 'Quase lá! Tente novamente.';
        winMessage.classList.remove('win-animation');
    }
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 2) + 1;
}

function playAgain() {
    resetGame();
}

function resetGame() {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');
    const winMessage = document.getElementById('win-message');

    box1.innerText = '';
    box2.innerText = '';
    box3.innerText = '';
    winMessage.innerText = '';

    document.getElementById('bet-input').value = '';
}

function openModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function addBalance() {
    const betInput = document.getElementById('bet-input').value;
    if (betInput && !isNaN(betInput) && betInput > 0) {
        balance += parseInt(betInput);
        updateBalance();
    } else {
        alert('Informe um valor válido para adicionar ao saldo.');
    }
}

function updateBalance() {
    const balanceMessage = document.getElementById('balance-message');
    balanceMessage.innerText = `Saldo: $${balance}`;
}
