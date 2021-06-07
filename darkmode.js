var checkBox = document.getElementById("isChecked");

function checker() {

    if (checkBox.checked == true) {
        document.getElementById("dark").href = "dark.css";
    }
    else {
        document.getElementById("dark").href = "index.css";
    }

}

