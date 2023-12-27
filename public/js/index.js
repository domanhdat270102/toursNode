/* eslint-disable */
import '@babel/polyfill'
import { displayMap } from './mapbox';
import { login, logout } from './login'
import { updateSettings } from './updateSettings'
import { resizeImage } from "./resizeImage.js";
import { bookTour } from './stripe'


// DOM ELEMENTS
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data')
// const userPasswordForm = document.querySelector('.form-user-password')
const userPasswordForm = document.getElementsByTagName('form')[1];
const userImgEl = document.querySelector('.form__user-photo');
const userImgInputEl = document.querySelector('#photo');
const bookBtn = document.getElementById('book-tour')

// DELEGATION
if (mapBox) {
    const locations = JSON.parse(mapBox.dataset.locations);
    displayMap(locations)
}
if (loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login(email, password);
    })
}

if(logOutBtn) logOutBtn.addEventListener('click', logout)

// if(userDataForm) {
//     userImgInputEl.addEventListener("change", async (e) => {
//         const inputPic = userImgInputEl.files[0];
//         if (inputPic) {
//             const userPhotoElement = userImgEl
//             resizeImage(inputPic, 500, 500, userPhotoElement);
//         }
//     });
// } //C1

if(userDataForm) userDataForm.addEventListener('submit', e => {
    // e.preventDefault();
    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    // updateSettings({name, email}, 'data') // dung khi chua co photo tai len

    //khi can tai anh len
    e.preventDefault()
    const form = new FormData()
    form.append('name', document.getElementById('name').value)
    form.append('email', document.getElementById('email').value)
    form.append('photo', document.getElementById('photo').files[0])
    updateSettings(form, 'data')
})

if(userPasswordForm) userPasswordForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.getElementsByTagName('button')[1].textContent = 'Updating...'
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings({passwordCurrent, password, passwordConfirm}, 'password')
    document.getElementsByTagName('button')[1].textContent = 'Save password'
    userPasswordForm.reset()
})

if (bookBtn) bookBtn.addEventListener('click', e => {
    e.target.textContent = 'Procesing...'
    const { tourId } = e.target.dataset
    bookTour(tourId)
} )

const handleDisplayUserPhoto = e => {
    const imgFile = e.target.files?.[0]
    if (!imgFile?.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      userImgEl.setAttribute('src', reader.result);
    });
    reader.readAsDataURL(imgFile);
  };
  userImgInputEl.addEventListener('change', handleDisplayUserPhoto);  //C2

