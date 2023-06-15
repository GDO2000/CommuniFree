import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from '../components/FeedPage/SearchBar/index'
import Home from '../pages/index'
import TextInput from '../components/FeedPage/SearchBar/TextInput/TextInput'
import { test, expect } from "@jest/globals"

test('Search bar is visible on page', function() {
    render(<SearchBar/>);
    const searchbar = screen.getByRole('input');
    expect(searchbar).toBeInTheDocument();
    });