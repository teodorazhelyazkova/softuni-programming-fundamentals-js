function passwordValidator(pass) {
  let isValid = true;

  if (pass.length < 6 || pass.length > 10) {
    isValid = false;
    console.log("Password must be between 6 and 10 characters");
  }

  if (!/^[A-Za-z0-9]*$/.test(pass)) {
    isValid = false;
    console.log("Password must consist only of letters and digits");
  }

  if (!/\d{2}/.test(pass)) {
    isValid = false;
    console.log("Password must have at least 2 digits");
  }

  if (isValid) {
    console.log("Password is valid");
  }
}

passwordValidator('Pa$s$s');
