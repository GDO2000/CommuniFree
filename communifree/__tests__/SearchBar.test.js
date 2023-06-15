import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from '../components/FeedPage/SearchBar/index'
import Home from '../pages/index'
import TextInput from '../components/FeedPage/SearchBar/TextInput/TextInput'
import { test, expect } from "@jest/globals"
import CreatePostButton from '../components/FeedPage/CreateNewPostButton/CreateNewPostButton'

test('Search bar is visible on page', function() {
    render(<SearchBar/>);
    const searchbar = screen.getByRole('textbox');
    expect(searchbar).toBeInTheDocument();
    });

test('Create listing button shows a pop-up', function() {
    render(<CreatePostButton/>);
    const postButton = screen.getByRole('button');
    fireEvent(
        postButton,
        new MouseEvent('click')
      );

      let div = document.querySelector('[class="modalBackground"]');
    expect(div).toBeInTheDocument();
    });