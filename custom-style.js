

//const $_documentContainerStyle = document.createElement('template');
$_documentContainerStyle.innerHTML = ` <style is="custom-style">
  /* mixin definitions */
  html {
    --paper-time-picker-dialog: {
      margin: 0;
      max-height: 520px !important;
    };
    --paper-time-picker-dialog-picker: {
      margin-top: 0 !important;
      padding: 0;
    };
    --paper-time-picker-dialog-calendar: {
      padding-bottom: 0;
    };
    --paper-time-picker-dialog-heading: {
      margin-bottom: -56px;
    };
  }
  </style>`;
  document.head.appendChild($_documentContainerStyle.content);