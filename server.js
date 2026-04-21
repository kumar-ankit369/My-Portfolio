const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ankit - AI & Full-Stack Developer</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root {
      --dark-950: #0a0a0a;
      --dark-900: #1a1a1a;
      --neon-cyan: #00d9ff;
      --neon-pink: #ff006e;
      --neon-purple: #b537f2;
      --neon-lime: #39ff14;
    }
    body { background: var(--dark-950); color: #fff; }
    .glow-border { border-color: var(--neon-cyan); box-shadow: 0 0 20px var(--neon-cyan); }
    .glow-text { color: var(--neon-cyan); text-shadow: 0 0 10px var(--neon-cyan); }
    @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    .animate-fade-in { animation: fade-in 0.6s ease-in; }
    .animate-slide-up { animation: slide-up 0.6s ease-out; }
  </style>
</head>
<body class="bg-dark-950 text-white">
  <header class="fixed w-full backdrop-blur-md bg-dark-900/80 border-b border-neon-cyan/20 z-50">
    <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="glow-text font-bold text-2xl">Ankit</h1>
      <div class="flex gap-6">
        <a href="#projects" class="hover:text-neon-cyan transition">Projects</a>
        <a href="#skills" class="hover:text-neon-cyan transition">Skills</a>
        <a href="#contact" class="hover:text-neon-cyan transition">Contact</a>
        <a href="#" onclick="downloadResume()" class="px-4 py-2 bg-neon-cyan text-black rounded transition hover:shadow-lg" style="box-shadow: 0 0 20px rgba(0, 217, 255, 0.5);">Resume</a>
      </div>
    </nav>
  </header>

  <main class="pt-20">
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center px-6 text-center animate-fade-in">
      <div>
        <h2 class="text-5xl md:text-6xl font-bold mb-4">
          AI & <span class="glow-text">Full-Stack Developer</span>
        </h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Passionate about building intelligent systems and scalable web applications. Experienced in ML, Deep Learning, and modern web technologies.
        </p>
        <button onclick="downloadResume()" class="px-8 py-3 bg-neon-cyan text-black font-bold rounded-lg hover:shadow-lg transition" style="box-shadow: 0 0 30px rgba(0, 217, 255, 0.4);">
          Download Resume (PDF)
        </button>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-6 bg-dark-900/50">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-4xl font-bold mb-12 glow-text">Featured Projects</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="glow-border border rounded-lg p-6 hover:shadow-lg transition animate-slide-up">
            <h4 class="text-xl font-bold mb-2 text-neon-pink">Marine Biodiversity</h4>
            <p class="text-gray-300 mb-4">AI-powered ocean ecosystem monitoring and analysis system.</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-neon-cyan/20 text-neon-cyan rounded text-sm">TensorFlow</span>
              <span class="px-2 py-1 bg-neon-cyan/20 text-neon-cyan rounded text-sm">Python</span>
            </div>
          </div>
          <div class="glow-border border rounded-lg p-6 hover:shadow-lg transition animate-slide-up" style="animation-delay: 0.1s;">
            <h4 class="text-xl font-bold mb-2 text-neon-purple">SmartClass AI</h4>
            <p class="text-gray-300 mb-4">Intelligent classroom automation with student engagement tracking.</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-neon-cyan/20 text-neon-cyan rounded text-sm">React</span>
              <span class="px-2 py-1 bg-neon-cyan/20 text-neon-cyan rounded text-sm">ML</span>
            </div>
          </div>
          <div class="glow-border border rounded-lg p-6 hover:shadow-lg transition animate-slide-up" style="animation-delay: 0.2s;">
            <h4 class="text-xl font-bold mb-2 text-neon-lime">Fed-EADP-LoRA</h4>
            <p class="text-gray-300 mb-4">Federated learning framework for privacy-preserving AI training.</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-neon-cyan/20 text-neon-cyan rounded text-sm">Federated Learning</span>
              <span class="px-2 py-1 bg-neon-cyan/20 text-neon-cyan rounded text-sm">PyTorch</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-4xl font-bold mb-12 glow-text">Skills & Technologies</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-xl font-bold mb-4 text-neon-pink">Programming</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">Python</span>
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">JavaScript</span>
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">C++</span>
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">Java</span>
            </div>
          </div>
          <div>
            <h4 class="text-xl font-bold mb-4 text-neon-purple">AI/ML</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">TensorFlow</span>
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">PyTorch</span>
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">Deep Learning</span>
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">NLP</span>
            </div>
          </div>
          <div>
            <h4 class="text-xl font-bold mb-4 text-neon-cyan">Web Development</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">React</span>
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">Next.js</span>
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">Node.js</span>
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">MongoDB</span>
            </div>
          </div>
          <div>
            <h4 class="text-xl font-bold mb-4 text-neon-lime">DevOps</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">Docker</span>
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">Kubernetes</span>
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">AWS</span>
              <span class="px-3 py-1 bg-dark-900 border border-neon-cyan/30 rounded">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements Section -->
    <section class="py-20 px-6 bg-dark-900/50">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-4xl font-bold mb-12 glow-text">Awards & Achievements</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="glow-border border rounded-lg p-6">
            <h4 class="text-2xl font-bold mb-2">🏆 SIH Winner</h4>
            <p class="text-gray-300">May 2025 - Smart India Hackathon National Winner</p>
          </div>
          <div class="glow-border border rounded-lg p-6">
            <h4 class="text-2xl font-bold mb-2">🥉 Srujana Hackathon 4th Place</h4>
            <p class="text-gray-300">October 2025</p>
          </div>
          <div class="glow-border border rounded-lg p-6">
            <h4 class="text-2xl font-bold mb-2">📜 NEC 2025 Certified</h4>
            <p class="text-gray-300">National Engineering Council Certification</p>
          </div>
          <div class="glow-border border rounded-lg p-6">
            <h4 class="text-2xl font-bold mb-2">🎭 MOOD INDIGO Certified</h4>
            <p class="text-gray-300">Cultural Excellence Certificate</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-4xl font-bold mb-12 glow-text">About Me</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p class="text-lg text-gray-300 mb-6">
              I'm a Computer Science student specializing in Data Science at Acharya Institute, Bangalore. Currently leading the Sahitya Club as President and deeply passionate about AI, Machine Learning, and Full-Stack Development.
            </p>
            <p class="text-lg text-gray-300">
              With experience in TensorFlow, PyTorch, and modern web frameworks, I'm committed to building intelligent systems that make a real impact.
            </p>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-dark-900 rounded-lg p-4 text-center">
              <h4 class="text-3xl font-bold text-neon-cyan">3</h4>
              <p class="text-gray-300">Major Projects</p>
            </div>
            <div class="bg-dark-900 rounded-lg p-4 text-center">
              <h4 class="text-3xl font-bold text-neon-pink">2</h4>
              <p class="text-gray-300">Awards Won</p>
            </div>
            <div class="bg-dark-900 rounded-lg p-4 text-center">
              <h4 class="text-3xl font-bold text-neon-purple">∞</h4>
              <p class="text-gray-300">Learning Journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-6 bg-dark-900/50">
      <div class="max-w-6xl mx-auto text-center">
        <h3 class="text-4xl font-bold mb-8 glow-text">Get In Touch</h3>
        <p class="text-xl text-gray-300 mb-8">Let's build something amazing together</p>
        <div class="flex gap-6 justify-center">
          <a href="mailto:anklivetolearn@gmail.com" class="px-6 py-3 bg-neon-cyan text-black font-bold rounded-lg hover:shadow-lg transition">Email Me</a>
          <a href="https://github.com" target="_blank" class="px-6 py-3 border border-neon-cyan text-neon-cyan rounded-lg hover:shadow-lg transition">GitHub</a>
          <a href="https://linkedin.com" target="_blank" class="px-6 py-3 border border-neon-pink text-neon-pink rounded-lg hover:shadow-lg transition">LinkedIn</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-dark-900 border-t border-neon-cyan/20 py-8 px-6 text-center text-gray-500">
    <p>&copy; 2025 Ankit Kumar. All rights reserved.</p>
  </footer>

  <script>
    function downloadResume() {
      // Create a simple PDF download
      alert('Resume download functionality would be added here with jsPDF library!');
    }
  </script>
</body>
</html>`;

app.get('/', (req, res) => {
  res.send(html);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Portfolio server running on http://localhost:${PORT}`);
});
