export default {
  data() {
    return {
      projetos:null
    };
  },
  methods: {
    fetchProjetos(url) {
      fetch(`http://taduapilocal.local/wp-json/api${url}`)
      .then(r => r.json())
      .then(r => {
        this.projetos = r;
      })
    },
  }
}