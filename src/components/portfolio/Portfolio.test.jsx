import React from 'react';
import { render, screen, within, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { createInstance } from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import Portfolio from './Portfolio';
import Experience from '../experience/Experience';
import pt from '../../i18n/pt.json';
import en from '../../i18n/en.json';

// Keep DOM interactions and real translations; animations are outside these tests.
jest.mock('framer-motion', () => {
  const React = require('react');
  const motion = {};
  ['div', 'button', 'article', 'a', 'span'].forEach(tag => {
    motion[tag] = React.forwardRef(({
      initial, animate, whileInView, viewport, variants, transition,
      whileHover, whileTap, ...props
    }, ref) => React.createElement(tag, { ...props, ref }));
  });
  return { motion };
});

async function renderSections(language = 'pt') {
  const i18n = createInstance();
  await i18n.use(initReactI18next).init({
    lng: language,
    fallbackLng: 'pt',
    resources: { pt: { translation: pt }, en: { translation: en } },
    interpolation: { escapeValue: false }
  });
  render(<I18nextProvider i18n={i18n}><Experience /><Portfolio /></I18nextProvider>);
  return i18n;
}

test.each(['pt', 'en'])('shows six selected projects without photos in %s', async language => {
  await renderSections(language);
  const cards = screen.getAllByRole('article');
  expect(cards).toHaveLength(6);
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
  expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /CRM SaaS/ })).toBeInTheDocument();
  expect(cards.some(card => within(card).queryByRole('heading', { name: /Salesforce/ }))).toBe(true);
  expect(screen.getByText(/Flyway.*ddl-auto=validate/)).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'PokéApp' })).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Psicoterapia Site/ })).toBeInTheDocument();

  const crm = cards.find(card => within(card).queryByRole('heading', { name: /CRM SaaS/ }));
  expect(within(crm).queryByRole('link')).not.toBeInTheDocument();
  expect(screen.getAllByRole('link')).toHaveLength(6);
  expect(screen.getByRole('link', { name: /^(Documentação|Documentation)$/ })).toHaveAttribute('href', 'https://teecoleonard.github.io/anduril-docs/');
  expect(screen.getByRole('link', { name: 'Salesforce / LWC' })).toHaveAttribute('href', 'https://github.com/teecoleonard/lwc-salesforce-ia');

  const psicoterapiaCard = cards.find(card => within(card).queryByRole('heading', { name: /Psicoterapia Site/ }));
  expect(within(psicoterapiaCard).getByRole('link')).toHaveAttribute('href', 'https://github.com/teecoleonard/psicoterapia-site');
});

test('filters projects and preserves the selected category when changing language', async () => {
  const i18n = await renderSections();
  userEvent.click(screen.getByRole('button', { name: 'Web' }));
  expect(screen.getAllByRole('article')).toHaveLength(2);
  expect(screen.getByRole('heading', { name: /CRM SaaS/ })).toBeInTheDocument();

  await act(async () => { await i18n.changeLanguage('en'); });
  expect(screen.getByRole('heading', { name: 'Featured Projects' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Web' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getAllByRole('article')).toHaveLength(2);
  userEvent.click(screen.getByRole('button', { name: 'Apps' }));
  expect(screen.getAllByRole('article')).toHaveLength(3);
  userEvent.click(screen.getByRole('button', { name: 'API' }));
  expect(screen.getAllByRole('article')).toHaveLength(1);
  expect(within(screen.getByRole('article')).getByRole('heading', { name: /Salesforce/ })).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', { name: 'All' }));
  expect(screen.getAllByRole('article')).toHaveLength(6);
});

test.each([
  ['pt', 'Tecnologias & Competências', 'Aplicações Mobile e Local-First'],
  ['en', 'Technologies & Expertise', 'Mobile and Local-First Applications']
])('shows six expertise areas in %s', async (language, title, mobileTitle) => {
  await renderSections(language);
  const section = screen.getByRole('heading', { name: title }).closest('section');
  expect(within(section).getAllByRole('heading', { level: 3 })).toHaveLength(6);
  expect(within(section).getByRole('heading', { name: mobileTitle })).toBeInTheDocument();
  for (const technology of ['Vitest', 'IndexedDB', 'LWC', 'CNAB 240', 'DDD', 'ADRs', 'SDD']) {
    expect(within(section).getByText(technology)).toBeInTheDocument();
  }
});
