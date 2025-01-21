import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../landing_page/home/HomePage';

// Mock child components used in HomePage
jest.mock('./', () => () => <div data-testid="hero">Hero Component</div>);
jest.mock('./Awards', () => () => <div data-testid="awards">Awards Component</div>);
jest.mock('./Education', () => () => <div data-testid="education">Education Component</div>);
jest.mock('./Pricing', () => () => <div data-testid="pricing">Pricing Component</div>);
jest.mock('./Stats', () => () => <div data-testid="stats">Stats Component</div>);
jest.mock('../../OpenAccount', () => () => <div data-testid="open-account">Open Account Component</div>);

describe('HomePage Component', () => {
  it('renders all child components correctly', () => {
    render(<HomePage />);

    // Verify that each child component is rendered
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('awards')).toBeInTheDocument();
    expect(screen.getByTestId('education')).toBeInTheDocument();
    expect(screen.getByTestId('pricing')).toBeInTheDocument();
    expect(screen.getByTestId('stats')).toBeInTheDocument();
    expect(screen.getByTestId('open-account')).toBeInTheDocument();
  });
});
