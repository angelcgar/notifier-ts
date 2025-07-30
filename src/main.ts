import './style.css'

// import { notify } from './notifier'
import { setupCounter } from './counter'

// notify("Hello world!", {
//   type: 'success',
//   duration: 4000,
// })

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <button id="mi-boton">click me</button>
//   </div>
// `

// document.querySelector<HTMLButtonElement>('#mi-boton')!.addEventListener('click', () => {
//   notify("This is a notification!", {
//     type: 'info',
//     duration: 3000,
//   })
// })


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
