import React from 'react';
import {render, screen} from '@testing-library/react';
import TextLink from '../lib/TextLink';

test('can render text only', () => {
  render(<TextLink text="homepage" href="/" />);

  screen.getByRole('link', {name: 'homepage'});
});

test('can render icon only', () => {
  render(<TextLink icon={<i aria-label="homepage" />} href="/" />);

  screen.getByRole('link', {name: 'homepage'});
});

test('can render text and icon', () => {
  const {container} = render(
    <TextLink text="homepage" icon={<i aria-label="icon" />} href="/" />
  );

  screen.getByRole('link', {name: 'homepage'});
  // Make sure icon is still rendered.
  expect(container.getElementsByTagName('i').length).toEqual(1);
});

test('passes extra props to Link', () => {
  render(<TextLink text="homepage" href="/" id="my-id" />);

  expect(screen.getByRole('link').id).toEqual('my-id');
});

test('passes classes to Link', () => {
  render(<TextLink text="homepage" href="/" className="my-class" />);

  expect(
    screen.getByRole('link').className.endsWith('textlink my-class')
  ).toBeTruthy();
});

test('iconBefore renders icon before text', () => {
  render(<TextLink text="homepage" icon={<i />} href="/" iconBefore />);

  expect(screen.getByRole('link').firstChild.nodeName.toLowerCase()).toEqual(
    'i'
  );
});

test('!iconBefore renders text before icon', () => {
  render(<TextLink text="homepage" icon={<i />} href="/" iconBefore={false} />);

  expect(screen.getByRole('link').firstChild.nodeName.toLowerCase()).toEqual(
    'span'
  );
});
