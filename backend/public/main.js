// Mock Angular app: mostra lista file con pulsanti
fetch('/api/files')
  .then(res => res.json())
  .then(files => {
    const root = document.querySelector('app-root');
    root.innerHTML = '';
    files.forEach(file => {
      const btn = document.createElement('button');
      btn.textContent = file.name;
      btn.className = 'btn btn-light btn-list';
      btn.onclick = () => {
        // Link visualizzazione Google Drive
        const audioUrl = `https://drive.google.com/uc?export=download&id=${file.id}`;
        const viewUrl = `https://drive.google.com/file/d/${file.id}/view?usp=sharing`;
        let audio = document.getElementById('audio-player');
        if (!audio) {
          audio = document.createElement('audio');
          audio.id = 'audio-player';
          audio.controls = true;
          root.appendChild(audio);
        }
        audio.onerror = () => {
          window.open(viewUrl, '_blank');
        };
        audio.src = audioUrl;
        audio.play();
      };
      root.appendChild(btn);
    });
  });
