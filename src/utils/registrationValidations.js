const validateName = (value, validatorFunction) => {
  if (value !== null && value !== "") {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateEmail = (value, validatorFunction) => {
  if (
    value !== null &&
    value !== "" &&
    value.includes("@") &&
    value.includes(".")
  ) {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validatePhone = (value, validatorFunction) => {
  if (value !== null && value !== "" && value.length === 10) {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateCourse = (value, validatorFunction) => {
  if (value !== null && value !== "") {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateUpesStudent = (value, validatorFunction) => {
  if (value === "yes" || value === "no") {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateCSAMember = (value, validatorFunction) => {
  if (value === "yes" || value === "no") {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateSAPID = (value, validatorFunction) => {
  if (
    value !== null &&
    value !== "" &&
    value.length === 9 &&
    value.startsWith("500")
  ) {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateCSAID = (value, validatorFunction) => {
  if (
    value !== null &&
    value !== "" &&
    value.length === 9 &&
    value.startsWith("CSA23")
  ) {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

const validateYearOfStudy = (value, validatorFunction) => {
  if (
    value !== null &&
    value !== "" &&
    parseInt(value, 10) > 0 &&
    parseInt(value, 10) <= 5
  ) {
    validatorFunction(true);
    return true;
  } else {
    validatorFunction(false);
    return false;
  }
};

export {
  validateName as VALIDATENAME,
  validateEmail as VALIDATEEMAIL,
  validatePhone as VALIDATEPHONE,
  validateSAPID as VALIDATESAPID,
  validateCourse as VALIDATECOURSE,
  validateCSAID as VALIDATECSAID,
  validateYearOfStudy as VALIDATEYEAROFSTUDY,
  validateUpesStudent as VALIDATEUPESSTUDENT,
  validateCSAMember as VALIDATECSAMEMBER,
};
