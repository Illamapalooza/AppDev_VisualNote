import { render } from '@testing-library/react';

import UploadYourImageField from './UploadYourImageField';

describe('UploadYourImageField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UploadYourImageField />);
    expect(baseElement).toBeTruthy();
  });
});
