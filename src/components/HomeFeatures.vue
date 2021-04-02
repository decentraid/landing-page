<template>
    <div class="footer_features">
        <div 
              v-for="(dataObj,index) in cardsDataArray" 
              :key="index"
              :class="['card', 'text-center', dataObj.className]"
        >
            <div class="card-header">
                <svg-img :src="'/assets/img/site/'+dataObj.icon" class="icon" />
            </div>
            <div class="card-body">
                 <h5 class="card-title">{{$t(dataObj.title)}}</h5>
                 <p class="card-content">
                    {{$t(dataObj.content)}}
                 </p>
            </div>
        </div>    
    </div>
</template>

<script>

export default {
    data(){
        return {
            cardsDataArray: [
                {
                    title: "bsc_name_service",
                    content: "bsc_name_service_desc",
                    className: 'bg_bsc_name_service',
                    icon: 'home_user.svg'
                },
                {
                    title: "micro_blogging",
                    className: 'bg_micro_blogging',
                    content: "micro_blogging_desc",
                    icon: 'home_blog.svg'
                },
                {
                    title:      "nft_marketplace",
                    content:    "nft_marketplace_desc",
                    className:  'bg_nft_marketplace',
                    icon:       'm.svg'
                },
               
            ]
        }
    },
    mounted(){
        //new Glide('.glide').mount();
    }
}
</script>

<style>

</style>