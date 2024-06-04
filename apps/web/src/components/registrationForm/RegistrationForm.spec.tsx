import { render } from '@testing-library/react';

import RegistrationForm from './RegistrationForm';

describe('RegistrationForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RegistrationForm />);
    expect(baseElement).toBeTruthy();
  });
});
