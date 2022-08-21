export default {
    data(){
        return{
            queryInfo:{
                page: 1,
                total:0,
                keyword:''
            }
        }
    },
    mounted() {
        this.init()
    },
    methods:{
        reset(){
            for(let k in this.queryInfo){
                if(k==='page'){
                    this.queryInfo[k]=1
                }else if(k==='total'){
                    this.queryInfo[k]=222
                }else{
                    this.queryInfo[k]=null
                }
            }
            console.log('reset',this.queryInfo);

        }
    }
}
