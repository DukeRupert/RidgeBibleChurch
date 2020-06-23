<script>
    import DropdownItem from './dropdownItem.svelte';
    import Fa from 'svelte-fa';
    import { faBars } from '@fortawesome/free-solid-svg-icons';
    import { fly } from 'svelte/transition';
    import { sineIn } from 'svelte/easing';

    import { dropdownOpen } from '../store';
    //renaming store value to make markup more concise (ie. class:active)
    $: active = $dropdownOpen; 

    //toggle dropdown status on click
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
        transition: all 1s;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 0;
        margin: 0;
        background-color: rgba(1, 1, 1, 0);
        transition: all 0.4s ease-in;
    }

    /* Added when dropdown is clicked*/
    .active {
        transform: rotate(-90deg);
        color: #b60000;
    }

    .menu {
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


<li>
    <button class='button' class:active on:click={toggle}>
        <Fa icon={faBars} size='2x'/>
    </button>
    {#if $dropdownOpen}
    <div class='menu' transition:fly="{{duration: 400, x: 500, opacity: 0.8, easing: sineIn}}">
        <DropdownItem title='Staff' route='/staff' onClick={toggle}/>
        <DropdownItem title='Giving' route='/giving' onClick={toggle}/>
        <DropdownItem title='Sermons' route='/sermons' onClick={toggle}/>
        <DropdownItem title='Blog' route='/blog' onClick={toggle}/>
        <DropdownItem title='Statement of Faith' route='/statement' onClick={toggle}/>
    </div>
    {/if}
</li>