import { animate, animation, style } from '@angular/animations';

export var colorAnimation = animation([
    style({
        backgroundColor: "{{ from }}"
    }),
    animate("{{ time }} ease-in-out", style({
        backgroundColor: "{{ to }}"
    }))
])