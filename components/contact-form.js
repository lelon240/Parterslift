class CustomContactForm extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .form-group {
                    margin-bottom: 1rem;
                }
                label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                }
                input, textarea {
                    width: 100%;
                    padding: 1.2rem;
                    border-radius: 0.5rem;
                    font-size: 1.3rem;
border: 1px solid #d1d5db;
                    background-color: rgba(255, 255, 255, 0.1);
                    color: white;
                }
                input:focus, textarea:focus {
                    outline: none;
                    border-color: #f97316;
                    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.5);
                }
                button {
                    background-color: #f97316;
                    color: white;
                    font-weight: 600;
                    padding: 1rem 2rem;
                    border-radius: 0.5rem;
                    font-size: 1.1rem;
border: none;
                    cursor: pointer;
                    transition: background-color 0.2s;
                    width: 100%;
                }
                button:hover {
                    background-color: #ea580c;
                }
                ::placeholder {
                    color: #9ca3af;
                }
            </style>
            <form>
                <div class="form-group">
                    <label for="name">Imię</label>
                    <input type="text" id="name" name="name" placeholder="Twoje imię" required>
                </div>
                <div class="form-group">
                    <label for="phone">Telefon</label>
                    <input type="tel" id="phone" name="phone" placeholder="Twój numer telefonu" required>
                </div>
                <div class="form-group">
                    <label for="message">Wiadomość</label>
                    <textarea id="message" name="message" rows="4" placeholder="Opisz nam swoje potrzeby"></textarea>
                </div>
                <button type="submit">Wyślij wiadomość</button>
            </form>
        `;
    }
}

customElements.define('custom-contact-form', CustomContactForm);
