// Mock Angular app: mostra lista file con pulsanti
fetch('/api/files')
  .then(res => res.json())
  .then(files => {
    const root = document.querySelector('app-root');
    root.innerHTML = '';
    files.forEach(file => {
      const btn = document.createElement('button');
      btn.textContent = file.name;
      btn.onclick = () => {
        // Link pubblico Google Drive per file audio
        const audioUrl = `https://drive.google.com/uc?export=download&id=${file.id}`;
        let audio = document.getElementById('audio-player');
        if (!audio) {
          audio = document.createElement('audio');
          audio.id = 'audio-player';
          audio.controls = true;
          root.appendChild(audio);
        }
        audio.src = audioUrl;
        audio.play();
      };
      root.appendChild(btn);
    });
  });
