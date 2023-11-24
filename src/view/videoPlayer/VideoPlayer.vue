<template>
  <video
      :muted="$props.muted"
      :controls="$props.controls"
      :autoplay="$props.autoplay"
      :style="{width:$props.vWidth,height:$props.vHeight}"
  >
    <source :src="$props.videoSrc" type="video/mp4" />
  </video>
</template>

<script lang="ts" setup>

  import {onMounted} from "vue";
  import {videoConfig} from "../../variable";

  const $props = defineProps({
    // width set value or null max
    vWidth : {
      type: String,
    },
    // height set value or null max
    vHeight : {
      type: String,
    },
    // videoUrl
    videoSrc : {
      type:String,
      required:true
    },
    // show autoplay
    autoplay : {
      type: Boolean,
      default: false,
    },
    // show muted
    muted : {
      type: Boolean,
      default: true,
    },
    // show operate
    controls : {
      type: Boolean,
      default: false,
    },
    // create volume
    volume : {
      type: Number,
      required:false,
    },

    /*
    * Whether to solve the browser mechanism
    * ——————————————————————————————————————
    * Video automatic playback
    * The browser mechanism believes that spam advertising
    * First, it is achieved by muting and then delaying the volume on
    * */
    isTruePlay : {
      type:Boolean,
      default: true,
    }
  })

  /*
  * Data
  * */
  let _videoElement : HTMLVideoElement | Object = {};

  /*
  * created
  * */
  const onLoad = () => {
    // create show set videoConfig params "volume"
    if($props.volume) {
      videoConfig.volume = $props.volume;
    }
  }
  onLoad();

  /*
  * isTruePlay
  * */
  const browserAutoPlayer : Function = () => {
    // addEventListener loadeddata
    if ("addEventListener" in _videoElement) {
      _videoElement.addEventListener("loadeddata", async () => {
        if (
            "muted" in _videoElement
            && _videoElement.muted
        ) {
          // start muted
          _videoElement.muted = false;
          // play video
          await _videoElement.play();
        }
      })
    }
  }

  onMounted(() => {
    _videoElement = document.querySelector("video")!;
    $props.isTruePlay && browserAutoPlayer();
  })

  /**
   * set video size
   * @param info width height
   */
  const setSize = (info:{width:string,height:string}) => {
    if ("style" in _videoElement) {
      _videoElement.style.width = info.width;
      _videoElement.style.height = info.height;
    }
  }

  /**
   * set video volume
   * @param _volume volume  0 ~ 1
   */
  const setVolume = (_volume:number) => {
    if(_volume > 1 || _volume < 0) {
      throw new Error("setVolume value > 1 || < 0，volume 0 ~ 1 ");
    }
    // element dom
    if ("volume" in _videoElement) {
      _videoElement.volume = _volume;
    }
  }

</script>
