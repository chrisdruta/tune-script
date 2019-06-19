export default {
  selectedSegment: { row: 0, col: 0 },
  compositionErrors: null,
  settings: {
    fs: { value: 44100, error: "" },
    volume: { value: 10, error: "" },
    multiplier: { value: 1, error: "" },
    graphRange: { value: 4000, error: "" },
    aliasing: false
  },
  showingModals: {
    load: false,
    save: false,
    settings: false,
    alert: false
  },
  timelines: [
    {
      options: {
        title: 'Untitled Track 1',
        wave: 'sine',
        mute: false
      },
      segments: [
        {
          id: "t0",
          title: { value: "Tab 1", error: "" },
          expression: { value: "10*x", error: "" },
          length: { value: 1000, error: "" },
          volume: { value: 100, error: "" }
        },
        {
          id: "t1",
          title: { value: "Tab 2", error: "" },
          expression: { value: "20*x", error: "" },
          length: { value: 1000, error: "" },
          volume: { value: 100, error: "" }
        }
      ]
    },
    // {
    //   options: {
    //     title: 'Untitled Track 2',
    //     wave: 'saw',
    //     mute: true
    //   },
    //   segments: [
    //     {
    //       id: "t3",
    //       title: { value: "Tab 3", error: "" },
    //       expression: { value: "20*x", error: "" },
    //       length: { value: 500, error: "" },
    //       volume: { value: 100, error: "" }
    //     },
    //     {
    //       id: "t4",
    //       title: { value: "Tab 4", error: "" },
    //       expression: { value: "20*x", error: "" },
    //       length: { value: 500, error: "" },
    //       volume: { value: 100, error: "" }
    //     }
    //   ]
    // }
  ]
};
