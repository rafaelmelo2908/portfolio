export default function contactForm() {
    class ForSubmit {
        constructor(settings) {
            this.settings = settings;
            this.form = document.querySelector(settings.form);
            this.formButton = document.querySelector(settings.button);
            if (this.form) {
                this.url = this.form.getAttribute('action');
            }
        }

        displaySuccessMessage() {
            this.form.innerHTML = this.settings.successMessage;
        }
    
        displayErrorMessage() {
            this.form.innerHTML = this.settings.errorMessage;
        }

        async sendForm() {
            try {

                await fetch (this.url,{
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body:"",
                });
                this.displaySuccessMessage();
            } catch {
                this.errorMessage();
                throw new Error(errorMessage);
            }
        }

        init() {
            if (this.form) this.formButton.addEventListener('click', () => this.displaySuccessMessage());
            return this;
        }
    }

    const formSubmit = new FormSubmit({
        form: "[data-form]",
        button: "[data-button]",
        successMessage: "<h1> Mensagem Enviada!</h1>",
        errorMessage: "<h1>Nao foi possivel envir</h1>",
    });
    formSubmit.init();

   




}