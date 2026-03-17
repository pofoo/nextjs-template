---
name: create-template-component
description: Whenever user prompts to create a component file with very few details on how the component should look, create a template file in the following manner.
---

# Instructions

## Determining type of component

If user specifies an element - create Element in elements folder.

If user specifies component, check:

1. Is this component most likely only to be used once or twice in the application (based on name)?
2. Is it a part of a larger <section>?
3. Does it require heavy logic that makes it most likely unable to be reusable across other components?

If any of the above criteria is met, create a component. If the requested component is most likely a smaller atom that can be reused across the application (like <TextInput> or <CTAButton>), create an element.

## Creating component

Create files in components directory.

Use the following pattern:

```tsx
import type { ComponentProps } from "components/types";

export interface Props extends ComponentProps {}

const Container = (props: Props) => {
  return <section {...props}>{children}</section>;
};

export default Container;
```

## Creating element

Create files in elements directory.

```tsx
import type { ElementProps } from "elements/types";

export interface Props extends ElementProps {}

const Container = (props: Props) => {
  return <div {...props}>{children}</div>;
};

export default Container;
```

## For both component and element

Create subdirectory `{component-name-in-kebab-case}` with the following files:

1. ComponentInPascalCase.tsx
2. index.ts
3. types.ts

Rules:

1. Use the component name the user specifies. If not specified, prompt user for component name.
2. Names are PascalCased.
3. Root barrel exports with that must be prexifed with the prompted ComponentName.

## Verification

Run yarn type-check ans ensure no errors.
