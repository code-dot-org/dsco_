import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Link from '../lib/Link';

test('can render with text children', () => {
  render(<Link href="/">homepage</Link>);

  screen.getByRole('link', {name: 'homepage'});
});

test('can render with element children', () => {
  render(
    <Link href="http://www.example.com">
      <img src="cat.jpg" aria-label="cat" />
    </Link>
  );

  screen.getByRole('link');
  screen.getByRole('img', {name: 'cat'});
});

test('weight adds corresponding class', () => {
  render(
    <Link href="/" weight="medium">
      homepage
    </Link>
  );

  expect(screen.getByRole('link').className).toEqual('link medium');
});

test('className class is applied last', () => {
  render(
    <Link href="/" weight="bold" className="my-class">
      homepage
    </Link>
  );

  expect(screen.getByRole('link').className).toEqual('link bold my-class');
});

test('onClick is called', () => {
  const onClick = jest.fn();
  render(
    <Link href="/" onClick={onClick}>
      homepage
    </Link>
  );

  fireEvent.click(screen.getByRole('link'));

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('openInNewTab adds target attribute', () => {
  render(
    <Link href="/" openInNewTab>
      homepage
    </Link>
  );

  expect(screen.getByRole('link').target).toEqual('_blank');
});

test('external adds rel attribute', () => {
  render(
    <Link href="/" external>
      homepage
    </Link>
  );

  expect(screen.getByRole('link').rel).toEqual('noopener noreferrer');
});
