import Lenis from "@studio-freight/lenis"
// import Kursor from "kursor"

const lenis = new Lenis({
    smoothTouch: true,
    smoothWheel: true,
})

window.lenis = lenis

const scroller = document.getElementById("scroller")
const cursorBox = document.getElementById("cursorBox")
const cursor = document.getElementById("cursor")
scroller.style.width = "0%"

document.body.onpointermove = (event) => {
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
}

document.body.onpointerdown = (_) => {
    cursorBox.animate(
        {
            width: "24px",
            height: "24px",
        },
        { duration: 100, fill: "forwards" }
    )
}

document.body.onpointerup = (_) => {
    cursorBox.animate(
        {
            width: "32px",
            height: "32px",
        },
        { duration: 100, fill: "forwards" }
    )
}

lenis.on("scroll", (data) => {
    const maxScroll = data.dimensions.scrollHeight - data.dimensions.height
    const scroll = data.animatedScroll
    scroller.style.width = `${(scroll * 100) / maxScroll}%`

    // console.log(data)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
