import { render } from '@testing-library/react';
import FileDropZone from './FileDropZone';
import jest from 'jest-mock'; // Import the 'jest' namespace from 'jest-mock' package

describe('FileDropZone', () => {
  it('should render successfully', () => {
    const mockOnDrop = jest.fn(); // Use the 'jest' namespace to create a mock function
    const mockFiles: File[] = [];

    const { baseElement } = render(
      <FileDropZone onDrop={mockOnDrop} files={mockFiles} />
    );
    expect(baseElement).toBeTruthy();
  });
});
