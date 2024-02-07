export default {
  editor: {
    label: {
      en: "Audio Waveform",
    },
  },
  properties: {
    src: {
      label: {
        en: "Audio Source",
      },
      type: "Text",
      bindable: true,
    },
    waveColor: {
      label: {
        en: "Wave Color",
      },
      type: "Color",
      defaultValue: "#D0D5DD",
      bindable: true,
    },
    progressColor: {
      label: {
        en: "Progress Color",
      },
      type: "Color",
      defaultValue: "#816DFF",
      bindable: true,
    },
  },
}
