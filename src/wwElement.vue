<template>
  <div>
    <div class="wrapper">
      <button class="btn" @click="play">
        <svg
          v-if="!isPlaying"
          xmlns="http://www.w3.org/2000/svg"
          style="width: 20px; height: 20px"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#667085"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M7 4v16l13 -8z" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          style="width: 20px; height: 20px"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#667085"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
          <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
        </svg>
      </button>
      <div id="vm-audiovizbar" style="width: 100%"></div>
      <button class="btn" @click="stop">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style="width: 20px; height: 20px"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#667085"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" />
          <path d="M20 4v5h-5" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import WaveSurfer from "wavesurfer.js"
export default {
  props: {
    content: { type: Object, required: true },
  },
  data() {
    return {
      wavesurfer: null,
      isPlaying: false,
    }
  },
  methods: {
    play() {
      this.wavesurfer.playPause()
    },
    stop() {
      this.wavesurfer.stop()
      if (this.isPlaying) {
        this.play()
      }
    },
  },
  mounted() {
    this.wavesurfer = WaveSurfer.create({
      container: "#vm-audiovizbar",
      waveColor: this.content.waveColor,
      progressColor: this.content.progressColor,
      url: this.content.src,
      height: 40,
      cursorColor: "transparent",
      barWidth: 4,
      barGap: 4,
      barRadius: 4,
    })

    this.wavesurfer.on("play", () => {
      this.isPlaying = true
    })

    this.wavesurfer.on("pause", () => {
      this.isPlaying = false
    })
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;

  .btn {
    padding: 8px;
    background: transparent;
    border: 1px solid #d0d5dd;
    border-radius: 50px;
    display: flex;
    place-items: center;
    cursor: pointer;
  }
}
</style>
