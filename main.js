import Lenis from "@studio-freight/lenis"

const lenis = new Lenis({
    smoothTouch: true,
    smoothWheel: true,
})

window.lenis = lenis

const scroller = document.getElementById("scroller")
const cursorBox = document.getElementById("cursorBox")
const squareone = document.getElementById("squareone")
const cursor = document.getElementById("cursor")
scroller.style.width = "0%"

const isTouchDevice = "ontouchstart" in document.documentElement

if (isTouchDevice) {
    cursor.style.display = "hidden"
    cursorBox.style.display = "hidden"
    squareone.style.display = "hidden"
}

const debounce = (func, delay) => {
    let debounceTimer
    if (isTouchDevice) return function () {}
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
}

document.body.onpointermove = debounce((event) => {
    const { clientX, clientY } = event
    cursor.style.left = `${clientX}px`
    cursor.style.top = `${clientY}px`
    cursorBox.animate(
        {
            left: `${clientX}px`,
            top: `${clientY}px`,
        },
        { duration: 1000, fill: "forwards" }
    )
}, 10)

document.body.onpointerdown = debounce((_) => {
    cursorBox.animate(
        {
            width: "24px",
            height: "24px",
        },
        { duration: 100, fill: "forwards" }
    )
}, 50)

document.body.onpointerup = debounce((_) => {
    cursorBox.animate(
        {
            width: "32px",
            height: "32px",
        },
        { duration: 100, fill: "forwards" }
    )
}, 50)

lenis.on("scroll", (data) => {
    const maxScroll = data.dimensions.scrollHeight - data.dimensions.height
    const scroll = data.animatedScroll
    scroller.style.width = `${(scroll * 100) / maxScroll}%`
})

function raf(time) {
    lenis.raf(time)
    setTimeout(() => requestAnimationFrame(raf), 16)
}

requestAnimationFrame(raf)
