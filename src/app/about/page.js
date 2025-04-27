/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
export default function AboutPage() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-sky-400 to-white text-gray-900 px-4 py-12">
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-1 bg-white shadow-md z-10">
  <div className="flex items-center space-x-3">
    <a href="/" className="flex items-center space-x-2">
      <img
        src="/logo_FHC.png"
        alt="Free Hindi Captions Logo"
        className="h-12 w-auto"
      />
    </a>
  </div>
  <div className="flex space-x-6">
    <a
      href="/"
      className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-colors duration-200"
    >
      Home
    </a>
    <a
      href="/about"
      className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-colors duration-200"
    >
      About Us
    </a>
    
  </div>
  
</nav>

        <div className="pt-24 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">About Us</h1>
          <h1 className="text-black font-bold text-center text-xl">
            <a href="https://www.linkedin.com/in/arun-sharma-5b58aa23a/" target="_blank" rel="noopener noreferrer">
              Visit the Creator (click here) ▶️
            </a>
          </h1>
          
          
          <p className="mb-6">
            Welcome to <strong>Free Hindi Captions</strong> – a platform dedicated to making audio content more accessible,
            inclusive, and impactful through automatic Hindi captioning.
          </p>
  
          <h2 className="text-2xl font-semibold mt-8 mb-2">Who We Are</h2>
          <p className="mb-6">
            Hi, I’m Arun Sharma, an AI Engineer with a passion for building tools that empower people through technology.
            I created Free Hindi Captions to help creators, educators, and everyday users easily convert their audio files
            into accurate, high-quality Hindi captions—completely free of cost.
          </p>
  
          <h2 className="text-2xl font-semibold mt-8 mb-2">Why Free Hindi Captions?</h2>
          <p className="mb-6">
            In a world where content is everywhere, accessibility often gets overlooked—especially in regional languages.
            Hindi, being one of the most widely spoken languages in the world, deserves tools that cater to its speakers.
            Whether you&apos;re a YouTuber, teacher, student, podcaster, or simply someone who wants to share audio content with
            clarity and understanding, this platform is built for you.
          </p>
          <p className="mb-6">
            And yes, it’s totally free—no signups, no paywalls, no hidden charges. Just a fast, easy, and reliable way to
            generate captions.
          </p>
  
          <h2 className="text-2xl font-semibold mt-8 mb-2">Our Mission</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Make Hindi content more accessible</li>
            <li>Support creators and educators</li>
            <li>Harness AI for real-world impact</li>
          </ul>
          <p className="mb-6">
            We believe that technology should lift barriers—not create them. That’s why this platform is open to everyone,
            regardless of background or budget.
          </p>
  
          <h2 className="text-2xl font-semibold mt-8 mb-2">What’s Next?</h2>
          <p className="mb-6">
            We’re just getting started! We plan to expand support for more Indian languages, improve accuracy with cutting-edge
            AI models, and introduce simple editing tools to refine captions even further.
          </p>
          <p className="mb-6">
            If you love what we&apos;re doing or have ideas to share, don’t hesitate to reach out. This is just as much your platform
            as it is ours.
          </p>
  
          <p className="font-semibold mt-8">— Arun Sharma<br/>AI Engineer & Creator of Free Hindi Captions</p>
        </div>
      </main>
    );
  }
  