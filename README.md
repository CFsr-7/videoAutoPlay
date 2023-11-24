- **Supporting Methods**
  - setSize: Set the video size.
  - toPush: Trigger method under certain conditions - compatible with major browsers and iOS browsers.
  - VideoPlayer: Video tag component, see the following for detailed configuration parameters.
  - width: Width.
  - height: Height.
  - muted: Whether it's muted.
  - autoplay: Automatically play.
  - volume: Volume.
  - controls: Video container control functions.
  - isTruePlay: Execute auto-play with sound switch.

- **autoplay**
  - Video autoplay (with sound) is restricted.
  - Note: This project solves this issue but requires certain prerequisites.



- **Prerequisites**
  - A: The previous interface before navigation.
  - B: The interface after navigation, which is also the video playback interface.
  - Ensure that interface B is navigated from interface A.
    - iOS Compatibility Methods: Vue Router
    - PC (various major browsers): Vue Router, window.location.href
    - iOS System Detection Mechanism: iOS systems have a more cautious detection mechanism. Using the window method may cause page refresh and be considered a direct refresh within the current page.
