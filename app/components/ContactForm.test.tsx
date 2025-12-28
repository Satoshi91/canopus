import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  it('送信ボタンをクリックしたとき、名前が未入力であれば「名前は必須です」というメッセージが表示されること', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const submitButton = screen.getByRole('button', { name: '送信する' });
    await user.click(submitButton);

    expect(screen.getByText('名前は必須です')).toBeInTheDocument();
  });
});

