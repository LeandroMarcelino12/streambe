function triplicador(num) {
    return num*3;
}
function multiplicador(num1,num2) {
    return num1*num2;
}
function division(num1,num2){
    return num1/num2;
}
function resto(num1,num2){
    return num1-num2;
}
console.log(division(multiplicador(triplicador(5),12),12)%3)