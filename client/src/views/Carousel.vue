<template>
    <div class="container">
        <b-carousel
            id="carousel"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            img-width="1024"
            img-height="480"
            background="#ababab"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
        <b-carousel-slide img-src="https://3.bp.blogspot.com/-IJ2Utnj4M80/XD4J3gA_Y_I/AAAAAAAAAy4/run09JDEQxkdiqkkltXkCNv7cwzpuLOBQCLcBGAs/s1600/gombal.png"/>
        <!-- Slides One -->
        <b-carousel-slide img-src="https://www.nandaabiz.com/wp-content/uploads/2015/09/programmer-in-love-800x445.png" />
        <!-- Slides Two -->
        <b-carousel-slide img-src="https://jagokata.com/images/upload/harly-umboh-debugging-itu-adalah-sebuah-metode-yang-dilakukan-oleh-para.jpg"/>
        <!-- Slides Three -->
        <b-carousel-slide img-src="https://pics.me.me/bug-featuro-feature-code-snail-its-not-a-bug-its-a-41923194.png"/>
        <!-- Slides Four -->
        <b-carousel-slide img-src="https://codinginfinite.com/wp-content/uploads/2019/05/documentation-where-were-going-we-dont-need-documentation.jpg"/>
        </b-carousel>
    </div>
</template>

<script>
import io from 'socket.io-client'
export default {
    data() {
        return {
            slide: 0,
            status: Boolean,
            socket: io.connect('http://localhost:3000')
        }
    },
    methods: {
        onSlideStart (slide) {
            this.sliding = true
            this.socket.emit('slideChange', slide)
        },
        onSlideEnd (slide) {
            this.sliding = false
        }
    },
    created() {
            this.socket.on('slide', (page) => {
            this.slide = page
        })
    },
}
</script>

<style>

</style>