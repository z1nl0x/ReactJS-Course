import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurChangeHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurChangeHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurChangeHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsVaslid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsVaslid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsVaslid) {
      return;
    }

    console.log("Enviado!");
    console.log(firstNameValue, lastNameValue, emailValue);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="firstName">Primeiro Nome</label>
          <input
            type="text"
            id="firstName"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Entre com um nome válido!</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Sobrenome</label>
          <input
            type="text"
            id="lastName"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Entre com um sobrenome válido!</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">Endereço de E-Mail</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Entre com um email válido!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsVaslid}>Enviar</button>
      </div>
    </form>
  );
};

export default BasicForm;
