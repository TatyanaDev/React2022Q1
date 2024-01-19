import { Component } from 'react';
import cn from 'classnames';
import { FormProps } from '../../../interfaces';
import style from './styles.module.css';

export default class Form extends Component<FormProps, unknown> {
  constructor(props: FormProps) {
    super(props);
  }

  render() {
    const { user, errors, isMessage, handleInputChange, handleSubmit } = this.props;

    return (
      <div className={style.formContainer}>
        <div>
          {isMessage && <div className={style.message}>Data saved successfully</div>}

          <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.inputsContainer}>
              <div className={style.inputContainer}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  className={cn(style.input, style.nameInput)}
                />

                {errors.name && <p className={style.error}>{errors.name}</p>}
              </div>

              <div className={style.inputContainer}>
                <label htmlFor="surname">Surname:</label>
                <input
                  type="text"
                  name="surname"
                  value={user.surname}
                  onChange={handleInputChange}
                  className={cn(style.input, style.surnameInput)}
                />

                {errors.surname && <p className={style.error}>{errors.surname}</p>}
              </div>

              <div className={style.inputContainer}>
                <label htmlFor="birthday">Date of birth:</label>
                <input
                  type="date"
                  name="birthday"
                  value={user.birthday}
                  onChange={handleInputChange}
                  className={cn(style.input, style.dateInput)}
                />

                {errors.birthday && <p className={style.error}>{errors.birthday}</p>}
              </div>

              <div className={style.inputContainer}>
                <label htmlFor="country">Country:</label>
                <select
                  name="country"
                  defaultValue={''}
                  onChange={handleInputChange}
                  className={cn(style.input, style.countryInput)}
                >
                  <option value="" disabled hidden>
                    Choose the country
                  </option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="Poland">Poland</option>
                  <option value="Germany">Germany</option>
                </select>

                {errors.country && <p className={style.error}>{errors.country}</p>}
              </div>
            </div>

            <div className={style.inputsContainer}>
              <div className={style.radioInputsContainer}>
                <label htmlFor="gender" className={style.genderLabel}>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={user.gender === 'Male'}
                    onChange={handleInputChange}
                    className={cn(style.input, style.genderInput)}
                  />
                  Male
                </label>

                <label htmlFor="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={user.gender === 'Female'}
                    onChange={handleInputChange}
                    className={cn(style.input, style.genderInput)}
                  />
                  Female
                </label>

                {errors.gender && <p className={style.error}>{errors.gender}</p>}
              </div>

              <div className={style.checkboxContainer}>
                <div className={style.selectionInputsContainer}>
                  <input
                    name="isAgree"
                    type="checkbox"
                    checked={user.additionalInformation.isAgree}
                    onChange={handleInputChange}
                    className={cn(style.input, style.checkboxInput)}
                  />
                  <label htmlFor="isAgree">Agree to data processing</label>
                </div>

                <div className={style.selectionInputsContainer}>
                  <input
                    name="isSendCopy"
                    type="checkbox"
                    checked={user.additionalInformation.isSendCopy}
                    onChange={handleInputChange}
                    className={cn(style.input, style.checkboxInput)}
                  />
                  <label htmlFor="isSendCopy">Send a copy by mail</label>
                </div>

                <div className={style.selectionInputsContainer}>
                  <input
                    name="isCallBack"
                    type="checkbox"
                    checked={user.additionalInformation.isCallBack}
                    onChange={handleInputChange}
                    className={cn(style.input, style.checkboxInput)}
                  />
                  <label htmlFor="isCallBack">Call me back</label>

                  {errors.additionalInformation && (
                    <p className={style.error}>{errors.additionalInformation}</p>
                  )}
                </div>
              </div>

              <div className={style.inputContainer}>
                <span>Photo:</span>
                <input
                  name="photo"
                  type="file"
                  value={user.photo}
                  onChange={handleInputChange}
                  className={style.photoInput}
                />

                {errors.photo && <p className={style.error}>{errors.photo}</p>}
              </div>

              <button type="submit" className={style.button}>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
