# Demo project to test custom made decorators in Lit-element

## To build
```
npm run build
```

## To run
```
npm run serve
```
---

## The problem
The value of the property decorated can't be changed within the decorator. The framework fails on `_requestUpdate` method due to the lack of `_changedProperties` attribute.

If the property is changed through the 'Click Count' button everthing goes right and the value is updated.

When the value is changed from the decorator the value of `this` inside the `_requestUpdate` is a `HTMLElement` object, but when the value is changed from the button the value is `<my-element></my-element>`.
