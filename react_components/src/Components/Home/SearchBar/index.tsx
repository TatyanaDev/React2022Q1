import { Component, ChangeEvent } from 'react';
import style from './styles.module.css';

type InputState = {
  value: string;
};

export default class SearchBar extends Component<unknown, InputState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount(): void {
    const value: string = localStorage.getItem('inputValue') || '';
    this.setState({ value });
  }

  componentWillUnmount(): void {
    const { value } = this.state;
    localStorage.setItem('inputValue', value);
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = event;
    this.setState({ value });
  };

  render() {
    return (
      <form className={style.form}>
        <div className={style.containerInput}>
          <input
            data-testid="input"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
            className={style.input}
          />
        </div>
      </form>
    );
  }
}
