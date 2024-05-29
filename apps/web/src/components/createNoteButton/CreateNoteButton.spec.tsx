import { render } from '@testing-library/react';

import CreateNoteButton from './CreateNoteButton';

describe('CreateNoteButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateNoteButton files={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
