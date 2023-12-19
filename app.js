document.addEventListener("DOMContentLoaded", function() {
    var manhwaSelector = document.getElementById("manhwaSelector");
    var images = [];

    for (var i = 1; i <= 112; i++) {
        images.push(document.getElementById("image" + i));
    }

    manhwaSelector.addEventListener("change", function() {
        var selectedValue = manhwaSelector.value;

        if (selectedValue === "barolt") {
            for (var i = 1; i <= 112; i++) {
                images[i - 1].src = "barolt_vs_garhan/" + i + ".jpg";
            }
        } else {
        }
    });
});
