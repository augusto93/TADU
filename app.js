const vm = new Vue({
  el: "#app",
  data: {
    projetos: [],
    projeto: {},
    show: false,
    showAbout: false
  },
  created() {
    this.fetchProjetos();
    this.fetchProjeto();
  },
  mounted() {
    
  },
  methods: {
    fetchProjetos() {
      fetch("http://taduapilocal.local/wp-json/api/projeto")
      .then(r => r.json())
      .then(r => {
        this.projetos = r;
      })
    },
    fetchProjeto() {
      fetch("http://taduapilocal.local/wp-json/api/projeto/zereses/")
      .then(r => r.json())
      .then(r => {
        this.projeto = r;
      })
    }
  },
 
})