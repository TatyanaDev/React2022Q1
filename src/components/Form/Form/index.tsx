import { Component, FormEvent, createRef, RefObject } from 'react';
import cn from 'classnames';
import { CardState } from './../../../pages/Form';
import style from './styles.module.css';

type FormState = {
  isNameValid: boolean;
  isSurnameValid: boolean;
  isBirthdayValid: boolean;
  isCountryValid: boolean;
  isGenderValid: boolean;
  isCheckboxValid: boolean;
  isPhotoValid: boolean;
  isActiveButton: boolean;
  isSend: boolean;
  isMessage: boolean;
};

type FormProps = { onSubmit: (card: CardState) => void };

export default class Form extends Component<FormProps, FormState> {
  private form: RefObject<HTMLFormElement>;
  private name: RefObject<HTMLInputElement>;
  private surname: RefObject<HTMLInputElement>;
  private birthday: RefObject<HTMLInputElement>;
  private country: RefObject<HTMLSelectElement>;
  private male: RefObject<HTMLInputElement>;
  private female: RefObject<HTMLInputElement>;
  private personal: RefObject<HTMLInputElement>;
  private mail: RefObject<HTMLInputElement>;
  private call: RefObject<HTMLInputElement>;
  private photo: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      isNameValid: false,
      isSurnameValid: false,
      isBirthdayValid: false,
      isCountryValid: false,
      isGenderValid: false,
      isCheckboxValid: false,
      isPhotoValid: false,
      isActiveButton: true,
      isSend: false,
      isMessage: false,
    };

    this.form = createRef<HTMLFormElement>();
    this.name = createRef<HTMLInputElement>();
    this.surname = createRef<HTMLInputElement>();
    this.birthday = createRef<HTMLInputElement>();
    this.country = createRef<HTMLSelectElement>();
    this.male = createRef<HTMLInputElement>();
    this.female = createRef<HTMLInputElement>();
    this.personal = createRef<HTMLInputElement>();
    this.mail = createRef<HTMLInputElement>();
    this.call = createRef<HTMLInputElement>();
    this.photo = createRef<HTMLInputElement>();
  }

  card: CardState = {
    name: '',
    surname: '',
    birthday: '',
    country: '',
    gender: '',
    personal: false,
    mail: false,
    call: false,
    photo: '',
  };

  nameValidation = (): boolean => {
    if (
      !this.name.current?.value ||
      this.name.current.value[0] !== this.name.current.value[0].toUpperCase() ||
      this.name.current.value.length < 3
    ) {
      this.setState({ isNameValid: true });
      return false;
    } else {
      this.setState({ isNameValid: false });
      this.card.name = this.name.current.value;
      return true;
    }
  };

  surnameValidation = (): boolean => {
    if (
      !this.surname.current?.value ||
      this.surname.current.value[0] !== this.surname.current.value[0].toUpperCase() ||
      this.surname.current.value.length < 3
    ) {
      this.setState({ isSurnameValid: true });
      return false;
    } else {
      this.setState({ isSurnameValid: false });
      this.card.surname = this.surname.current.value;
      return true;
    }
  };

  birthdayValidation = (): boolean => {
    if (
      !this.birthday.current?.value ||
      new Date(this.birthday.current.value) > new Date() ||
      this.birthday.current.value.length < 1
    ) {
      this.setState({ isBirthdayValid: true });
      return false;
    } else {
      this.setState({ isBirthdayValid: false });
      this.card.birthday = this.birthday.current.value;
      return true;
    }
  };

  countryValidation = (): boolean => {
    if (!this.country.current?.value) {
      this.setState({ isCountryValid: true });
      return false;
    } else {
      this.setState({ isCountryValid: false });
      this.card.country = this.country.current.value;
      return true;
    }
  };

  genderValidation = (): boolean => {
    if (this.male.current?.checked) {
      this.setState({ isGenderValid: false });
      this.card.gender = this.male.current.value;
      return true;
    } else if (this.female.current?.checked) {
      this.setState({ isGenderValid: false });
      this.card.gender = this.female.current.value;
      return true;
    } else {
      this.setState({ isGenderValid: true });
      return false;
    }
  };

  checkboxValidation = (): boolean => {
    if (
      this.personal.current?.checked &&
      this.mail.current?.checked &&
      this.call.current?.checked
    ) {
      this.setState({ isCheckboxValid: false });
      this.card.personal = true;
      this.card.mail = true;
      this.card.call = true;
      return true;
    } else if (this.personal.current?.checked && this.mail.current?.checked) {
      this.setState({ isCheckboxValid: false });
      this.card.personal = true;
      this.card.mail = true;
      return true;
    } else if (this.mail.current?.checked && this.call.current?.checked) {
      this.setState({ isCheckboxValid: false });
      this.card.mail = true;
      this.card.call = true;
      return true;
    } else if (this.personal.current?.checked && this.call.current?.checked) {
      this.setState({ isCheckboxValid: false });
      this.card.personal = true;
      this.card.call = true;
      return true;
    } else if (this.personal.current?.checked) {
      this.setState({ isCheckboxValid: false });
      this.card.personal = true;
      return true;
    } else if (this.mail.current?.checked) {
      this.setState({ isCheckboxValid: false });
      this.card.mail = true;
      return true;
    } else if (this.call.current?.checked) {
      this.setState({ isCheckboxValid: false });
      this.card.call = true;
      return true;
    } else {
      this.setState({ isCheckboxValid: true });
      return false;
    }
  };

  photoValidation = (): boolean => {
    if (!this.photo.current?.files?.length) {
      this.setState({ isPhotoValid: true });
      return false;
    } else {
      this.setState({ isPhotoValid: false });
      this.card.photo = URL.createObjectURL(this.photo.current.files[0]);
      return true;
    }
  };

  // helperValidation = (forValidation: () => boolean): void => {
  //   if (this.state.isSend) {
  //     forValidation();
  //   }
  // };

  helperNameValidation = (): void => {
    if (this.state.isSend) {
      this.nameValidation();
    }
  };

  helperSurnameValidation = (): void => {
    if (this.state.isSend) {
      this.surnameValidation();
    }
  };

  helperBirthdayValidation = (): void => {
    if (this.state.isSend) {
      this.birthdayValidation();
    }
  };

  helperCountryValidation = (): void => {
    if (this.state.isSend) {
      this.countryValidation();
    }
  };

  helperGenderValidation = (): void => {
    if (this.state.isSend) {
      this.genderValidation();
    }
  };

  helperCheckboxValidation = (): void => {
    if (this.state.isSend) {
      this.checkboxValidation();
    }
  };

  helperPhotoValidation = (): void => {
    if (this.state.isSend) {
      this.photoValidation();
    }
  };

  activeButton = (): void => this.setState({ isActiveButton: false });

  handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    this.setState({ isSend: true });

    const name = this.nameValidation();

    const surname = this.surnameValidation();

    const birthday = this.birthdayValidation();

    const country = this.countryValidation();

    const gender = this.genderValidation();

    const checkbox = this.checkboxValidation();

    const photo = this.photoValidation();

    if (name && surname && birthday && country && gender && checkbox && photo) {
      this.form.current?.reset();

      this.props.onSubmit(this.card);

      this.setState({ isMessage: true, isActiveButton: true });

      setTimeout(() => this.setState({ isMessage: false }), 2000);
    }
  };

  render() {
    return (
      <div className={style.formContainer}>
        <div>
          {this.state.isMessage && <div className={style.message}>Data saved successfully</div>}
          <form onSubmit={this.handleSubmit} ref={this.form} className={style.form}>
            <div className={style.inputsContainer}>
              <div className={style.inputContainer}>
                <label htmlFor="name">Name : </label>
                <input
                  type="text"
                  name="name"
                  ref={this.name}
                  onChange={this.helperNameValidation}
                  onFocus={this.activeButton}
                  className={cn(style.input, style.nameInput)}
                  style={{ minWidth: 240 }}
                />
                {this.state.isNameValid && (
                  <div className={style.error}>
                    Enter your name. Must start with a capital letter and contain at least three
                    characters
                  </div>
                )}
              </div>

              <div className={style.inputContainer}>
                <label htmlFor="surname">Surname :</label>
                <input
                  type="text"
                  name="surname"
                  ref={this.surname}
                  onChange={this.helperSurnameValidation}
                  onFocus={this.activeButton}
                  className={cn(style.input, style.surnameInput)}
                  style={{ minWidth: 215 }}
                />
                {this.state.isSurnameValid && (
                  <div className={style.error}>
                    Enter your surname. Must start with a capital letter and contain at least three
                    characters
                  </div>
                )}
              </div>

              <div className={style.inputContainer}>
                <label htmlFor="birthday">Date of birth : </label>
                <input
                  type="date"
                  name="birthday"
                  ref={this.birthday}
                  onChange={this.helperBirthdayValidation}
                  onFocus={this.activeButton}
                  className={cn(style.input, style.dateInput)}
                />
                {this.state.isBirthdayValid && (
                  <div className={style.error}>
                    Enter your date of birth. The date must be no later than the current
                  </div>
                )}
              </div>

              <div className={style.inputContainer}>
                <label htmlFor="country">Сountry : </label>
                <select
                  name="country"
                  defaultValue={''}
                  ref={this.country}
                  onChange={this.helperCountryValidation}
                  onFocus={this.activeButton}
                  className={cn(style.input, style.countryInput)}
                  style={{ minWidth: 223 }}
                >
                  <option value="" disabled hidden>
                    Choose the country
                  </option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="Russia">Russia</option>
                  <option value="Belarus">Belarus</option>
                </select>
                {this.state.isCountryValid && (
                  <div className={style.error}>Сhoose your country</div>
                )}
              </div>
            </div>

            <div className={style.inputsContainer}>
              <div className={style.radioInputsContainer}>
                <label htmlFor="gender" style={{ marginRight: 50 }}>
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    ref={this.male}
                    onChange={this.helperGenderValidation}
                    onFocus={this.activeButton}
                    className={style.input}
                    style={{ marginRight: 10 }}
                  />
                  Male
                </label>
                <label htmlFor="gender">
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    ref={this.female}
                    onChange={this.helperGenderValidation}
                    onFocus={this.activeButton}
                    className={style.input}
                    style={{ marginRight: 10 }}
                  />
                  Female
                </label>
                {this.state.isGenderValid && <div className={style.error}>Choose your gender</div>}
              </div>

              <div style={{ marginBottom: 45 }}>
                <div className={style.selectionInputsContainer}>
                  <input
                    name="personal"
                    type="checkbox"
                    ref={this.personal}
                    onChange={this.helperCheckboxValidation}
                    onFocus={this.activeButton}
                    className={style.input}
                    style={{ marginRight: 10 }}
                  />
                  <label htmlFor="personal" className={style.labelCheckbox}>
                    Agree to data processing
                  </label>
                </div>

                <div className={style.selectionInputsContainer}>
                  <input
                    name="mail"
                    type="checkbox"
                    ref={this.mail}
                    onChange={this.helperCheckboxValidation}
                    onFocus={this.activeButton}
                    className={style.input}
                    style={{ marginRight: 10 }}
                  />
                  <label htmlFor="mail" className={style.labelCheckbox}>
                    Send a copy by mail
                  </label>
                </div>

                <div className={style.selectionInputsContainer}>
                  <input
                    name="call"
                    type="checkbox"
                    ref={this.call}
                    onChange={this.helperCheckboxValidation}
                    onFocus={this.activeButton}
                    className={style.input}
                    style={{ marginRight: 10 }}
                  />
                  <label htmlFor="call" className={style.labelCheckbox}>
                    Call me back
                  </label>
                  {this.state.isCheckboxValid && (
                    <div className={style.error}> Choose one or more options</div>
                  )}
                </div>
              </div>

              <div className={style.inputContainer}>
                <span>Photo :</span>
                <input
                  name="photo"
                  type="file"
                  ref={this.photo}
                  onChange={this.helperPhotoValidation}
                  onFocus={this.activeButton}
                  className={style.photoInput}
                />
                {this.state.isPhotoValid && <div className={style.error}>Upload your photo</div>}
              </div>

              <button
                type="submit"
                className={style.button}
                disabled={
                  this.state.isActiveButton ||
                  this.state.isNameValid ||
                  this.state.isSurnameValid ||
                  this.state.isBirthdayValid ||
                  this.state.isCountryValid ||
                  this.state.isGenderValid ||
                  this.state.isCheckboxValid ||
                  this.state.isPhotoValid
                }
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
