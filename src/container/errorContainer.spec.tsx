import { render, screen } from '@testing-library/react';
import ErrorContainer from './errorContainer';
import { AppContext } from '../App';
import { ErrorNotification } from '../types/model';


jest.mock('./ErrorContainer', () => ({
  __esModule: true,
   
  default: ({ type, description, header, hide }:{type:string,description:string,header:string,hide:VoidFunction}) => (
    <div data-testid="error-note">
      <div>{type}</div>
      <div>{header}</div>
      <div>{description}</div>
      <button onClick={()=>hide}>Close</button>
    </div>
  ),
}));

describe('ErrorContainer Component', () => {
  test('renders error notification when error exists', () => {
    const mockError: ErrorNotification = {
      type: 'Unknown',
      description: 'Something went wrong',
      header: 'Error Header',
    };
    const mockContextValue = { error: mockError };

    render(
      <AppContext.Provider value={mockContextValue}>
        <ErrorContainer />
      </AppContext.Provider>
    );

    expect(screen.getByTestId('error-note')).toBeInTheDocument();
  });
});
