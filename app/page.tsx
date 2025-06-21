
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      {/* Glowing Background Elements */}
      <div className="fixed -top-1/2 -left-1/4 w-[200%] h-[200%] opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600 blur-[100px]"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-600 blur-[90px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-blue-500 blur-[80px]"></div>
      </div>

      {/* Futuristic Navigation */}
      <nav className="relative z-10 px-6 py-6 sm:px-12 flex items-center justify-between border-b border-gray-800 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            NexusAI
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-all duration-300 hover:underline underline-offset-8 decoration-2 decoration-purple-400"
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-all duration-300 hover:underline underline-offset-8 decoration-2 decoration-blue-400"
          >
            Solutions
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-all duration-300 hover:underline underline-offset-8 decoration-2 decoration-indigo-400"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-all duration-300 hover:underline underline-offset-8 decoration-2 decoration-cyan-400"
          >
            Resources
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition">
            Login
          </button>
          <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/30">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-24 md:py-32">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-800 border border-gray-700 mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-200">
              NOW IN PUBLIC BETA
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300">
              The Future of
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              AI-Powered Analytics
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10">
            Revolutionize your data workflow with our quantum-inspired AI
            platform that learns, adapts, and predicts with unprecedented
            accuracy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-purple-500/40 flex items-center">
              Start Free Trial
              <svg
                className="ml-3 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>

            <button className="px-8 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white font-bold hover:bg-gray-700 transition-all duration-300 flex items-center">
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>

      {/* Floating 3D Elements */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 -mt-20 mb-40">
        <div className="relative h-[500px] rounded-3xl overflow-hidden border border-gray-800 backdrop-blur-sm bg-gray-900/50 shadow-2xl">
          {/* This would be your interactive demo/3D component */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Central orb */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 shadow-inner flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-purple-600/40 to-blue-600/40 border border-purple-400/30 shadow-inner flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-br from-purple-500/60 to-blue-500/60 border border-purple-300/30 shadow-inner"></div>
                </div>
              </div>

              {/* Orbiting elements */}
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute top-0 left-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/80 to-blue-400/80 border border-cyan-300/30 shadow-lg transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `rotate(${i * 90}deg) translateX(150px) rotate(${
                      -i * 90
                    }deg)`,
                    animation: `orbit${i} 12s linear infinite`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">
            Next-Gen Features
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Powered by quantum computing principles and neural networks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              title: "Quantum Processing",
              description:
                "Harness quantum algorithms for complex data analysis at unprecedented speeds.",
            },
            {
              icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
              title: "Neural Adaptation",
              description:
                "Self-learning models that evolve with your data patterns in real-time.",
            },
            {
              icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
              title: "Holographic Visualization",
              description:
                "3D data representations with interactive holographic displays.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={feature.icon}
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-32">
        <div className="rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-12 text-center border border-gray-700 relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-purple-500/20 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-blue-500/20 blur-xl"></div>

            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for the Future?
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-8">
              Join thousands of innovators transforming their workflow with our
              platform.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-purple-500/40">
                Start Free Trial
              </button>

              <button className="px-8 py-4 rounded-xl bg-gray-700/50 border border-gray-600 text-white font-bold hover:bg-gray-700 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-gray-900/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  NexusAI
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                The future of AI-powered analytics and quantum computing.
              </p>
            </div>

            {["Product", "Resources", "Company", "Legal"].map(
              (category, index) => (
                <div key={index}>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {Array(4)
                      .fill(0)
                      .map((_, i) => (
                        <li key={i}>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-white transition text-sm"
                          >
                            {category} Link {i + 1}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              )
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 NexusAI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              {/* Add other social icons similarly */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
