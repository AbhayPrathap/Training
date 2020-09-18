

function alret(){
    
    var pop = confirm("want to resubmit?")
    console.log(pop)
    if(pop ==true){

        setTimeout(function(){
        alert("Resubmission successfull")
        
    
    },3000)}
    else{
        alert("Resubmission failed")
    }
    }

function setSec(){
    var mDate= new Date()
    document.getElementById("ti").innerHTML = "Time is " + mDate.getHours()+':'+ mDate.getMinutes()+':'+ mDate.getSeconds()
}

setInterval(function(){
    setSec()
},1000);