export default {
  editor: {
    label: {
      en: "Audio Waveform",
    },
  },
  properties: {
    src: {
      label: {
        en: "Audio source",
      },
      type: "File",
    },
    waveColor: {
      label: {
        en: "Wave color",
      },
      type: "Color",
      defaultValue: "#D0D5DD",
    },
    progressColor: {
      label: {
        en: "Progress color",
      },
      type: "Color",
      defaultValue: "#816DFF",
    },
    playButton: {
      hidden: true,
      defaultValue: { isWwObject: true, type: "ww-button" },
    },
    playIcon: {
      hidden: true,
      defaultValue: { isWwObject: true, type: "ww-icon", content: { icon: "fas fa-play" } },
    },
    pauseIcon: {
      hidden: true,
      defaultValue: { isWwObject: true, type: "ww-icon", content: { icon: "fas fa-pause" } },
    },
  },
}
