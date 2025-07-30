import { notify } from "./notifier"

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => {
    setCounter(counter + 1);
    notify(`Counter incremented to ${counter + 1}`, {
      type: 'success',
      duration: 2000,
    })
  })
  setCounter(0)
}
