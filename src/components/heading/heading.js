import './heading.scss'
class Heading{
    render(pageFrom) {
        const heading = document.createElement("h1")
        const body = document.querySelector("body")
        // heading.innerHTML = "Web pack is awesome!!! page from = '"+ _.upperFirst(pageFrom)+"'"
        heading.innerHTML = "Web pack is awesome!!! page from = "+ pageFrom
        body.appendChild(heading)
    }
}
export default Heading