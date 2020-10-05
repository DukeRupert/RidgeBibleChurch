<script>
  import Button from "../components/Button.svelte";
</script>

<style>
  div {
    /* height: 70vh; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
  }
  input {
    margin-bottom: 2em;
    border-radius: 5px;
    border: 2px solid;
    padding: 0.5em 0em;
  }

  textarea {
    border-radius: 5px;
    border: 2px solid;
    padding: 0.5em 0em;
  }

  .hide {
    display: none;
  }
</style>

<section>
  <div>
    <h1>CONTACT US</h1>
    <form
      name="contact"
      netlify
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <div hidden aria-hidden="true" class="hide">
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </div>
      <label>NAME - Optional</label>
      <input type="text" name="name" />
      <label>EMAIL - Required</label>
      <input type="email" name="email" required />
      <label>MESSAGE - Required</label>
      <textarea rows="6" type="text" name="message" required />
      <Button type="submit" label="Submit" center />
    </form>
  </div>
</section>
