export default {
  data() {
    return {
      loading: true,
      api: null,
      listaProjetos: null,
    };
  },
  methods: {
    fetchProjetos(url) {
      this.loading = true;
      this.api = null;
      // fetch(`http://taduapilocal.local/wp-json/api${url}`)
      fetch(`https://www.taduarq.com/api/wp-json/api${url}`)
      .then(r => r.json())
      .then(r => {
        // setTimeout(() => {
        this.api = r;
        // }, 5000)
      })
      
    },
    fetchListaProjetos(url) {
      this.listaProjetos = null;
      // fetch(`http://taduapilocal.local/wp-json/api${url}`)
      fetch(`https://www.taduarq.com/api/wp-json/api${url}`)
      .then(r => r.json())
      .then(r => {
          this.listaProjetos = r;
          this.firstAndLastProject();
      })
    },
  }
}