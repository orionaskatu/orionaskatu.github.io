jQuery(document).ready(function () {

  jQuery("#nanoGallery").nanogallery2({
    itemsBaseURL: "http://orionaskatu.github.io/img/portfolio/",
    thumbnailWidth: 300,
    thumbnailHeight: 'auto',
    thumbnailBaseGridHeight : 100,
    thumbnailHoverEffect2: 'scale120',
    colorScheme: {
      thumbnail: {
        background: 'rgba(1, 1, 1, 0.0)',
        border: '0px solid #000'
      }
    },
    colorSchemeViewer: {
      background: '#000'
    },
    viewerToolbar: {
      autoMinimize: 2000,
      standard: 'customN, minimizeButton, previousButton, pageCounter, nextButton, playPauseButton, fullscreenButton, infoButton, linkOriginalButton, closeButton, label'
    },
    thumbnailGutterWidth: 7,
    thumbnailGutterHeight: 7,
    i18n: {thumbnailImageDescription: 'View Photo'},
    thumbnailLabel: {display: true, position: 'overImageOnMiddle', align: 'center'}
  });
});