function bank() {
    const option = prompt('Enter Q to quit, W to withdraw, D to deposit, or B to view balance ');
    let balance = 25000;
    switch (option) {
        case 'Q':
            alert('You quit');
            break;
        case 'W': {
            const amount = prompt('Enter an amount to withdraw');
            alert('You are withdrawing: $' + amount);
            const option = prompt('Enter Q to quit, W to withdraw, D to deposit, or B to view balance ');
        }
        break;
        case 'D': {
            const amount = prompt('Enter an amount to deposit');
            alert('You are depositing: $' + amount);
            const option = prompt('Enter Q to quit, W to withdraw, D to deposit, or B to view balance ');
        }
        break;
        case 'B': {
            alert('Your balance is: $' + balance);
            const option = prompt('Enter Q to quit, W to withdraw, D to deposit, or B to view balance ');
        }
        break;
        default:
            alert('Sorry');
            const option = prompt('Enter Q to quit, W to withdraw, D to deposit, or B to view balance ');
        break;

    }

}