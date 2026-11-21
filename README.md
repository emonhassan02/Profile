# Profile
My first repository in Github
## 🎨 Animation Effects

The portfolio website includes 14 customisable animated background effects. Each effect can be activated by adding its corresponding CSS class to the `.vis` element in `index.html`.

| No. | Animation Name | CSS Class |
|---:|---|---|
| 1 | Cosmic Aurora | `effect-1` |
| 2 | Quantum Particle Field | `effect-2` |
| 3 | Energy Wave | `effect-3` |
| 4 | Atomic Universe | `effect-4` |
| 5 | Volumetric Light | `effect-5` |
| 6 | Holographic Interface | `effect-6` |
| 7 | Quantum Black Hole | `effect-7` |
| 8 | Plasma Nebula | `effect-8` |
| 9 | Quantum Hologram | `effect-9` |
| 10 | Gravitational Waves | `effect-10` |
| 11 | VASP Electron Density | `effect-11` |
| 12 | Quantum ESPRESSO Field | `effect-12` |
| 13 | Magnetic Field | `effect-13` |
| 14 | Plasma Glow | `effect-14` |

### How to Change the Animation

Open `index.html` and find 37 no line:

```html  
<div class="vis effect-1">
```

Change `effect-1` to any available class from the table.

For example:

```html
<div class="vis effect-11">
```

This activates the VASP Electron Density effect, provided its corresponding CSS animation is enabled in `style.css`.

**Note:** Only one effect class should be used at a time. All effects must have their corresponding CSS rules defined in `style.css`.
