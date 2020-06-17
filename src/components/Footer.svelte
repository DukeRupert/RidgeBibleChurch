<script>
    import Fa from 'svelte-fa';
    import { faPhone } from '@fortawesome/free-solid-svg-icons';
</script>

<style>
    div {
        display: flex;
        width: 100%;
        height: 25vh;
        padding: 1em;
        background: rgba(0, 0, 0, 0.5);
    }
</style>

<div>
    <Fa icon={faPhone} fw primaryColor="gold" style="background: black" />
</div>