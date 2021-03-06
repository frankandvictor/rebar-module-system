# Rebar Module System

Rebar is a comprehensive system for content management with true modularity. It provides the infrastructure for rapid content generation using prebuilt blocks that only require content and configuration. Many of the complexities that come with a highly flexible system such as this have been abstracted into a framework layer to simplify the experience for developers and content editors alike.

&nbsp;

![Module Example 1](./screenshots/module-example-1.png)

![Module Example 2](./screenshots/module-example-2.png)

## Dependencies

* **[Craft 3](https://github.com/craftcms/cms)** - Content management system that provides the Matrix field type – the base for modular content.
* **[Blockonomicon](https://github.com/charliedevelopment/craft3-blockonomicon/)** - Craft 3 plugin that can bundle a module as a self-contained package of HTML, CSS, JS, and JSON.
* **[Super Table](https://github.com/verbb/super-table)** - Craft 3 plugin that adds a new field type for organizing multiple fields into one.
* **Post Like It's 2018** - Yii module for Craft 3 which replaces the form posting functionality.
* **[Encapsulator](https://github.com/charliedevelopment/encapsulator)** - Yii module for Craft 3 that encapsulates select matrix block fields into a disclosure element.
* **[Element Queries](https://github.com/marcj/css-element-queries)** - Polyfill adding support for element-based media queries.
* **[Core Reset](https://github.com/frankandvictor/core-reset)** - CSS reset.
* **[Core Grid](https://github.com/frankandvictor/core-grid)** - CSS grid.

## Constituents

* **Module Config** - JSON representation of a Super Table field that provides the configuration options.
* **Module HTML** - HTML file that provides the infrastructure that wraps the content of each module.
* **Module CSS** - CSS file that styles the Module HTML.
* **Module JS** - JS file that adds a front-end administrative interface to each module.

## Overview

In the **Craft** back-end, a matrix field called **Modules** contains every **module** as a block. With **Blockonomicon**, it is easy to add and remove modules. Since each module is stored as a bundle, a module can be exported from one site and imported into another. The module's field configuration and source code will remain intact.

Often times, new modules need to be created. This is also easy with Blockonomicon. Once you create the field for a module and export for the first time, a bundle is automatically created with boilerplate code to accelerate development and ensure consistency.

Now, each module block within the Modules field contains its own subfields. For example, a "Text" module would contain a rich text editor (_Fig. 1_). In addition, each module also gets its own copy of the **Module Config**, which is the **Super Table** field that provides options such as "Width" and "Background Color".

In an elaborate module, the interface can become quite complex – considering that the Module Config alone has about 10 subfields. **Encapsulator** improves the module interface by relegating the Module Config field to a disclosure at the bottom of the block (_Fig. 2_). The disclosure gets the label "Advanced options" and is collapsed by default. This keeps the options accessible to those who need them, while streamlining the interface and safegaurding against unnecessary tampering.

&nbsp;

![Module Matrix Block](./screenshots/module-matrix-block.png)
_Fig 1: A text module._

&nbsp;

![Module Matrix Block Advanced Options](./screenshots/module-matrix-block-advanced-options.png)
_Fig 2: A text module with the "Advanced options" panel expanded._

&nbsp;

## Module Config Options

Every module comes with configuration options that dictate the style of the infrastructure that wraps its content. The purpose of this model is to shift as much responsibility as possible from the module to the module framework. A module should not be concerned with setting its own width, spacing, or background. These are matters that pertain to all modules, therefore they should be dealt with at a higher level. In this system, modules are focused entirely on their own content, indifferent about where or how they are displayed.

These fields have the same values from module to module, but each module can have its own defaults. For example, it is likely that a banner module will always be set to full-width, so new banner modules should should be full-width by default. If each module has sensible default values in place, content editors will not have to modify configuration fields often.

### Module ID

> Unique identifier for linking purposes, written lowercase with hyphens.

This is a text field for specifying the ID of the module, which is necessary in order to link to it directly.

### Spacing

> Amount of additional top/bottom space outside/inside the module.

This is a set of four dropdowns for selecting the spacing values (_Fig. 3–6_).

| Option | Height (rem) | Height (px) |
|:--- |:--- |:--- |
| `0` | 0rem | 0px |
| `1` | 0.75rem | 12px |
| `2` | 1.5rem | 24px |
| `3` | 3rem | 48px |
| `4` | 4.5rem| 72px |
| `5` | 6rem | 96px |
| `6` | 7.5rem | 120px |
| `7` | 9rem | 144px |
| `8` | 10.5rem | 168px |

#### Outer Top Spacing

![Module Outer Top Spacing Options](./screenshots/module-outer-top-spacing-options.png)
_Fig. 3: Spacing is applied above the content, outside the bounds of the module._

&nbsp;

#### Outer Bottom Spacing

![Module Outer Bottom Spacing Options](./screenshots/module-outer-bottom-spacing-options.png)
_Fig. 4: Spacing is applied below the content, outside the bounds of the module._

&nbsp;

#### Inner Top Spacing

![Module Inner Top Spacing Options](./screenshots/module-inner-top-spacing-options.png)
_Fig. 5: Spacing is applied above the content, within the bounds of the module._

&nbsp;

#### Inner Bottom Spacing

![Module Inner Bottom Spacing Options](./screenshots/module-inner-bottom-spacing-options.png)
_Fig. 6: Spacing is applied below the content, within the bounds of the module._

&nbsp;

### Width

> Size of the module relative to the site container.

This is a dropdown field for selecting a width setting (_Fig. 7_).

| Option | Width |
|:--- |:--- |
| `Auto` | Same as site container |
| `Auto Extended` | Same as site container with full-width background |
| `Slim` | Narrower than site container |
| `Slim Extended` | Narrower than site container with full-width background |
| `Wide` | Wider than site container |
| `Wide Extended` | Wider than site container with full-width background |
| `Full` | Full-width |

&nbsp;

![Module Width Options](./screenshots/module-width-options.png)
_Fig. 7: Example width options._

&nbsp;

### Background Color

> Color to display underneath the module's content.

This is a category field that pulls from a category group called "Background Colors". The benefit of using a category field is that colors can be added and removed at any time, and every module will automatically have the latest set of options.

### Background Image

> Image to display underneath the module's content.

This is an asset field that allows the selection or upload of any image file.

### Background Position

> Alignment of the module's background image (if present).

This is a dropdown field for specifying how the background image should be cropped.

| Option | CSS value |
|:--- |:--- |
| `Top Left` | top left |
| `Top Center` | top center |
| `Top Right` | top right |
| `Center Left` | center left |
| `Center Center` | center center |
| `Center Right` | center right |
| `Bottom Left` | bottom left |
| `Bottom Center` | bottom center |
| `Bottom Right` | bottom right |
