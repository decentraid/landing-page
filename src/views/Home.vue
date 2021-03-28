<template>
    <SiteLayout>
      <div class="landing">
        <div class="overlay">
          <div class="landing-content px-5">
              <h2 class="header_title">
                Binance<span class="binance_dot">.</span>Name
              </h2>
              <p class="py-3 intro_desc">
                {{$t("header_dapp_desc")}}
              </p>
              <div class="py-3 d-flex flex-row">
                <div class="px-1">
                  <a href="#" class="px-4 btn btn-purple rounded-pill inline-block f-ubuntu shadow-lg">
                    {{$t("read_litepaper")}}
                  </a>
                </div>
                <div class="px-1">
                  <a href="#" class="px-4 btn btn-yellow  rounded-pill inline-block f-ubuntu shadow-lg">
                    {{$t("watch_video")}}
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </SiteLayout>
</template>

<script>
// @ is an alias to /src
import SiteLayout from '../layouts/SiteLayout'

export default {
  name: 'Home',
  components: { SiteLayout }
}
</script>
