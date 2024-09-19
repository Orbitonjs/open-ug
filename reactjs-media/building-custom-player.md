---
sidebar_position: 4
---

# Building a Custom Player

Sometimes you need a custom video player that matches your brand’s design or has specific features. With **reactjs-media**, building a custom player is modular and easy. You can create a completely unique UI while maintaining all core functionalities.

## Modular Components for Customization

The **reactjs-media** library divides the video player into reusable components and hooks. You can use these to build your own player UI and add specific features as needed. The key components and hooks are:

- **VideoProvider**: The root component that provides context for the video player.
- **VideoControls**: A component for video controls (play, pause, volume, etc.).
- **useControls**: A hook that gives access to video control methods like `play`, `pause`, `seek`, `setVolume`, etc.
- **VideoElement**: A wrapper for the HTML5 video element, providing full control over video playback.
- **ContextMenu**: A customizable right-click menu for the video player.
- **VideoPoster**: Displays a poster image before video playback starts.

> **Note:** This functionality requires **v3.0.4** or later of **reactjs-media**.

---

## Getting Started: A Simple Custom Video Player

In this section, we’ll reproduce the default player provided by **reactjs-media** using custom components.

**Example Code:**

```javascript
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

In this example, we:

1. Use **VideoProvider** to create a context for the video player.
2. Render the **VideoElement** with a custom `src` and disabled default controls.
3. Conditionally render the **VideoControls** based on the `controls` prop.
4. Display the **VideoPoster** until the video starts playing.
5. Add a **ContextMenu** for additional interactions.

> **Important:** Both **VideoProvider** and **VideoElement** are required to create a functional video player, as they handle state and methods for the player.

---

### Creating Custom Controls

You can fully customize the controls to fit your design. Use the `useControls` hook to access methods like `play`, `pause`, `seek`, `toggleMute`, and more.

**Example Code:**

```javascript
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
      <button onClick={toggleFullScreen}>Full Screen</button>
    </div>
  );
};

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

Here, we:

- Create **CustomControls** using buttons to control the video player.
- Use the **useControls** hook to call methods such as `play`, `pause`, `seek`, `setVolume`, and `toggleFullScreen`.
- Add **CustomControls** inside the **CustomVideo** component.

---

### Customizing the Context Menu

There are two ways to customize the context menu:

**1. Using Custom Menu Items:**
Pass an array of custom menu items to the `Video` component.

**Example Code:**

```javascript
import { Video } from "reactjs-media";
import { FaRocket, FaFire } from "react-icons/fa";

const App = () => {
  const contextMenuItems = [
    {
      label: "Custom Item 1",
      onClick: () => alert("Custom Item 1 clicked"),
      icon: <FaRocket />,
    },
    {
      label: "Custom Item 2",
      onClick: () => alert("Custom Item 2 clicked"),
      icon: <FaFire />,
    },
  ];

  return (
    <Video
      src="/video.mkv"
      controls={true}
      height={500}
      width={800}
      poster="https://example.com/poster.jpg"
      contextMenu={true}
      contextMenuItems={contextMenuItems}
    />
  );
};
```

In this example, we pass custom items to the **Video** component’s `contextMenuItems` prop, each with an icon and `onClick` handler.

---

#### 2. Creating a Custom Context Menu

You can also create your own context menu UI by using the `useControls` hook to control the video player.

**Example Code:**

```javascript
import { useControls } from "reactjs-media";
import { FaRocket, FaFire } from "react-icons/fa";

const CustomContextMenu = ({ contextMenuItems }) => {
  const { togglePlay, toggleMute, toggleFullScreen } = useControls();

  return (
    <div>
      {contextMenuItems.map((item, index) => (
        <div key={index} onClick={item.onClick}>
          {item.icon}
          {item.label}
        </div>
      ))}
    </div>
  );
};

const CustomVideo = (props) => {
  return (
    <VideoProvider {...props}>
      <VideoElement src={props.src} controls={false} />
      <VideoControls />
      <VideoPoster src={props.poster} />
      <ContextMenu renderCustomMenu={(items) => <CustomContextMenu contextMenuItems={items} />} />
    </VideoProvider>
  );
};
```

In this case, we create a **CustomContextMenu** and render it inside the **CustomVideo** component.

---

### Conclusion

With **reactjs-media**, building a custom video player is both flexible and straightforward. You can tailor the player UI, controls, and context menu to perfectly match your application’s design and functionality needs. Get creative with the components and hooks provided, and you’ll have a professional video player in no time!

Learn more about the available components, hooks, and types in the [API reference](/reactjs-media/api). In the Next Section

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=ad96e8b378d5&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)