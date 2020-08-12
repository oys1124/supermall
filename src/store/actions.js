export default {
    addCart(context,payload){
        // payload新添加的商品
        // state.cartList.push(payload)
        // 1.查找之前数组中是否有该商品
        return new Promise((resolve => {
            let product = context.state.cartList.find(item=> item.iid === payload.iid)
            // 2.
            if(product){
                // product.count += 1
                context.commit('addCounter',product)
                resolve('当前的商品数量+1')
            }else{
                payload.count = 1
                // state.cartList.push(payload)
                context.commit('addToCart',payload)
                resolve('添加了新的商品')
            }
        }))
    }
}