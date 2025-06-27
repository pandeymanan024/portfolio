"use client";
import { useRef, useState } from "react";

export default function EnhanceResume() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fileInputRef.current?.files?.[0]) return;
    setLoading(true);
    setDownloadUrl(null);
    const formData = new FormData();
    formData.append("file", fileInputRef.current.files[0]);
    const res = await fetch("/api/enhance-resume", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const blob = await res.blob();
      setDownloadUrl(URL.createObjectURL(blob));
    }
    setLoading(false);
  }

  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Resume Enhancer</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white rounded shadow p-6 mb-6">
        <label className="font-semibold">Upload your resume (PDF):</label>
        <input type="file" accept="application/pdf" ref={fileInputRef} required className="mb-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50" disabled={loading}>
          {loading ? "Enhancing..." : "Enhance Resume"}
        </button>
      </form>
      {downloadUrl && (
        <a href={downloadUrl} download="enhanced_resume.pdf" className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Download Enhanced Resume</a>
      )}
    </main>
  );
} 