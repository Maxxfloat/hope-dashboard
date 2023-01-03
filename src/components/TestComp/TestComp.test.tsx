import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import TestComp from './index';

describe('testing', () => {
  test('test user event', () => {
    render(<TestComp />);
    const button = screen.getByRole('button');

    user.click(button);

    const element = screen.getByRole('heading', {
      level: 2
    });

    expect(element.textContent).toBe(1);
  });
});
