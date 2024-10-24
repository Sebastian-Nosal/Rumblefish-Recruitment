import Factory from './factory'; // Adjust the import path as necessary
import { ErrorNotification } from "../types/model";

// Mock content.json for testing
jest.mock('../assets/content.json', () => ({
  errors: {
    client: {
      header: 'Client Error',
      message: 'A client-side error has occurred.'
    },
    server: {
      header: 'Server Error',
      message: 'A server-side error has occurred.'
    },
    unknown: {
      header: 'Unknown Error',
      message: 'An unknown error has occurred.'
    }
  }
}));

describe('Factory', () => {
  describe('createErrorNotification', () => {
    it('should create a Client-Side error notification', () => {
      const code = '404';
      const message = 'Not Found';
      const notification:ErrorNotification = Factory.createErrorNotification(code, message);

      expect(notification).toEqual({
        header: 'Client Error',
        description: 'A client-side error has occurred.',
        type: 'Client-Side',
        details: message,
      });
    });

    it('should create a Server-Side error notification', () => {
      const code = '500';
      const message = 'Internal Server Error';
      const notification:ErrorNotification  = Factory.createErrorNotification(code, message);

      expect(notification).toEqual({
        header: 'Server Error',
        description: 'A server-side error has occurred.',
        type: 'Server-Side',
        details: message,
      });
    });

    it('should create an Unknown error notification for invalid codes', () => {
      const code = '123';
      const message = 'Some unknown error';
      const notification:ErrorNotification  = Factory.createErrorNotification(code, message);

      expect(notification).toEqual({
        header: 'Unknown Error',
        description: 'An unknown error has occurred.',
        type: 'Unknown',
        details: message,
      });
    });

    it('should create an Unknown error notification for codes outside 4xx and 5xx', () => {
      const code = '600';
      const message = 'Error occurred';
      const notification:ErrorNotification  = Factory.createErrorNotification(code, message);

      expect(notification).toEqual({
        header: 'Unknown Error',
        description: 'An unknown error has occurred.',
        type: 'Unknown',
        details: message,
      });
    });
  });
});
