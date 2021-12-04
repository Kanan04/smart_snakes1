function validation() {
    let x = document.forms["feedback"]["feedback"].value;
    if (x == "") {
      alert("Feedback must be filled out");
      return false;
    }
    else {
        alert("Thanks for your feedback!");
    }
  }