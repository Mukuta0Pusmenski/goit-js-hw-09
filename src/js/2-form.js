const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: '',
    message: '',
};

// Відновлюємо дані з локального сховища при завантаженні сторінки
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

// Відстежуємо зміни в полях форми
form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Відправляємо форму
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        localStorage.removeItem(STORAGE_KEY);
        formData = { email: '', message: '' };
        form.reset();
    }
});
