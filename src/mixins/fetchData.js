export default {
  data() {
    return {
      loading: true,
      projetos: null,
    };
  },
  methods: {
    fetchProjetos(url) {
      this.loading = true;
      this.projetos = null;
      fetch(`http://taduapilocal.local/wp-json/api${url}`)
      .then(r => r.json())
      .then(r => {
        setTimeout(() => {
          this.projetos = r;
          this.loading = false;
        }, 5000)
      })
    },
  }
}