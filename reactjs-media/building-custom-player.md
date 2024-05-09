---
sidebar_position: 4
---

# Building a Custom Player

Sometimes you might want to build a custom video player for your application to match your brand's design or add specific features. The `Video` component provided by `reactjs-media` is built in a modular way, making it easy to customize and extend.

The Video Player is divided into a number of components and hooks that you can use to build your custom player. These help you implement your own UI but while retaining all functionalities. These Include:

- `VideoProvider`: The root component that provides the context for the video player.
- `VideoControls`: A component containing the controls that can be used to control the video player.
- `useControls`: A hook that returns the methods to control the video player, such as `play`, `pause`, `togglePlay`, `seek`, `setVolume`, `toggleMute`, `toggleFullScreen`, etc.
- `VideoElement`: A component that wraps the HTML5 video element and provides the state and methods to control the video player.
- `ContextMenu`: A component that provides a context menu for the video player.
- `VideoPoster`: A component that displays the poster image before the video starts playing.

:::warning
The functionality on this page was added in version `v3.0.4`. So this article assumes you are using this version or later.
:::

## Getting started

We shall start with a simple example of a custom video player. That will reproduce the default player provided by the library.

```jsx
import { VideoProvider, VideoControls, VideoElement, VideoPoster } from "reactjs-media";

const CustomVideo = (props) => {
  return (
    <VideoProvider {...props}>
      <VideoElement src={props.src} controls={false} />
      {props.controls && <VideoControls />}
      <VideoPoster src={props.poster} />
      <ContextMenu />
    </VideoProvider>
  );
}
```

In the example above, we create a custom video player component called `CustomVideo`. We use the `VideoProvider` component to provide the context for the video player. We then render the `VideoElement` component with the video source and disable the default controls. We conditionally render the `VideoControls` component based on the `controls` prop. We also render the `VideoPoster` component with the poster image. Finally, we render the `ContextMenu` component to provide a context menu for the video player.

:::note
The `VideoProvider` and `VideoElement` component are required to provide the context for the video player. It should wrap all the components that need access to the video player state and methods.
:::

## Creating custom controls

You can create your own custom controlls UI if the defaulf doesn't match your design. You can use the `useControls` hook to get the methods to control the video player and build your own UI.

```jsx
import { useControls } from "reactjs-media";

const CustomControls = () => {
  const { play, pause, togglePlay, seek, setVolume, toggleMute, toggleFullScreen } = useControls();

  return (
    <div>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={togglePlay}>Toggle Play</button>
      <button onClick={() => seek(10)}>Seek 10s</button>
      <button onClick={() => setVolume(0.5)}>Set Volume 50%</button>
      <button onClick={toggleMute}>Toggle Mute</button>
      <button onClick={toggleFullScreen}>Toggle FullScreen</button>
    </div>
  );
}

const CustomVideo = (props) => {
  return (
    <VideoProvider {...props}>
      <VideoElement src={props.src} controls={false} />
      <CustomControls />
      <VideoPoster src={props.poster} />
      <ContextMenu />
    </VideoProvider>
  );
}
```

In the example above, we create a custom controls component called `CustomControls`. We use the `useControls` hook to get the methods to control the video player. We then create buttons that call the different methods on the video player when clicked. We then render the `CustomControls` component inside the `CustomVideo` component.

## The Context Menu

Customizing the context menu can be done in two ways. You can either pass an array of `ContextMenuItem` objects to the `Video` component as the `contextMenuItems` prop or create your own context menu component.

### Using `contextMenuItems`

You can pass an array of `ContextMenuItem` objects to the `Video` component as the `contextMenuItems` prop. Each `ContextMenuItem` object should have a `label` and an `onClick` function.

```jsx
import { Video } from "reactjs-media";
import {FaRocket, FaFire} from 'react-icons/fa';

const App = () => {
  const contextMenuItems = [
    {
      label: "Custom Item 1",
      onClick: () => alert("Custom Item 1 clicked"),
      icon: "FaRocket",
    },
    {
      label: "Custom Item 2",
      onClick: () => alert("Custom Item 2 clicked"),
      icon: "FaFire",
    },
  ];

  return (
    <div>
      <Video
        src={"/video.mkv"}
        controls={true}
        height={500}
        width={800}
        poster={
          "https://hips.hearstapps.com/hmg-prod/images/ripley-pa-108-011822-01629-r-661067043d66f.jpg?resize=980:*"
        }
        contextMenu={true}
        contextMenuItems={contextMenuItems}
      />
    </div>
  );
};
```

In the example above, we create an array of `ContextMenuItem` objects called `contextMenuItems`. Each object has a `label` and an `onClick` function. We then pass this array to the `Video` component as the `contextMenuItems` prop.

### Creating a custom context menu

You can also create your own context menu component and render it inside the `VideoProvider` component. You can use the `useControls` hook to get the methods to control the video player. Here is an example of a custom context menu component:

```jsx

import { useControls } from "reactjs-media";
import {FaRocket, FaFire} from 'react-icons/fa';
import { ContextMenu, Video } from "reactjs-media";
import { VideoProvider, VideoControls, VideoElement, VideoPoster } from "reactjs-media";

const CustomContextMenu = ({contextMenuItems}) => {
  const { togglePlay, toggleMute, toggleFullScreen } = useControls();

  return (
    <div>
      {contextMenuItems.map((item, index) => (
        <div key={index} onClick={item.onClick}>
          {item.icon}
          {item.icon}
          {item.label}
        </div>
      ))}
  );
}

const CustomVideo = (props) => {
  return (
    <VideoProvider {...props}>
      <VideoElement src={props.src} controls={false} />
      <VideoControls />
      <VideoPoster src={props.poster} />
      <ContextMenu 
      renderCustomMenu={(contextMenuItems) => <CustomContextMenu contextMenuItems={contextMenuItems}  />}
       />
    </VideoProvider>
  );
}
```

In the example above, we create a custom context menu component called `CustomContextMenu`. We use the `useControls` hook to get the methods to control the video player. We then render the context menu items passed as props. We then render the `CustomContextMenu` component inside the `CustomVideo` component. 

:::note
Even with a custom context menu, you can still have to set `contextMenu` prop to `true` in the `VideoProvider` component for it to be displayed.
:::

## Conclusion

Congs!! You can now build your own Video player for your React App Just like A Pro, Building a custom video player with `reactjs-media` is easy and flexible. You can customize the player UI, controls, and context menu to match your application's design and requirements. You can also extend the player functionalities by using the provided hooks and components.

Learn more about the available components, hooks, and types in the [API reference](/reactjs-media/api). In the Next Section

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=ad96e8b378d5&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)