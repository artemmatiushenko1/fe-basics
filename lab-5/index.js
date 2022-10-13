'use strict';

/*-----------------TASK-1------------------ */
const refs = {
  form: document.querySelector('.form'),
  formOutputContainer: document.querySelector('.form-output-container'),
};

const rules = {
  group: new RegExp(/^[А-ЯҐЄІЇ]{2}-[0-9]{2}$/),
  credentials: new RegExp(
    /^[А-ЯҐЄІЇ]{1}[а-яґєії]+\s{1}([а-яґєіїА-ЯҐЄІЇ]{1}.){2}$/
  ),
  email: new RegExp(/^[a-z\.-]+@[a-z]+\.com$/),
  phone: new RegExp(/^\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/),
  address: new RegExp(/^м\.\s[а-яґєіїА-ЯҐЄІЇ]+$/),
};

const resetErrors = (names) => {
  for (const name of names) {
    const inputEl = refs.form.querySelector(`[name='${name}']`);
    inputEl.classList.remove('input-invalid');
  }
};

const resetFormOutput = () => {
  refs.formOutputContainer.innerHTML = '';
};

const renderFormData = (data) => {
  const markup = `
    <h2>Введені дані:</h2>
    <ul>
      <li>ПІБ: <span>${data.credentials}</span></li>
      <li>Група: <span>${data.group}</span></li>
      <li>Телефон: <span>${data.phone}</span></li>
      <li>Адреса: <span>${data.address}</span></li>
      <li>Email: <span>${data.email}</span></li>
    </ul>
  `;

  refs.formOutputContainer.insertAdjacentHTML('afterbegin', markup);
};

const validateForm = () => {
  const validationErrors = [];
  const formValues = {};

  const formData = new FormData(refs.form);

  resetErrors(formData.keys());
  resetFormOutput();

  for (const [key, value] of formData) {
    const isValueValid = rules[key].test(value.trim());
    if (!isValueValid) {
      const inputEl = refs.form.querySelector(`[name='${key}']`);
      inputEl.classList.add('input-invalid');
      validationErrors.push({ name: key });
    } else {
      formValues[key] = value;
    }
  }

  return {
    validationErrors,
    formValues,
  };
};

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { validationErrors, formValues } = validateForm();

  if (validationErrors.length !== 0) return;

  renderFormData(formValues);
});

/*-----------------TASK-1------------------ */
