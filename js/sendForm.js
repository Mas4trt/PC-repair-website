const sendForm = () => {
    const form = document.querySelector(".modal");
    form.onsubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://httpbin.org/post', {
                method: 'POST',
                body: new FormData(form)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

        } catch (error) {
            console.error('Error:', error);
            alert("Данные не сохранены");
        } finally {
            form.reset();
        }
    };
}

sendForm();