import { writable } from 'svelte/store';

export const dropdownOpen = writable(false);

export const contact = writable({
    name: "",
    email: "",
    message: ""
  })