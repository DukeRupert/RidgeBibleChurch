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

  button {
    background-color: var(--buttonBackground);
    border: none;
    border-radius: 15px;
    color: var(--buttonColor);
    padding: 0.5em 1em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.5em;
    transition: all 200ms ease-in-out;
    align-self: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  button:hover,
  button:active {
    transform: scale(1.15, 1.15);
  }

  .req {
    margin-left: 3px;
    color: #f74545;
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
      <label>
        NAME
        <span class="req">*</span>
      </label>
      <input type="text" name="name" required />
      <label>
        EMAIL
        <span class="req">*</span>
      </label>
      <input type="email" name="email" required />
      <label>
        MESSAGE
        <span class="req">*</span>
      </label>
      <textarea rows="6" type="text" name="message" required />
      <button type="submit">Contact Us</button>
    </form>
  </div>
</section>
