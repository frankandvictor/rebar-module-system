# Module System

## Dependencies

* **[Craft 3](https://github.com/craftcms/cms)** - Content management system that offers the Matrix field type, which is the base for modular content creation.
* **[Blockonomicon](https://github.com/charliedevelopment/craft3-blockonomicon/)** - Craft 3 plugin that can bundle a module as a self-contained package of HTML, CSS, JS, and JSON.
* **[Super Table](https://github.com/verbb/super-table)** - Craft 3 plugin that adds a powerful field type for organizing multiple fields into one.
* **[Encapsulator](https://github.com/charliedevelopment/encapsulator)** - Yii module for Craft 3 that encapsulates select matrix block fields into a disclosure element.

## Constituents

* **Module Config** - Super Table field that gets copied to each module to provide the configuration options.
* **Module HTML** - Twig file that provides the infrastructure that wraps the content of each module.
* **Module CSS** - CSS file that styles the Module HTML.
* **Module JS** - JS file that adds a front-end administrative interface to each module.

## How It Works

In the **Craft** back-end, a matrix field called **Modules** contains every **module** as a block. With **Blockonomicon**, it is easy to add and remove modules. Since each module is stored as a bundle, a module can be exported from one site and imported into another. The module's field configuration and source code will remain intact.

Often times, new modules need to be created. This is also easy with Blockonomicon. Once you create the module's fields and export for the first time, the bundle is automatically created with boilerplate code to accelerate development and ensure consistency.

Now, each module block within the Modules field contains its own subfields. For example, an "Image" module might have an "Image" asset field and a "Caption" text field. In addition, each module also gets its own copy of the **Module Config**, which is the **Super Table** field that has options such as "Width" and "Background Color".

In an elaborate module, the interface can become quite complex – considering that the Module Config alone has about 10 subfields. **Encapsulator** improves the module interface by relegating the Module Config field to a disclosure at the bottom of the block. The disclosure gets the label "Advanced options" and is collapsed by default. This keeps the options accessible to those who need them, while streamlining the interface and safegaurding against unnecessary tampering.

### Module Config

These fields should all come with sensible default values according to the module they belong to. Most of the time they should not require change.

#### Module ID

Unique identifier for linking purposes, written lowercase with hyphens.

#### Spacing

* **Outer Top Spacing** - Amount of additional top space outside the module.
* **Outer Bottom Spacing** - Amount of additional bottom space outside the module.
* **Inner Top Spacing** - Amount of additional top space inside the module.
* **Inner Bottom Spacing** - Amount of additional bottom space inside the module.

| Value | Height (rem) | Height (px) |
|:--- |:--- |:--- |
| 0 | 0rem | 0px |
| 1 | 0.75rem | 12px |
| 2 | 1.5rem | 24px |
| 3 | 3rem | 48px |
| 4 | 4.5rem| 72px |
| 5 | 6rem | 96px |
| 6 | 7.5rem | 120px |
| 7 | 9rem | 144px |
| 8 | 10.5rem | 168px |

#### Width

Size of the module relative to the site container.

| Value | Content Width | Background Width |
|:--- |:--- |:--- |
| auto | Same as site container | Same as site container |
| Auto Extended | Same as site container | Full-width |
| Slim | Narrower than site container | Same as site container |
| Slim Extended | Narrower than site container | Full-width |
| Wide | Wider than site container | Same as site container |
| Wide Extended | Wider than site container | Full-width |
| Full | Full-width | Full-width |

#### Background Color

Color to display underneath the module's content.

#### Background Image

Image to display underneath the module's content.

#### Background Position

Alignment of the module's background image (if present).
