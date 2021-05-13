const vm = new Vue({
  el: "#app",
  data: {
    projetos: []
  },
  methods: {
    fetchProjetos() {
      fetch("http://taduapilocal.local/wp-json/api/projeto")
      .then(r => r.json())
      .then(r => {
        this.projetos = r;
      })
    }
  },
  created() {
    this.fetchProjetos();
  }
})