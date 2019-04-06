var wins = 0;
var losses = 0;



var addition = 0;

var total = Math.floor( (Math.random() * 100) + 19);

var BlueCrystal = Math.floor(  (Math.random() * 12) + 1);
var PurpleCrystal = Math.floor(  (Math.random() * 12) + 1);
var LightCrystal = Math.floor(  (Math.random() * 12) + 1);
var PinkCrystal = Math.floor(  (Math.random() * 12) + 1);

var updateAddition = function(){
$('.addition').empty();
$('.addition').append(addition);
$('#wins').empty();
$('#wins').append(wins);
$('#losses').empty();
$('#losses').append(losses);

}


var restart = function(){
     addition = 0;
     
     total = Math.floor( (Math.random() * 100) +19);

     $('.total').empty();
     $('.total').append(total);

     BlueCrystal = Math.floor(  (Math.random() * 12) + 1);
     PurpleCrystal = Math.floor(  (Math.random() * 12) + 1);
     LightCrystal = Math.floor(  (Math.random() * 12) + 1);
     PinkCrystal = Math.floor(  (Math.random() * 12) + 1);

     updateAddition();


}

var logic = function(){
   if(addition === total){
       wins = wins + 1;

       restart();
   
    }else if(addition > total){
        losses = losses + 1;

        restart();
    
    }else{
        updateAddition();
    }
}

$('.total').append(total);

$('.addition').append(addition);

$(document). ready(function(){
$('#Blue-Crystal').click(function(){
    addition = addition + BlueCrystal;
    logic();
})

$('#Purple-Crystal').click(function(){
    addition = addition + PurpleCrystal;
    logic();
})

$('#Light-Crystal').click(function(){
    addition = addition + LightCrystal;
    logic();
})

$('#Pink-Crystal').click(function(){
    addition = addition + PinkCrystal;
    logic();
})


});