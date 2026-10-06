# A Small Idea

A short film-strip website that turns into an invitation.

## The story, frame by frame

| # | Image | What happens |
|---|-------|--------------|
| — | (black) | "Hey." → "I made you something." A point of light opens into a white page. |
| — | (white) | "Everything good starts small." Ink stems sway; she presses and holds to make them grow. |
| 0 | `daisy` | The daisy rises from the bottom. A butterfly flies in and lands on it: "Out of every flower in the field… it picked this one. I know the feeling." |
| 1 | `run` | **01 — Honestly.** "I like you." |
| 2 | `meadow` | "It's easy with you." |
| 3 | `cosmos` | "I like who I am around you." |
| 4 | `dance` | **02 — Us, so far.** "We've been out a lot." |
| 5 | `campfire` | "Every one of them was good." |
| 6 | `sunset` | "This one, I want to be special." Four days, 12 to 15 December. |
| 7 | `grass` | **03 — Something special.** "A trip. Just us." |
| 8 | `sunflowers` | "This is the part where I get shy." / "Will you go on a trip with me?" + two buttons |
| 9 | `eternity` | Opens from the button she taps: "Good." (or "Of course.") and a small itinerary card |

## Files

- `invitation.html` — the page (styles, markup and script in one file)
- `assets/` — the ten images
- `build.mjs` — wraps the page into a standalone site in `docs/`
- `docs/` — the deployable result, served by GitHub Pages
- `og.jpg` — the link-preview image

## Personalise

In `invitation.html`, find the `CONFIG` block at the top of the script:

```js
const CONFIG = {
  forName: '',                              // her first name, shown as "For …" top-right (optional)
  reply: { channel: 'none', to: '' },       // 'whatsapp' | 'sms' | 'email' | 'none'
  dates: { short: '12 to 15 December', card: 'Sat 12 – Tue 15 December' },
};
```

For WhatsApp: `{ channel: 'whatsapp', to: '919876543210' }` (country code + number, digits only).
Then run `node build.mjs`.

## Live site

https://gireeshkumarreddy.github.io/a-small-idea/

GitHub Pages serves the `docs/` folder on `main`. After changing anything, run `node build.mjs`,
commit and push; the site updates in a minute or two.
Preview locally with `python -m http.server 5173 --directory docs`.
