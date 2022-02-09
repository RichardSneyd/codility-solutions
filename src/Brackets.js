// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    if (S.length == 0) return 1;
    const stack = new Stack();
    const openers = '{[(';
    const closers = '}])';
    const correctCloser = (o, c) => {
        return openers.indexOf(o) === closers.indexOf(c) ? true : false;
    }
    for (let i = 0; i < S.length; i++) {
        if (openers.includes(S[i])) {
            stack.push(S[i])
        }
        else if (closers.includes(S[i])) {
            if (correctCloser(stack.getHead(), S[i])) {
                stack.pop();
            }
            else {
                return 0;
            }
        }
    }

    return +(stack.size() < 1);
}

function Stack() {
    const stack = [];
    let size = 0;
    this.push = (val) => {
        stack.push(val);
        size++;
    }
    this.pop = () => {
        size--;
        return stack.pop();
    }
    this.size = () => {
        return size;
    }
    this.getHead = () => {
        return stack[size - 1];
    }
    this.print = () => {
        console.log(stack);
    }
}