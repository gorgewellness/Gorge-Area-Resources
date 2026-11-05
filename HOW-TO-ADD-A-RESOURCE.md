# How to add or change a resource

All resources live in **resources.js**. You never need to touch index.html.

## Change a phone number, hours or description
1. On GitHub, open `resources.js` and click the pencil icon.
2. Press Ctrl+F (Cmd+F on Mac) and search for the resource's name.
3. Edit the text between the quotation marks. Do not delete the quotes or commas.
4. Click **Commit changes**. The live site updates in a minute or two.

## Add a new resource
1. Open `resources.js` and scroll to the end of the list.
2. Put a comma after the last `}`, then paste this template and fill it in:

```
{
  n: "Name of the program",
  s: ["food"],
  c: ["Hood River", "Wasco"],
  a: AA,
  d: "One or two sentences about what it offers.",
  es: "The same sentence in Spanish (optional).",
  ph: "541-555-0100",
  u: "https://example.org",
  det: [
    "First thing it offers",
    "Second thing it offers"
  ]
},
```
(The last block in the list has no comma after its `}`.)

## What the fields mean
- **n**: the name. Must be unique.
- **s**: service types, from: mental, dental, medical, wellness, food, childcare, kidsprog, classes, housing, work, legal, recovery, transport, crisis. You can list several.
- **c**: counties, from "Hood River", "Wasco", "Klickitat". Use `AC` for all three.
- **a**: ages. Shortcuts: `AA` all ages, `ADT` teens and up, `ADL` adults (19+), `KP` kids and teens, `FAM` kids, teens and young adults. Or list them, such as `["kids","teens"]`.
- **d**: English description. **es**: Spanish description (if left out, English shows).
- **ph**: phone (optional). **u**: website (optional). If you have no website, add `find: 1` to show a "Search for it" link.
- **det**: the "What's offered" list (optional).
- **esn**: a Spanish name (optional, only if the name should be translated).

## If the page goes blank after an edit
A comma or quotation mark is probably missing. On GitHub, open the **History** button on resources.js and click **Revert** on your last change.

## Guides
The quick guides are in index.html, in the list that starts with `var G=[`. Each guide lists resource names exactly as they appear in resources.js.
