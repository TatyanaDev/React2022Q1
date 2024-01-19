import { ChangeEvent, Component, FormEvent, createRef } from 'react';
import Header from '../../components/shared/Header';
import Cards from '../../components/form/Cards';
import Form from '../../components/form/Form';
import { validateField } from '../../helpers';
import { FormState } from '../../interfaces';

export default class FormPage extends Component<unknown, FormState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      users: [],
      user: {
        id: 0,
        name: '',
        surname: '',
        birthday: '',
        country: '',
        gender: '',
        additionalInformation: { isAgree: false, isSendCopy: false, isCallBack: false },
        photo: '',
      },
      errors: {
        name: '',
        surname: '',
        birthday: '',
        country: '',
        gender: '',
        additionalInformation: '',
        photo: '',
      },
      isMessage: false,
    };
  }

  photoInputRef = createRef<HTMLInputElement>();

  handleInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLInputElement;
    const { name, value, type } = target;

    let newValue;
    let error = '';

    switch (type) {
      case 'checkbox':
        newValue = target.checked;

        const additionalInformation = {
          ...this.state.user.additionalInformation,
          [name]: newValue,
        };

        error = validateField('additionalInformation', additionalInformation);

        return this.setState({
          user: {
            ...this.state.user,
            additionalInformation,
          },
          errors: {
            ...this.state.errors,
            additionalInformation: error,
          },
        });
      case 'file':
        const file = target.files && target.files[0];

        if (file) {
          const reader = new FileReader();

          reader.onloadend = () => {
            newValue = reader.result;

            error = validateField(name, newValue as string);

            this.setState({
              user: {
                ...this.state.user,
                [name]: newValue,
              },
            });
          };
          reader.readAsDataURL(file);
        }

        return this.setState({
          errors: {
            ...this.state.errors,
            [name]: error,
          },
        });
      default:
        newValue = value;

        error = validateField(name, newValue);

        return this.setState({
          user: {
            ...this.state.user,
            [name]: newValue,
          },
          errors: {
            ...this.state.errors,
            [name]: error,
          },
        });
    }
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const { user } = this.state;

    const errors = {
      name: validateField('name', user.name || ''),
      surname: validateField('surname', user.surname || ''),
      birthday: validateField('birthday', user.birthday || ''),
      country: validateField('country', user.country || ''),
      gender: validateField('gender', user.gender || ''),
      additionalInformation: validateField(
        'additionalInformation',
        user.additionalInformation || { isAgree: false, isSendCopy: false, isCallBack: false }
      ),
      photo: validateField('photo', user.photo || ''),
    };

    this.setState({ errors, isMessage: false });

    const isFormValid = !Object.values(errors).some((error) => error !== '');

    if (isFormValid) {
      const newUser = { ...user, id: Date.now() };

      this.setState((prevState: FormState) => ({
        users: [...prevState.users, newUser],
        user: {
          id: 0,
          name: '',
          surname: '',
          birthday: '',
          country: '',
          gender: '',
          additionalInformation: { isAgree: false, isSendCopy: false, isCallBack: false },
          photo: '',
        },
        isMessage: true,
      }));

      if (this.photoInputRef.current) {
        this.photoInputRef.current.value = '';
      }

      setTimeout(() => {
        this.setState({ isMessage: false });
      }, 2000);
    }
  };

  render() {
    return (
      <>
        <Header />
        <Form
          user={this.state.user}
          errors={this.state.errors}
          isMessage={this.state.isMessage}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          photoInputRef={this.photoInputRef}
        />
        <Cards users={this.state.users} />
      </>
    );
  }
}
