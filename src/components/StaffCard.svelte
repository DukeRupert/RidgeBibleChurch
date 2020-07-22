<script>
    import { goto } from '@sapper/app';

    export let src='/blankPic.png';
    export let route=''
    export let name='Alec Paul';
    export let title='Lead Pastor';
    export let email='';
    let link = 'mailto:'.concat(email);
</script>

<style>
    div {
        display: flex;
        justify-content: space-around;
        max-width: 100%;
        margin: 1em 0;
    }

    img {
        max-height: 15vh;
        border-radius: 50%;
        margin-right: 1em;
    }

    h1 {
        font-size: 1.5em;
        font-weight: bold;
    }

    h4 {
        font-size: 0.75em;
        color: grey;
        padding: 0;
        margin: 0;
    }

    p {
        font-size: 0.75em;
        color: blue;
        padding: 0;
        margin: 0;
    }

    .content {
        display: flex;
        width: 45vw;
        flex-direction: column;
        justify-content: center;

        padding: 0;
    }

    .button {
        margin-top: 0.5em;
        padding: 0.5em 1em;
        border: none;
        border-radius: 50px;
        background-color: lightgray;
        width: auto;
        text-align: center;
    }

    /*Larger Screen*/
	@media only screen and (min-width: 655px) {

    div {
        margin: 1em 1em;
    }

    .content {
        width: 15vw;
    }
}

</style>

<div>
    <img {src} alt={name}/>
    <div class='content'>
        <h1>{name}</h1>
        <h4>{title}</h4>
        <a href={link}>
            <p>{email}</p>
        </a>
        {#if route !== ''}
        <a class="button" href={route}>View</a> 
        {/if}
    </div>
</div>
