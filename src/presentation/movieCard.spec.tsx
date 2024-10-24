import { render, screen, fireEvent } from '@testing-library/react';
import MovieCard from './movieCard';

jest.mock('../hooks_and_utils/useMedia', () => ({
  __esModule: true,
  default: jest.fn(),
}));
import useMedia from '../hooks_and_utils/useMedia';

test('renders movie card with title, summary and rating', () => {
  render(
    <MovieCard 
      title="Test Movie" 
      summary="This is a test summary." 
      imageURL="/test.jpg" 
      rating={8.5} 
      idx={1} 
      onSwipe={() => {}} 
    />
  );

  // Sprawdzenie, czy tytuł filmu jest widoczny
  const titleElement = screen.getByText(/test movie/i);
  expect(titleElement).toBeInTheDocument();

  // Sprawdzenie, czy ocena filmu jest wyświetlana
  const ratingElement = screen.getByText(/8.5/);
  expect(ratingElement).toBeInTheDocument();
});

test('toggles summary visibility on button click', () => {
  render(
    <MovieCard 
      title="Test Movie" 
      summary="This is a test summary." 
      imageURL="/test.jpg" 
      rating={8.5} 
      idx={1} 
      onSwipe={() => {}} 
    />
  );

  const infoButton = screen.getByRole('button', { name: 'i' });
  
  fireEvent.click(infoButton);
  const summaryElement = screen.getByText(/this is a test summary/i);
  expect(summaryElement).not.toHaveClass("hidden");

  const closeButton = screen.getByRole('button', { name: /✖/i });
  
  fireEvent.click(closeButton);
  expect(summaryElement).not.toHaveClass("hidden");
});

test('handles swipe gesture to hide the card', () => {
  const onSwipe = jest.fn();
  (useMedia as jest.Mock).mockReturnValueOnce(true); 
  render(
    <MovieCard 
      title="Test Movie" 
      summary="This is a test summary." 
      imageURL="/test.jpg" 
      rating={8.5} 
      idx={1} 
      onSwipe={onSwipe} 
    />
  );

  const card = screen.getByRole('img', { hidden: true });
  fireEvent.touchStart(card, { touches: [{ clientX: 0 }] });
  fireEvent.touchMove(card, { touches: [{ clientX: 150 }] });
  fireEvent.touchEnd(card);

  expect(onSwipe).toHaveBeenCalled();
});