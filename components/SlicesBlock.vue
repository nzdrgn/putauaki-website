<template>
    <div>
        <!-- Slice section template -->
        <div v-for="(slice, index) in slices" :key="'slice-' + index">
            <!-- Text slice template -->
            <template v-if="slice.slice_type === 'text'">
                <!-- Here :slice="slice" passes the data to the component -->
                <text-slice :slice="slice"></text-slice>
            </template>
            <!-- Quote slice template -->
            <template v-else-if="slice.slice_type === 'quote'">
                <quote-slice :slice="slice"></quote-slice>
            </template>
            <!-- Image with caption slice template -->
            <template v-else-if="slice.slice_type === 'image_with_caption'">
                <image-caption-slice :slice="slice"></image-caption-slice>
            </template>
            <!-- Basic cards template -->
            <template v-else-if="slice.slice_type === 'basic_cards'">
                <basic-cards-slice :slice="slice"></basic-cards-slice>
            </template>
            <!-- Side image with text template -->
            <template v-else-if="slice.slice_type === 'side_image_text'">
                <side-image-text-slice :slice="slice"></side-image-text-slice>
            </template>
            <!-- Icon items list template -->
            <template v-else-if="slice.slice_type === 'icon_items_list'">
                <icon-items-list-slice :slice="slice"></icon-items-list-slice>
            </template>
            <!-- Side image cards template -->
            <template v-else-if="slice.slice_type === 'side_image_cards'">
                <side-image-cards-slice :slice="slice"></side-image-cards-slice>
            </template>
            <!-- Side image cards template -->
            <template v-else-if="slice.slice_type === 'photo_gallery'">
                <photo-gallery-slice :slice="slice"></photo-gallery-slice>
            </template>
            <!-- Wide Image with caption slice template -->
            <template v-else-if="slice.slice_type === 'wide_image_with_caption'">
                <wide-image-caption-slice :slice="slice"></wide-image-caption-slice>
            </template>
            <!-- Full Width Slideshow template -->
            <template v-else-if="slice.slice_type === 'full_width_slideshow'">
                <full-width-slideshow-slice :slice="slice"></full-width-slideshow-slice>
            </template>
        </div>
    </div>
</template>

<script>
// Imports for all slices
const QuoteSlice = () => import("../components/slices/QuoteSlice.vue");
const TextSlice = () => import("../components/slices/TextSlice.vue");
const ImageCaptionSlice = () => import("../components/slices/ImageCaptionSlice.vue");
const BasicCardsSlice = () => import("../components/slices/BasicCardsSlice.vue");
const SideImageTextSlice = () => import("../components/slices/SideImageTextSlice.vue");
const IconItemsListSlice = () => import("../components/slices/IconItemsListSlice.vue");
const SideImageCardsSlice = () => import("../components/slices/SideImageCardsSlice.vue");
const PhotoGallerySlice = () => import("../components/slices/PhotoGallerySlice.vue");
const WideImageCaptionSlice = () => import("../components/slices/WideImageCaptionSlice.vue");
const FullWidthSlideshowSlice = () => import("../components/slices/FullWidthSlideshowSlice.vue");

export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    QuoteSlice,
    TextSlice,
    ImageCaptionSlice,
    BasicCardsSlice,
    SideImageTextSlice,
    IconItemsListSlice,
    SideImageCardsSlice,
    PhotoGallerySlice,
    WideImageCaptionSlice,
    FullWidthSlideshowSlice
  },
}
</script>