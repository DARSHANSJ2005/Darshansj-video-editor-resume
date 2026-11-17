export interface DownloadPdfResult {
  ok: boolean;
  error?: string;
}

/**
 * Fetches a PDF asset and triggers a reliable same-origin Blob download.
 * Avoids iframe/cross-origin download attribute failures.
 */
export async function downloadResumePdf(
  pdfUrl: string,
  filename = 'Darshan_SJ_Video_Editor_Resume.pdf',
): Promise<DownloadPdfResult> {
  try {
    const response = await fetch(pdfUrl, { cache: 'no-store' });
    if (!response.ok) {
      return { ok: false, error: `Unable to fetch PDF (${response.status}).` };
    }
    const rawBlob = await response.blob();
    if (rawBlob.size === 0) {
      return { ok: false, error: 'Downloaded file was empty.' };
    }
    const pdfBlob =
      rawBlob.type === 'application/pdf'
        ? rawBlob
        : new Blob([rawBlob], { type: 'application/pdf' });

    const blobUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
    }, 1500);

    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : 'PDF download failed.',
    };
  }
}
