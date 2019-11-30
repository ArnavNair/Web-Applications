//JavaScript for the frontend

// Function to insert the entered item into the text box
function insert(char){
    document.form.textview.value = document.form.textview.value + char;
}

// Function to evaluate the expression within the text box
function equal(){
    var exp = document.form.textview.value
    if(exp){
        document.form.textview.value = eval(document.form.textview.value);
    }
}

// Function to clear the text box
function clearCalc() {
    document.form.textview.value = "";
}

// Function to delete the last character
function del() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}
