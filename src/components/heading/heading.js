import './heading.scss'

class Heading{
    render() {
        const heading = document.createElement("h1")
        const body = document.querySelector("body")
        heading.innerHTML = "Web pack is awesome!!!"
        body.appendChild(heading)
    }
}
export default Heading