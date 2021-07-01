export default {
  data() {
    return {
      loading: true,
      api: null,
    };
  },
  methods: {
    fetchProjetos(url) {
      this.loading = true;
      this.api = null;
      fetch(`http://taduapilocal.local/wp-json/api${url}`)
      .then(r => r.json())
      .then(r => {
        // setTimeout(() => {
          this.api = r;
          this.loading = false;
        // }, 5000)
      })
    },
  }
}