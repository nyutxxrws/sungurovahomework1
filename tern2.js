function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);

    let resIf = '';
    if (a > 10) {
        resIf = 'a is bigger than 10';
    } else {
        resIf = 'a is less than or equal to 10 ';
        if (a === 5) {
            resIf = resIf + 'an example of a special case';
        }
    }
    if (a === 15) {
        resIf = resIf + 'but a is not 15';
    }
    if (a > 5) {
        resIf = resIf + 'and a is greater than 5';
    } else {
        resIf = resIf + 'and a is less than or equal to 5 ';
    }
    if (a % 2) {
        resIf = resIf + ' and a is odd';
    } else {
        resIf = resIf + ' and a is even';
    }
    console.log(resIf);

    let resSw = '';
    switch (true) {
        case (a > 10):
            resSw = 'a is bigger than 10';
            break;
        default:
            resSw = 'a is less than or equal to 10 ';
            if (a === 5) {
                resSw = resSw + 'an example of a special case';
            }
    }
    if (a === 15) {
        resSw = resSw + 'but a is not 15';
    }
    if (a > 5) {
        resSw = resSw + 'and a is greater than 5';
    } else {
        resSw = resSw + 'and a is less than or equal to 5 ';
    }
    if (a % 2) {
        resSw = resSw + ' and a is odd';
    } else {
        resSw = resSw + ' and a is even';
    }
    console.log(resSw);
}

manyChecks();