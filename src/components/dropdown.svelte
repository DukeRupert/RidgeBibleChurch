<script>
    import Fa from 'svelte-fa';
    import { faBars } from '@fortawesome/free-solid-svg-icons';
    import DropdownItem from './dropdownItem.svelte';
    import { dropdownOpen } from '../store';
    import { slide } from 'svelte/transition';
    import { sineIn } from 'svelte/easing';
    
    import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

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
        height: calc(100% - 60px);
        box-sizing: border-box;
        border-top: 2px black solid;
        background-color: white;
    }
    
</style>

{#if dropdownOpen_value}
    <li>
        <button on:click={toggle}><Fa icon={faBars} size='2x'/></button>
        <div in:fly="{{duration: 500, x: 500, opacity: 0.5, easing: sineIn}}">
            <DropdownItem title='Staff' route='/staff' onClick={toggle}/>
            <DropdownItem title='Giving' route='/giving' onClick={toggle}/>
            <DropdownItem title='Sermons' route='/sermons' onClick={toggle}/>
            <DropdownItem title='Blog' route='/blog' onClick={toggle}/>
            <DropdownItem title='Statement of Faith' route='/statement' onClick={toggle}/>

        </div>
    </li>
{:else}
    <li>
        <button on:click={toggle}><Fa icon={faBars} size='2x'/></button>
    </li>
{/if}