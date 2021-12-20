    var slider = document.getElementById("finalgradeSlider");
    var slider2 = document.getElementById("classgradeSlider");
    var output = document.getElementById("testgrade");
    var output2 = document.getElementById("classgrade");

    var curGrade
    var finalWeight

    var ninety = 90



    slider.oninput = function() {
        output.innerHTML = slider.value;
        output2.innerHTML = ((slider.value * finalWeight / 100) + ((1 - finalWeight / 100) * curGrade)).toFixed(2)
    }

    document.getElementById("button").addEventListener("click",
        function() {
            curGrade = document.getElementById("currentGradeBox").value
            finalWeight = document.getElementById("percentBox").value


            if (curGrade.charAt(curGrade.length - 1) == '%') {
                curGrade = curGrade.slice(0, curGrade.length - 2)
            }

            if (finalWeight.charAt(finalWeight.length - 1) == '%') {
                finalWeight = finalWeight.slice(0, finalWeight.length - 2)
            }

            //to combat stupid
            if (curGrade.charAt(0) == '%') {
                curGrade = curGrade.slice(1, curGrade.length - 1)
            }

            if (finalWeight.charAt(0) == '%') {
                finalWeight = finalWeight.slice(1, finalWeight.length - 1)
            }


            if (!isNaN(curGrade) && !isNaN(finalWeight)) {
                document.getElementById('worth').style.display = "none";
                document.getElementById('current').style.display = "none";
                document.getElementById('finalgradeslidecontainer').style.display = "block";
                document.getElementById('classslidecontainer').style.display = "block";
                slider.value = 90
                output.innerHTML = ninety.toFixed(2)
                output2.innerHTML = ((90.00 * finalWeight / 100) + ((1 - finalWeight / 100) * curGrade)).toFixed(2);
            } else {
                document.getElementById('warning').innerHTML = "Please enter number in format xx.xx"
            }

        })