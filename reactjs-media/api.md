---
sidebar_position: 5
---

# API Reference

Reactjs Media provides a set of components and simple API to create a customizable media player for your application.

This page contains the API reference for the components, functions, and types provided by the `reactjs-media` package.

## Components

### Video

`Video: React.ForwardRefExoticComponent<VideoProps & react.RefAttributes<any>>` - It is a default customizable video player component that can be used to play videos in your application.

### VideoControls

`VideoControls: React.ForwardRefExoticComponent<VideoControlsProps & react.RefAttributes<any>>` - It is a component containing the controls that can be used to control the video player.

### VideoContext

`VideoContext: React.Context<VideoCTX>` - It is a context that provides the state and methods to control the video player.

### VideoElement

`VideoElement: JSX.Element` - It is a component that wraps the HTML5 video element and provides the state and methods to control the video player.

## Hooks

### useControls

`useControls()` - This hook returns the methods to control the video player, such as `play`, `pause`, `togglePlay`, `seek`, `setVolume`, `toggleMute`, `toggleFullScreen`, etc.

```jsx
const { play, pause, togglePlay, seek, setVolume, toggleMute, toggleFullScreen } = useControls();
```

## Types

### VideoProps

`VideoProps` - It is an interface that defines the props accepted by the Video component.

```typescript
interface VideoProps {
  controls?: boolean;
  src: string;
  height: string | number;
  width: string | number;
  poster: string;
  contextMenu?: boolean;
  contextMenuItems?: Array<ContextMenuItem>;
  onTimeUpdate?: (time: number) => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onVolumeChange?: (volume: number) => void;
  onSeeking?: () => void;
  onSeeked?: () => void;
  onLoadedMetadata?: () => void;
  onLoadedData?: () => void;
  onCanPlay?: () => void;
}
```

### VideoPlayerRef

`VideoPlayerRef` - It used to define the ref for the Video component. This ref can be used to access the methods to control the video player.

```typescript
type VideoPlayerRef = {
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
  volume: (volume: number) => void;
  playbackRate: (rate: number) => void;
  toggleFullscreen: () => void;
  togglePip: () => void;
  toggleMute: () => void;
  togglePlay: () => void;
  setLoop: (loop: boolean) => void;
};
```
[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=ad96e8b378d5&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)