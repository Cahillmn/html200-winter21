let bankOpen = true;
let balance = 1000;

while (bankOpen) {
    const option = prompt('Enter Q to quit, W to withdraw, D to deposit, or B to view balance ');
    switch (option) {
        case 'Q':
            alert('You quit');
            bankOpen = false;
            break;
        case 'B':
            alert('Your balance is: $' + balance);
            break;
        case 'W':
            const amountWithdrawn = prompt('How much do you want to withdraw?');
            if (balance - Number(amountWithdrawn) < 0 ) {
              alert('You have exceeded your available balance');  
            } else {(balance = balance - Number(amountWithdrawn));
            alert('You are withdrawing: $' + amountWithdrawn + ' your remaining balance is: $' + balance);
            }
            break;
        case 'D':
            const depositAmount = prompt('How much do you want to deposit?');
            balance = balance + Number(depositAmount);
            alert('You are depositing: $' + depositAmount + ' your total balance is: $' + balance)
            break;
        default:
            alert('Sorry');
            break;
        }     
    }
    