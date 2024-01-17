import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SearchBar from './components/home/SearchBar';
import FormComponent from './components/form/Form';
import { saveToStorage } from './helper/storage';
import Header from './components/shared/Header';
import Cards from './components/home/Cards';
import { LocalStorage } from './types';
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
  test('Home render', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  test('AboutUs render', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
  });

  test('Form render', () => {
    render(
      <BrowserRouter>
        <FormPage />
      </BrowserRouter>
    );
  });

  test('NotFound render', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  });
});

describe('Rendering components', () => {
  test('App render', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test('Header render', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  test('SearchBar render', () => {
    render(<SearchBar />);
  });

  test('Cards render', () => {
    render(<Cards />);
  });

  test('Form render', () => {
    render(<FormComponent onSubmit={jest.fn()} />);
  });
});

const fakeLocalStorage = (() => {
  let store: LocalStorage = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => (store[key] = value.toString()),
    removeItem: (key: string) => delete store[key],
    clear: () => (store = {}),
  };
})();

describe('Storage', () => {
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

describe('Cards', () => {
  it('User cards render', () => {
    render(<Cards />);

    expect(screen.getAllByTestId('userCards').length).toBe(10);
  });

  it('Card render', () => {
    render(<Cards />);

    expect(screen.getAllByText(/Nickname:/i).length).toBe(10);
  });
});

describe('Display text on pages', () => {
  test('AboutUs text render', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );

    expect(screen.getByText(/About_Us/i)).toBeInTheDocument();
  });

  test('NotFound text render', () => {
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
  test('Router', () => {
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
