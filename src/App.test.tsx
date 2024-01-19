import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SearchBar from './components/home/SearchBar';
import UserCards from './components/home/UserCards';
import FormComponent from './components/form/Form';
import { saveToStorage } from './helper/storage';
import Header from './components/shared/Header';
import { LocalStorage } from './interfaces';
import Cards from './components/form/Cards';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import FormPage from './pages/Form';
import Home from './pages/Home';
import App from './App';

test('NotFound page contains a link', () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );

  expect(screen.getByRole('link')).toBeInTheDocument();
});

test('Input event', () => {
  render(
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  );

  fireEvent.input(screen.getByTestId('input'), { target: { value: 'test-value' } });
  expect(screen.queryByTestId('input')).toContainHTML('test-value');
});

describe('Rendering pages', () => {
  test('Home rendered', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  test('AboutUs rendered', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
  });

  test('Form rendered', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
  });

  test('NotFound rendered', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  });
});

describe('Rendering components', () => {
  const mockUser = (id: number) => ({
    id,
    name: '',
    surname: '',
    birthday: '',
    country: '',
    gender: '',
    additionalInformation: { isAgree: false, isSendCopy: false, isCallBack: false },
    photo: '',
  });

  test('App rendered', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test('Header rendered', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  test('SearchBar rendered', () => {
    render(<SearchBar />);
  });

  test('UserCards rendered in 10 pieces', () => {
    render(<UserCards />);
    expect(screen.getAllByTestId('userCards').length).toBe(10);
  });

  test('Cards rendered', () => {
    const mockUsers = [mockUser(0), mockUser(1)];

    render(<Cards users={mockUsers} />);
  });

  test('Form rendered', () => {
    const mockErrors = {
      name: '',
      surname: '',
      birthday: '',
      country: '',
      gender: '',
      additionalInformation: '',
      photo: '',
    };

    render(
      <FormComponent
        user={mockUser(2)}
        errors={mockErrors}
        isMessage={false}
        handleInputChange={jest.fn()}
        handleSubmit={jest.fn()}
      />
    );
  });
});

describe('Storage', () => {
  const fakeLocalStorage = (() => {
    let store: LocalStorage = {};

    return {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => (store[key] = value.toString()),
      removeItem: (key: string) => delete store[key],
      clear: () => (store = {}),
    };
  })();

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  it('Saves the key to the storage', () => {
    saveToStorage('fake-value');

    expect(window.localStorage.getItem('the-key')).toEqual('fake-value');
  });
});

describe('Display text on pages', () => {
  it('Nickname: on UserCards text rendered', () => {
    render(<UserCards />);
    expect(screen.getAllByText(/Nickname:/i).length).toBe(10);
  });

  test('About_Us text rendered', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );

    expect(screen.getByText(/About_Us/i)).toBeInTheDocument();
  });

  test('NotFound text rendered', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Back to the main page/i)).toBeInTheDocument();
  });
});

describe('Navigation', () => {
  test('Router works', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    userEvent.click(screen.getByTestId('aboutLink'));
    expect(screen.getByTestId('aboutPage')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('homeLink'));
    expect(screen.getByTestId('homePage')).toBeInTheDocument();
  });

  test('Getting to the error page', () => {
    render(
      <MemoryRouter initialEntries={['/non_existent_page']}>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByTestId('notFoundPage')).toBeInTheDocument();
  });
});
