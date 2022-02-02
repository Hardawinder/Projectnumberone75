/******************************************
*****************************************/



/*** 
 * `quotes` array 
***/
var array=[
    {"quote":"Be yourself; everyone else is already taken.","source":"Oscar Wilde","citation":"www.goodreads.com","year":null }
,    {"quote":"Be the change that you wish to see in the world.","source":"Mahatma Gandhi","citation":"www.goodreads.com","year":"1989"}
,{"quote":"Tomorrow, is the first blank page of a 365 page book. Write a good one.","source":"Braid Paisley","citation":"www.goodreads.com","year":"2015" }
,{"quote":"A new year is a time for inspirational dreams but more importantly a time to set your goals to see the dreams turn into a reality","source":"Samuel Dixon","citation":"pathofex","year":"2000" }
, {"quote":"Be at war with your vices, at peace with your neighbors, and let every new year find you a better man.","source":"Benjamin Franklin","citation":"www.brainyquote.com","year":"1904" }
]


/***
 * `getRandomQuote` function
***/

const getRandomQuote=()=>{
    
    var randomnVariable=Math.floor(array.length*Math.random());

    return array[randomnVariable];
}



/***
 * `printQuote` function
***/
quoteToCompare="";
const printQuote=()=>{

    
    
    var value=""
    ;
    value=getRandomQuote();
    while(quoteToCompare==value){

        console.log("It's same"); //It is just to check that no strings repeats itself again we store
        //previous value of quote to quoteToCompare Variable if it is same then regenerate it
        value=getRandomQuote();
    }
    quoteToCompare=value;
    
   
    var outputQuote=document.querySelector(".quote");
    var outputSource=document.querySelector(".source")
    var outputCitation=document.querySelector("p .citation")
    console.log(value.year);
    
    if(value.quote!=null){

        outputQuote.innerHTML=value.quote;

        if(value.source!=null){
         outputSource.innerHTML=`${value.source}`;
        }
        if(value.citation!=null){
            outputSource.innerHTML+=`<span class="citation"> ${value.citation}</span>`;
        }
        if(value.year!=null){
            outputSource.innerHTML+=`<span class="year"> ${value.year} </span>`
        }

}
}
printQuote();


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById("load-quote").addEventListener("click",function(){
 
    
    
    printQuote();
    
});
