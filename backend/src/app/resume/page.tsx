export default function Resume() {
  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Resume</h1>
      <div className="bg-white rounded shadow p-6 mb-6">
        <p className="text-gray-700">[Your resume content or embed PDF here]</p>
      </div>
      <a href="/resume.pdf" download className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download Resume (PDF)</a>
    </main>
  );
} 