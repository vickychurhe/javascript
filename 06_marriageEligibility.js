

var marriageEligibility = function (gender, age) {
    if (gender == "Male" && age >= 21) {
      console.log(
      `This person is Eligible for marriage it's ${gender} ,${age}...`
      );
    } else {
      if (gender == "Female" && age >= 18) {
        console.log(
         `This person is Eligible for marriage it's ${gender} ,${age}...`
        );
      } else {
        console.log(
          `Un-fortunetly is Not Eligible for marriage  because it's ${gender} ,${age}...`
        );
      }
    }
  };
  marriageEligibility("Male", 17);
  marriageEligibility("Male", 25);
  marriageEligibility("Female", 28);
  marriageEligibility("Female", 16);
  marriageEligibility("Other", 35);
  marriageEligibility("Other", 41);