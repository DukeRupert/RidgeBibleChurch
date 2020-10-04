<script>
  import Button from "../components/Button.svelte";
</script>

<style>
  div {
    /* height: 70vh; */
    width: 100%;
  }

  form {
    /* height: 40vh; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  input {
    margin-bottom: 2em;
  }
</style>

<div>
  <h1>CONTACT US</h1>
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <div hidden aria-hidden="true">
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
