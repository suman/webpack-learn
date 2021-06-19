import './hello-world-button.scss'
class HellworldButton {
    buttonclass = "hello-world-button"
    render () {
        const helloWorldButton = document.createElement('button')
        helloWorldButton.innerHTML = "Hello World"
        helloWorldButton.classList.add(this.buttonclass)
        const body = document.querySelector("body")
        body.appendChild(helloWorldButton)
        helloWorldButton.onclick = function () {
            const p = document.createElement('p')
            p.innerHTML = "Hello World Boys!!"
            p.classList.add("hello-world-text")
            body.appendChild(p)
        }
    }
}

export default HellworldButton;