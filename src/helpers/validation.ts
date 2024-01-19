import { AdditionalInformation } from '../interfaces';

export const validateField = (name: string, value: string | AdditionalInformation): string => {
  switch (name) {
    case 'name':
      return !value ||
        (value as string)[0] !== (value as string)[0].toUpperCase() ||
        (value as string).length < 3
        ? 'Enter your name. Must start with a capital letter and contain at least three characters'
        : '';
    case 'surname':
      return !value ||
        (value as string)[0] !== (value as string)[0].toUpperCase() ||
        (value as string).length < 3
        ? 'Enter your surname. Must start with a capital letter and contain at least three characters'
        : '';
    case 'birthday':
      return !value || new Date(value as string) > new Date() || (value as string).length < 1
        ? 'Enter your date of birth. The date must be no later than the current'
        : '';
    case 'country':
      return !value ? 'Choose your country' : '';
    case 'gender':
      return !value ? 'Choose your gender' : '';
    case 'additionalInformation':
      return !Object.values(value).some((val) => val) ? 'Choose one or more options' : '';
    case 'photo':
      return !(value as string).length ? 'Upload your photo' : '';
    default:
      return '';
  }
};
