//this program is a chrome extension that genrates a random password
//handle on button click
//button with id "genrate_random" is clicked then new random password is generated and show in the id "show_password"
//button with id "copy_to_clipboard" is clicked then the password is copied to the clipboard.
//id "show_password" is the text box where the password is shown.
//when the button with id "genrate_random" is clicked then the function genrate_random_password is called that genrate random password.
//when the button with id "copy_to_clipboard" is clicked then the function copy_to_clipboard is called that copy the password to the clipboard.
document.getElementById("genrate_random").onclick = function() {genrate_random_password()};
document.getElementById("copy_to_clipboard").onclick = function() {copy_to_clipboard()};
//function to genrate random password
function genrate_random_password(){
    var length = 12,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:<>?~",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("show_password").value = retVal;
}
//function to copy the password to the clipboard

function copy_to_clipboard() {
    var copyText = document.getElementById("show_password");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}


function genrate_random_password(){
    var length = 12,
        charset = "",
        retVal = "";

    // Add character types based on user options
    if (document.getElementById("includeLowercase").checked) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (document.getElementById("includeUppercase").checked) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById("includeNumbers").checked) {
        charset += "0123456789";
    }
    if (document.getElementById("includeSymbols").checked) {
        charset += "!@#$%^&*()_+{}|:<>?~";
    }

    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("show_password").value = retVal;
}


window.onload = genrate_random_password;



document.getElementById("darkMode").onclick = function() {toggleDarkMode()};

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
