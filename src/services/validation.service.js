import isLength from 'validator/lib/isLength';
import isEmail from 'validator/lib/isEmail';
import isString from 'validator/lib/isEmail';

class Validation {
  static INVALID = 'INVALID';
  static LENGTH = 'LENGTH';
  static REQUIRED = 'REQUIRED';
  static IS_NUMBER_INTEGER = 'IS_NUMBER_INTEGER';
  static REQUIRED_PLURAL = 'REQUIRED_PLURAL';
  static REQUIRED_FIELD = 'REQUIRED_VALUE';
  static CONFIRM = 'CONFIRM';
  static BOOLEAN = 'BOOLEAN';
  static ONEOFMANY = 'ONEOFMANY';
  static LIMIT = {
    min: 3,
    max: 32,
  };
  static registrationValidation(body) {
    const { email, password, name } = body;
    const errors = {
      ...this.isEmail('email', email),
      ...this.isLength('password', password),
      ...this.isLength('name', name),
    };
    return {
      errors,
      isValid: !Object.keys(errors).length,
    };
  }

  static loginValidation(body) {
    const { userName, password } = body;
    const errors = {
      ...this.isLength('userName', userName),
      ...this.isLength('password', password),
    };
    return {
      errors,
      isValid: !Object.keys(errors).length,
    };
  }

  static forgotPassword(body) {
    const { email } = body;
    const errors = {
      ...this.isEmail('email', email),
    };
    return {
      errors,
      isValid: !Object.keys(errors).length,
    };
  }

  static resetPasswordValidation(body) {
    const { oldPassword, newPassword, confirmedNewPassword } = body;
    const errors = {
      ...this.isLength('oldPassword', oldPassword),
      ...this.isLength('newPassword', newPassword),
      ...this.isConfirmed(
        'confirmedNewPassword',
        confirmedNewPassword,
        newPassword
      ),
    };
    return {
      errors,
      isValid: !Object.keys(errors).length,
    };
  }

  static recoveryPasswordValidation(body) {
    const { newPassword, confirmedNewPassword } = body;
    const errors = {
      ...this.isLength('newPassword', newPassword, { min: 6, max: 32 }),
      ...this.isLength('confirmedNewPassword', confirmedNewPassword, {
        min: 6,
        max: 32,
      }),
      ...this.isLength('confirmedNewPassword', confirmedNewPassword, {
        min: 6,
        max: 32,
      }),
      ...this.isConfirmed(
        'confirmedNewPassword',
        confirmedNewPassword,
        newPassword
      ),
    };

    return {
      errors,
      isValid: !Object.keys(errors).length,
    };
  }

  static messageGenerator({ field, field2, min, max, messages }) {
    return {
      [this.LENGTH]: `The ${field} must be ${max ? '' : 'min '}${min}${
        max ? '-' + max : ''
      } characters long`,
      [this.REQUIRED]: `The ${field} is required`,
      [this.REQUIRED_PLURAL]: `The ${field} are required`,
      [this.REQUIRED_FIELD]: `The field is required`,
      [this.INVALID]: `The ${field} is invalid`,
      [this.CONFIRM]: `Does not match the new password field`,
      [this.BOOLEAN]: `Status should be boolean`,
      [this.IS_NUMBER_INTEGER]: `Value incorrect number value`,
      [this
        .ONEOFMANY]: `At least one of fields: ${field} or ${field2} is required`,
      ...messages,
    };
  }

  static isRequired(field, value) {
    const msg = this.messageGenerator({ field });
    const errors = {};
    if (!value || !value?.toString()?.trim()) {
      errors[field] = msg[this.REQUIRED];
    }
    return errors;
  }

  static isRequiredOneOfMany({ field, field2, value, value2 }) {
    const msg = this.messageGenerator({ field, field2 });
    const errors = {};
    if ((!value && !value2) || (!value?.trim() && !value2?.trim())) {
      errors['oneofmany'] = msg[this.ONEOFMANY];
    }
    return errors;
  }

  static isLength(field, value, customLimit = {}) {
    const msg = this.messageGenerator({ field, ...this.LIMIT, ...customLimit });
    const errors = {};
    if (!value || !value?.trim()) {
      errors[field] = msg[this.REQUIRED];
    } else if (!isLength(value, { ...this.LIMIT, ...customLimit })) {
      errors[field] = msg[this.LENGTH];
    }

    return errors;
  }

  static isEmail(field, value) {
    const msg = this.messageGenerator({ field, ...this.LIMIT });
    const errors = {};
    if (!value) {
      errors[field] = msg[this.REQUIRED];
    } else if (!isLength(value, this.LIMIT)) {
      errors[field] = msg[this.LENGTH];
    } else if (!isEmail(value)) {
      errors[field] = msg[this.INVALID];
    }

    return errors;
  }
  static isUserName(field, value) {
    const msg = this.messageGenerator({ field, ...this.LIMIT });
    const errors = {};
    if (!value) {
      errors[field] = msg[this.REQUIRED];
    } else if (!isLength(value, this.LIMIT)) {
      errors[field] = msg[this.LENGTH];
    } else if (!isEmail(value)) {
      errors[field] = msg[this.INVALID];
    }

    return errors;
  }
  static isBoolean(field, value) {
    const msg = this.messageGenerator({ field });
    const errors = {};
    if (typeof value !== 'boolean') {
      errors[field] = msg[this.BOOLEAN];
    }
    return errors;
  }
  static isInteger(field, value) {
    const msg = this.messageGenerator({ field });
    const errors = {};
    if (!value || !Number.isInteger(+value)) {
      errors[field] = msg[this.IS_NUMBER_INTEGER];
    }
    return errors;
  }
  static isConfirmed(field, value, value2) {
    const msg = this.messageGenerator({ field, ...this.LIMIT });
    const errors = {};
    if (!value) {
      errors[field] = msg[this.REQUIRED];
    } else if (value !== value2) {
      errors[field] = msg[this.CONFIRM];
    }

    return errors;
  }

  static changePassword(body) {
    const { newPassword } = body;
    const errors = {
      ...this.isLength('newPassword', newPassword, { min: 6, max: 32 }),
    };

    return {
      errors,
      isValid: !Object.keys(errors).length,
    };
  }
}

export default Validation;
