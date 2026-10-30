// Keep the unavailable state honest until a real PDF has been supplied.
if (document.body.dataset.page === 'cv') {
  const pdf = new URL('../assets/cv.pdf', window.location.href);
  fetch(pdf, { method: 'HEAD' }).then(response => {
    if (!response.ok || !response.headers.get('content-type')?.includes('application/pdf')) return;
    document.getElementById('cv-empty').hidden = true;
    document.getElementById('cv-pending').hidden = true;
    document.getElementById('cv-download').hidden = false;
    document.getElementById('cv-fallback').hidden = false;
    const frame = document.getElementById('cv-frame');
    frame.src = pdf.href;
    frame.hidden = false;
  }).catch(() => { /* The placeholder remains visible when the PDF is unavailable. */ });
}
