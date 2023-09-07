import logo from './logo.svg';
import './App.css';

function App() {
  function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
            if(isIncreasing){
                caseNumber = parseInt(caseNumber) + 1;
            }
            
    else if(caseNumber > 0){
           caseNumber = parseInt(caseNumber) - 1;
         }
        
        caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const iphoneTotal = getInputvalue('iphone') * 49000;
        const airpodTotal = getInputvalue('airpod') * 8990;
        const ipadTotal = getInputvalue('ipad') * 30000;
        const totalPrice = iphoneTotal + airpodTotal + ipadTotal;

        // update on the html 
        document.getElementById('total-price').innerText = totalPrice;

    }
//airpod
document.getElementById('airpod-plus').addEventListener('click',function(){
upadateCaseNumber('airpod', 8900, true);
});
document.getElementById('airpod-minus').addEventListener('click',function(){
upadateCaseNumber('airpod', 8900, false);
});
//iphone
document.getElementById('iphone-plus').addEventListener('click',function(){
    upadateCaseNumber('iphone',49000, true);
});
document.getElementById('iphone-minus').addEventListener('click',function(){
    upadateCaseNumber('iphone',49000, false);
});
//ipad
document.getElementById('ipad-plus').addEventListener('click',function(){
    upadateCaseNumber('ipad',30000, true);
});
document.getElementById('ipad-minus').addEventListener('click',function(){
    upadateCaseNumber('ipad',30000, false);
});
}

export default App;
