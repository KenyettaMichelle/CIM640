<!DOCTYPE html>
<html>

<head>
    <title>My App</title>

    <style>
        /* Enter CSS below */
    </style>

 </head>


<body>
    <!-- HTML Comment -->
    <h1>My App</h1>

    <p><i>Description goes here</i></p>

<form>
<label for="licks">Enter Number id="licks:</label">
    <input type="text" name="licks" id="licks">
    
    <button type "button" id="lButton"> Enter Licks</button>


</form>

<div id="output"></div>



<script>
/*Comment: Enter code below */

    function centerOfPop(){ //console.log("This is working")

                           var licksAmount = document.getElementById("licks").value;
                           
                           console.log("Licks amount:" + licksAmount);
                            var lickRatio = licksAmount/averageLicks * 100;
                           
                           //console.log(lickRatio);
                           
                           lickRatio = Math.round(lickRatio);

        var message = "You have gone: " + lickRatio + "% of the way!";
        console.log(message);
    
    var outputText = document.getElementById("output");
    outputText.innerHTML = message;

    
}
  


var averageLicks = 252;


var getButton = document.getElementById("lButton");
//console.log(getButton);
<br><br>


getButton.addEventListener("click", centerOfPop);

//get input


</script>


</body>

</html>