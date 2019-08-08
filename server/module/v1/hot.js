module.exports=(router)=>{
    
    //版本列表
    router.get('/hot/version/list',(ctx,next)=>{
        ctx.response.type = 'json';
        ctx.response.body=JSON.stringify([]);
    });
    
}