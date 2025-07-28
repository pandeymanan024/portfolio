import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-8">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">Manan Pandey</h1>
        <p className="mb-6 text-lg text-gray-700">Welcome to my portfolio! Explore my work, research, and connect with me....</p>
        <nav className="flex flex-col gap-4 mb-8">
          <Link href="/resume" className="text-blue-600 hover:underline">Resume</Link>
          <Link href="/research" className="text-blue-600 hover:underline">Research Papers</Link>
          <Link href="/links" className="text-blue-600 hover:underline">Links</Link>
          <Link href="/enhance-resume" className="text-blue-600 hover:underline">Resume Enhancer</Link>
        </nav>
        <footer className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Manan Pandey</footer>
      </div>
    </main>
  );
}
