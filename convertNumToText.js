let result = '';
let num = 126;
let oneNum = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
let tensNum = [ 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninty'];
let toIntArray = (num) => ([...num + ""].map(Number)); //convert integer to array of digits
num = toIntArray(num);
for(i=num.length; i>=0; i--) {
    if(i === (num.length-1)) {
       result = oneNum[num[i]-1];
    }
    if(i === (num.length-2)) {
        result = tensNum[num[i]-2]+ ' ' + result;
    }
    if(i === (num.length-3)) {
        result = oneNum[num[i]-1] + ' Hundred ' + result;
    }
}
console.log('result: ', result);