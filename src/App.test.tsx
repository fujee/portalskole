import { render, screen, within } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
});

test('рендерује главни наслов у hero секцији', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/портал/i);
});

test('дугме „Започните сада“ шаље мејл на адресу подршке', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /започните сада/i })).toHaveAttribute(
    'href',
    'mailto:podrska@portalskole.fon.bg.ac.rs',
  );
});

test('секција са примерима води на портале школа у новом табу', () => {
  render(<App />);

  const heading = screen.getByRole('heading', {
    name: /једна платформа, различити идентитети школа/i,
  });
  const section = heading.closest('div') as HTMLElement;
  const links = within(section.parentElement as HTMLElement).getAllByRole('link');

  expect(links.map((link) => link.getAttribute('href'))).toEqual([
    'https://osmomcilonastasijevic.edu.rs/rs',
    'https://skola-pekic.edu.rs/rs',
    'https://ekonomskavranje.edu.rs/rs',
  ]);

  links.forEach((link) => {
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });
});

test('нигде на страници не стоји старо име „Portal Master“', () => {
  render(<App />);
  expect(document.body.textContent).not.toMatch(/portal\s?master|портал\s?мастер/i);
});
