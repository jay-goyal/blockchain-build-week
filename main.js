import Lenis from "@studio-freight/lenis"

new kursor({
    type: 5,
    color: "#ffffff",
})

const lenis = new Lenis({
    smoothTouch: true,
    smooth: true,
    smoothWheel: true,
})

window.lenis = lenis

const scroller = document.getElementById("scroller")
scroller.style.width = "0%"

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
