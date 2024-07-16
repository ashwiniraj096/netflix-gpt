export const validate = (formState, isSignUp) => {
  const errors = {}; // {email:"",password:"",name:""}

  if (!formState.email) {
    errors.email = "Email is required";
  } else if (
    !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(formState.email)
  ) {
    errors.email = "Email is not valid";
  }

  if (!formState.password) {
    errors.password = "password is required";
  } else if (!/^[A-Za-z]\w{7,14}$/.test(formState.password)) {
    errors.password = "Password is not valid";
  }

  if (isSignUp && !formState.userName) {
    errors.userName = "User name is required";
  } else if (!/^[a-zA-Z ]{2,30}$/.test(formState.userName)) {
    errors.userName = "User name is not valid";
  }

  return errors;
};
