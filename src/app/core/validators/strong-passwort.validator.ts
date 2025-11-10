import { ValidatorFn } from '@angular/forms';
interface StrongPasswortErrors {
  lowerCase?: boolean;
  upperCase?: boolean;
  number?: boolean;
  tooShort?: boolean;
  specialCharacter?: boolean;
}

export function strongPasswortValidator(): ValidatorFn {
  return (control) => {
    const value = control.value;
    // traitement

    const result: StrongPasswortErrors = {};

    // lowercase
    const lowerCaseRegex = /[a-z]/;
    if (!lowerCaseRegex.test(value)) {
      result.lowerCase = true;
    }

    const upperCaseRegex = /[A-Z]/;
    if (!upperCaseRegex.test(value)) {
      result.upperCase = true;
    }

    const numberRegex = /[0-9]/;
    if (!numberRegex.test(value)) {
      result.number = true;
    }

    const specialCharacterRegex = /[\W_]/;
    if (!specialCharacterRegex.test(value)) {
      result.specialCharacter = true;
    }

    if (value?.length < 8) {
      result.tooShort = true;
    }

    if (Object.keys(result).length > 0) {
      return result;
    }

    return null;
  };
}
