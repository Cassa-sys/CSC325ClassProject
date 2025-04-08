import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../src/components/Hero';
 
describe('Hero', () => {
  // Basic Rendering Tests
  it('renders a heading', () => {
    render(<Hero />);
 
    const heading = screen.getByRole('heading', { level: 1 });
 
    expect(heading).toBeInTheDocument();
  }); 

  it('renders subheading', () => {
    render(<Hero />);

    const subheading = screen.getByRole('paragraph');

    expect(subheading).toBeInTheDocument();
  });

  it('rendersCallToAction', () => {
    render(<Hero />);

    const form = screen.getByRole('textbox');
    const callToAction = screen.getByRole('button');

    expect(form).toBeInTheDocument();
    expect(callToAction).toBeInTheDocument();
  });

  it('rendersImage', () => {
    render (<Hero />);
    const image = screen.getByRole('image');
    expect(image).toBeInTheDocument();
  })
  
  
})