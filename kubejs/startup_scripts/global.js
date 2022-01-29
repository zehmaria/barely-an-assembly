// priority: 1000
const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];

var hiding = [];
function hide1(X) { X.forEach(Z => hiding.push(Z)); }
function hide2(A, X) { X.forEach(Z => hiding.push(A + Z)); }
function hide3(A, X, B) { X.forEach(Z => hiding.push(A + Z + B)); }
function hide4(A, X, B, Y) { X.forEach(Z => Y.forEach(W => hiding.push(A + Z + B + W))); }
function hide5(A, X, B, Y, C) { X.forEach(Z => Y.forEach(W => hiding.push(A + Z + B + W + C))); }
global.hiding = hiding;
