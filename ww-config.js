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
      type: "Text",
      bindable: true,
    },
    waveColor: {
      label: {
        en: "Wave color",
      },
      type: "Color",
      defaultValue: "#D0D5DD",
      bindable: true,
    },
    progressColor: {
      label: {
        en: "Progress color",
      },
      type: "Color",
      defaultValue: "#816DFF",
      bindable: true,
    },
  },
}
