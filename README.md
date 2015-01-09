tinyGRID
==========
Small grid system with no frills. 

_Content should be organised semantically on the page,
and should naturally form into the appropriate structure to complement this library_.
Simply put: forcing content into a grid structure where it doesn't fit nicely might 
highlight a problem with the design or the requirement for a grid.

That said, here's how it works:

Each self contained grid on the page can be created with either the <code>grid</code> or
<code>grid-padded</code> classes. This applies a clearfix and also sets some basic properties.

Inside each grid there can be zero or more elements with the <code>row</code> class. This helps 
to organise columns into distinct row structures, as well as making it easier to organise traditionally
row-based elements like forms and other non-columnal items.

Each column should have one or more of the <code>col-{size}-{width}</code> classes, where
<code>{size}</code> is the screen size that applies to this column, from a choice of the following:
* <code>sm</code> - any size
* <code>md</code> - larger than 768px
* <code>lg</code> - larger than 992px
* <code>xl</code> - larger than 1200px

Each size cascades upwards - if an element has <code>sm</code> and <code>lg</code> defined, but not 
<code>md</code>, the <code>sm</code> class will be in effect for both the small and medium sizes, 
until the screen reaches the minimum size for large. This also means that if the same layout is desired
for all sizes, <code>sm</code> should be used.

<code>{width}</code> refers to the relative width of the column, from 1 to the number defined in 
variables.less (default to 8). Assuming the default value, this makes a value of 1 equal to 12.5% of
the total width of the containing grid element, 2 equal to 25% and so on.

The <code>col-offset-{size}-{width}</code> classes use the same size and width types as the standard 
column classes but instead offsets the element as if there was a column of the given width to the left
of it.


