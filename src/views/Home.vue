<template>
    <SiteLayout>
      <div class="home_landing" id="fullpage_container">
        
        <div class="header" data-anchor="Header">
          <div class="header_overlay">
            <div class="header_content">
              
              <div class="header_mini_bar my-2 mb-3"></div>
                
              <div class="header_slogan text-capitalize font-weight-bold mb-4 f-ubuntu">
                {{$t("tokenize_yourself").toUpperCase()}}
              </div>

              <h2 class="header_title">
                Binance<span class="binance_dot">.</span>Name
              </h2>
              <p class="py-3 intro_desc">
                {{$t("header_dapp_desc")}}
              </p>
              <div class="py-3 d-flex flex-row">
                <div class="px-1">
                  <a href="#" class="px-4 btn btn-purple rounded-pill inline-block f-ubuntu shadow btn-lg">
                    {{$t("read_litepaper")}}
                  </a>
                </div>
                <div class="px-1">
                  <a href="#" class="px-4 btn btn-yellow  rounded-pill inline-block f-ubuntu shadow btn-lg">
                    {{$t("watch_video")}}
                  </a>
                </div>
              </div>
            </div>
              
          </div> <!-- end header overlay -->
        </div> <!-- end header -->

        <div  class="search_section" data-anchor="Search">
            <div class="search_overlay">
              <div class="container">
                 <div class="search_profile_title">
                   <div class="text f-ubuntu">
                      <div>{{$t("search")}} </div>
                      <div>{{$t("name")}} </div>
                   </div>
                 </div>

                
                 <div class="search_bar mt-5">
                    <div class="search_icon">
                      <svg-img data-src="/assets/img/site/search.svg"  />
                    </div>
                   <input 
                      type="text" 
                      ref="searchInput" 
                      class="search_input" 
                      :placeholder="$t('type_here')" 
                      @focus="e => handleSearchInputFocusBlur(e)"
                      @blur="e => handleSearchInputFocusBlur(e)"
                    />
                   <div class="btn_wrapper">
                      <button type="submit" class="btn search_btn btn-purple">
                        <svg-img data-src="/assets/img/site/right_arrow.svg" />
                      </button>
                   </div>
                 </div>
              </div>
            </div>

          <div class="custom-shape-divider-bottom-1617135408">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
            </svg>
          </div>
        </div>

        <div id="footer">
          
          <div class="footer_overlay py-5">

            <div class="my-5">
              <HomeFeatures />
            </div>
            <div class="my-2">
              <div v-html="$t('with_love_from_libertypie')"></div>
            </div>
          </div>
        </div>

      </div>
    </SiteLayout>
</template>

<script>
// @ is an alias to /src
import SiteLayout from '../layouts/SiteLayout'
import HomeFeatures from '../components/HomeFeatures';
//import Pageable from 'pageable'

export default {
  name: 'Home',
  components: { SiteLayout, HomeFeatures },
  mounted(){
  
  },

  methods: {
    handleSearchInputFocusBlur(e){

      let searchBar = document.querySelector(".search_bar")

      if(e.type == "focus"){
        searchBar.classList.add("is_focused")
      } else {
        searchBar.classList.remove("is_focused")
      }
    }

  }
}
</script>
