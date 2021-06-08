var checkBox = document.getElementById("isChecked");

document.getElementById("isChecked").addEventListener('click', () => {

    if (checkBox.checked == true) {
        document.documentElement.style.setProperty('--bgColor', 'rgb(32, 30, 30)');
        document.documentElement.style.setProperty('--txtColor', 'white');
        document.documentElement.style.setProperty('--grayColor', 'rgb(59, 59, 59)');
        document.documentElement.style.setProperty('--btnBorder', 'none');
        document.documentElement.style.setProperty('--pColor', '#a0a0a0');
        document.documentElement.style.setProperty('--btnColor', 'linear-gradient(52deg, rgba(158,59,140,1), rgba(240,45,54,1), rgba(250,138,71,1)');

    }
    else {
        document.documentElement.style.setProperty('--bgColor', 'white');
        document.documentElement.style.setProperty('--txtColor', 'black');
        document.documentElement.style.setProperty('--grayColor', 'white');
        document.documentElement.style.setProperty('--btnBorder', '2px solid black');
        document.documentElement.style.setProperty('--btnColor', 'linear-gradient(#00e99f,#00e99f)');


    }

})
