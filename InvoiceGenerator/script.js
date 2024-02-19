
var invoiceNo;

document.getElementById('invoice-number').addEventListener('keyup', function(){

    invoiceNo=document.getElementById('invoice-number').value
    var showNo = document.getElementById('show-no').innerHTML = invoiceNo

    console.log(invoiceNo)

})

var Nav;
document.getElementById('invoice-to').addEventListener('keyup', function(){

    Nav=document.getElementById('invoice-to').value
    var showName = document.getElementById('show-name').innerHTML = Nav

    console.log(Nav)

})

var mobile;
document.getElementById('mobile').addEventListener('keyup', function(){

    mobile=document.getElementById('mobile').value
    var showMobile = document.getElementById('show-mobile').innerHTML = mobile

    console.log(mobile)

})

var itemMob=0;
var showMobileQuant;
document.getElementById('item-mobile').addEventListener('keyup', function(){

    itemMob=document.getElementById('item-mobile').value
    showMobileQuant = document.getElementById('mob-quant').innerHTML = itemMob

    console.log(itemMob)

})


var mobPrice=10000
var mobAmt = 0;
document.getElementById('item-mobile').addEventListener('keyup', function(){

    mobAmt = itemMob*mobPrice;
    document.getElementById('mob-amount').innerHTML = mobAmt;

    console.log(mobAmt)
    finalTotal();
})

var pcQuant=0;
document.getElementById('item-pc').addEventListener('keyup', function(){

    pcQuant = document.getElementById('item-pc').value
    document.getElementById('pc-quant').innerHTML=pcQuant;
    console.log(pcQuant)
})

var pcPrice = 20000;
var pcAmt=0;
document.getElementById('item-pc').addEventListener('keyup', function(){

    pcAmt=pcQuant*pcPrice;
    document.getElementById('pc-amount').innerHTML=pcAmt
    finalTotal()
})

var comQuant=0;
document.getElementById('item-computer').addEventListener('keyup', function(){
    comQuant=document.getElementById('item-computer').value
    document.getElementById('com-quant').innerHTML=comQuant
})

var comPrice = 30000;
var comAmt=0;
document.getElementById('item-computer').addEventListener('keyup', function(){
    comAmt=comQuant*comPrice;
    document.getElementById('com-amount').innerHTML=comAmt
    finalTotal()
})

var lapQuant=0;
document.getElementById('item-laptop').addEventListener('keyup', function(){
    lapQuant=document.getElementById('item-laptop').value
    document.getElementById('lap-quant').innerHTML=lapQuant
    
})

var lapPrice = 40000;
var lapAmt=0;
document.getElementById('item-laptop').addEventListener('keyup', function(){
    lapAmt=lapPrice*lapQuant
    document.getElementById('lap-amount').innerHTML=lapAmt
    finalTotal()
})

// var finalTotal = 0;
// finalTotal = pcAmt+comAmt+lapAmt+mobAmt;
// console.log(finalTotal)
// document.getElementById('final').addEventListener('click', function(){

//     document.getElementById('final-total').innerHTML=finalTotal
    
// })
var toal=pcAmt+comAmt+lapAmt+mobAmt;
console.log(toal)


function finalTotal(){

    document.getElementById('final-total').innerHTML=pcAmt+comAmt+lapAmt+mobAmt;

}



