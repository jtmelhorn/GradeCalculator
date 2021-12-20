    var slider = document.getElementById("finalgradeSlider");
    var slider2 = document.getElementById("classgradeSlider");
    var output = document.getElementById("testgrade");
    var output2 = document.getElementById("classgrade");

    var curGrade = document.getElementById("currentGradeBox").value
    var finalWeight = document.getElementById("percentBox").value

    var ninety = 90


    /**
     * @author Justin Melhorn
     * Calculates final grade based on slider value
     * slider, output = grade on final exam
     * output2 = final grade in class
     */
    slider.oninput = function() {
        output.innerHTML = slider.value;
        output2.innerHTML = ((slider.value * finalWeight) + ((1 - finalWeight) * curGrade)).toFixed(2)
    }

    /**
     * @author Justin Melhorn
     * When button is clicked, hide original text boxes and show slider.  Calculate inital value if you got a 70 on the exam.
     */
    document.getElementById("button").addEventListener("click",
        function() {
            curGrade = document.getElementById("currentGradeBox").value
            finalWeight = document.getElementById("percentBox").value


            if (curGrade.charAt(curGrade.length - 1) == '%') {
                curGrade = curGrade.slice(0, curGrade.length - 1)
            }

            if (finalWeight.charAt(finalWeight.length - 1) == '%') {
                finalWeight = finalWeight.slice(0, finalWeight.length - 1)
            }

            //to combat stupid
            if (curGrade.charAt(0) == '%') {
                curGrade = curGrade.slice(1, curGrade.length - 1)
            }

            if (finalWeight.charAt(0) == '%') {
                finalWeight = finalWeight.slice(1, finalWeight.length - 1)
            }

            if (!isNaN(curGrade) && !isNaN(finalWeight)) {
                finalWeight = finalWeight / 100
                document.getElementById('worth').style.display = "none";
                document.getElementById('current').style.display = "none";
                document.getElementById('finalgradeslidecontainer').style.display = "block";
                document.getElementById('classslidecontainer').style.display = "block";
                slider.value = 70
                output.innerHTML = ninety.toFixed(2)
                output2.innerHTML = ((70 * finalWeight) + ((1 - finalWeight) * curGrade)).toFixed(2)
            } else {
                document.getElementById('warning').innerHTML = "Please enter number in format xx.xx"
            }

        })