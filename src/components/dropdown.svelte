<script>
    import Fa from 'svelte-fa';
    import { faBars } from '@fortawesome/free-solid-svg-icons';
    import DropdownItem from './dropdownItem.svelte';
    import { dropdownOpen } from '../store';
    import { slide } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';

    let dropdownOpen_value = false;

    const unsubscribe = dropdownOpen.subscribe(value => {
		dropdownOpen_value = value;
    });
    
    function toggle() {
        dropdownOpen.update(value => !value);
    }
</script>

<style>

    li {
        display: flex;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
        font-size: 17px;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 0;
        margin: 0;
        background-color: rgba(1, 1, 1, 0);
        transition: filter 300ms;
    }
    div {
        position: fixed;
        overflow: hidden;
        z-index: 99;
        top: 80px;
        left: 0;
        width:100%;
        height: calc(100% - 80px);
        box-sizing: border-box;
        border-top: 2px black solid;
        background-color: white;
    }
    
</style>

{#if dropdownOpen_value}
    <li>
        <button on:click={toggle}><Fa icon={faBars} size='2x'/></button>
        <div in:slide="{{duration: 500, easing: sineIn }}">
            <DropdownItem title='MENU' route='/menu' onClick={toggle}/>
            <DropdownItem title='LOCATIONS' route='/locations' onClick={toggle}/>
            <DropdownItem title='ABOUT US' route='/about' onClick={toggle}/>
            <DropdownItem title='ORDER ONLINE' route='/menu' onClick={toggle}/>
        </div>
    </li>
{:else}
    <li>
        <button on:click={toggle}><Fa icon={faBars} size='2x'/></button>
    </li>
{/if}