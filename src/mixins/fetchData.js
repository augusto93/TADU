export default {
  data() {
    return {
      projetos:null
    };
  },
  methods: {
    fetchProjetos() {
      fetch("http://taduapilocal.local/wp-json/api/projeto")
      .then(r => r.json())
      .then(r => {
        this.projetos = r;
      })
    },
  }
}