import { writable } from 'svelte/store';

export const dropdownOpen = writable(false);

export const donation = writable({
    name: '',
    email: '',
    amount: '',
    fund: '',
  })