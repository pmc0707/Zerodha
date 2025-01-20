import React from 'react';
import {render,screen} from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import Hero from '../landing_page/home/Hero';
//test suite

describe('Hero Component',()=>{
    test("render hero image",()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png")
    });
});