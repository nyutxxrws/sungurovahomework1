let a = Math.floor(Math.random() * 100);

let resIf;
let t1;
if (a > 10) {
    t1 = a;
} else {
    t1 = a * 2;
}

if (t1 > 5) {
    resIf = (2 * a) + 1;
} else {
    let t2;
    if (a < 3) {
        t2 = 1;
    } else {
        t2 = 2 * (a - 2);
    }
    if (t2 > 4) {
        resIf = 5;
    } else {
        if (a % 2 == 0) {
            resIf = 6;
        } else {
            resIf = 7;
        }
    }
}
console.log(resIf);

let resSw;
let t1s;
if (a > 10) {
    t1s = a;
} else {
    t1s = a * 2;
}

switch (true) {
    case (t1s > 5):
        resSw = (2 * a) + 1;
        break;
    default:
        let t2s;
        if (a < 3) {
            t2s = 1;
        } else {
            t2s = 2 * (a - 2);
        }
        switch (true) {
            case (t2s > 4):
                resSw = 5;
                break;
            default:
                switch (a % 2 == 0) {
                    case true:
                        resSw = 6;
                        break;
                    default:
                        resSw = 7;
                }
        }
}
console.log(resSw);