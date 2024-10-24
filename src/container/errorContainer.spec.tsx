import { render, screen} from '@testing-library/react';
import ErrorContainer from './errorContainer';
import { AppContext } from '../App';
import { ErrorNotification } from '../types/model';

const mockContextValue = {
  movies: [
    { id: '123', title: "Movie 1", imageURL: "http://example.com/image1.jpg", rating: 0, summary:"" },
    { id: "321", title: "Movie 2", imageURL: "http://example.com/image2.jpg", rating: 0, summary:"" },
  ],                 
  handler: () => {},
  loading: false,
  error: null,
  setMode: ()=>{}, 
  mode: false
};
describe('ErrorContainer Component', () => {
  test('does not render error notification if there is no error', () => {

    render(
      <AppContext.Provider value={{...mockContextValue,error:null}}>
        <ErrorContainer />
      </AppContext.Provider>
    );

    expect(screen.queryByTestId('error-note')).not.toBeInTheDocument();
  });

  test('renders error notification when error exists', () => {
    const mockError: ErrorNotification = {
      type: 'Unknown',
      description: 'Something went wrong',
      header: 'Error Header',
    };

    render(
      <AppContext.Provider value={{...mockContextValue,error:mockError}}>
        <ErrorContainer />
      </AppContext.Provider>
    );

    expect(screen.getByTestId('error-note')).toBeInTheDocument();
  });

});
