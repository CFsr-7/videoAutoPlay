- **支持方法**
    - setSize 设置视频大小
    - toPush  前提条件触发方法 - 兼容各大浏览器及IOS浏览器
    - VideoPlayer  视频标签组件,详情配置参数参考以下：
        - width 宽度
        - height 高度
        - muted 是否静音
        - autoplay 自动播放
        - volume 音量
        - controls  视频容器功能控件
        - isTruePlay 执行自动播放含声音开关

- **autoplay**
    - video autoplay muted...
    - 描述：视频标签自动播放(含声音)，会被浏览器机制限制，
    - 注意：此项目即解决了此问题，但需要一定前提条件。



- **前提条件**
    - A 为跳转前界面，B 为跳转后界面同时为视频播放界面。
    - 确保 B 界面是从 A 界面跳转过来
    - 需注意
        - IOS兼容方式：vue-router
        - PC各大浏览器： vue-router、window.location.href
        - IOS 系统检测机制更为谨慎，因此使用window方式会刷新页面并被认为是在当前页面直接进行刷新。
- 
- **注意**
- 本包只是记录如何解决此问题，并编写出此NPM包，并不能用在刷新界面逻辑中... 请熟知！
