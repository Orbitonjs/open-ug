---
sidebar_position: 3
---

# Controlling the Player

The `Video` component provides a way to control the player using `Refs`. This allows you to access the player's methods such as `play()`, `pause()`, `seek()`, and `setVolume()`.

To continue with this guide, you should have a basic understanding of Refs in React. If you're not familiar with Refs, you can read more about them in the [React documentation](https://react.dev/learn/referencing-values-with-refs).

## Accessing the Player

To access the player's methods, you need to create a Ref using the `useRef` hook. You can then pass this Ref to the `ref` prop of the `Video` component.

```jsx
import { Video } from "reactjs-media";

const App = () => {
  const playerRef = useRef(null);

  const playVideo = () => {
    playerRef.current.play();
  };

  const pauseVideo = () => {
    playerRef.current.pause();
  };

  return (
    <div>
      <Video
        ref={playerRef}
        src={"/video.mkv"}
        controls={true}
        height={500}
        width={800}
        poster={
          "https://hips.hearstapps.com/hmg-prod/images/ripley-pa-108-011822-01629-r-661067043d66f.jpg?resize=980:*"
        }
      />
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
    </div>
  );
};
```

In the example above, we create a Ref called `playerRef` using the `useRef` hook. We then define two functions, `playVideo` and `pauseVideo`, that call the `play()` and `pause()` methods on the player, respectively. Finally, we pass the `playerRef` to the `ref` prop of the `Video` component.

To learn more about the available methods see [API reference](/reactjs-media/api#videoplayerref).

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=ad96e8b378d5&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)