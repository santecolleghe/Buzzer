// Mock Angular app: mostra lista file con pulsanti
const root = document.querySelector('app-root');
root.innerHTML = '<div class="d-flex justify-content-center align-items-center" style="height: 100px;"><div class="spinner-border text-light" role="status"><span class="visually-hidden">Caricamento...</span></div></div>';
fetch('/api/files')
  .then(res => res.json())
  .then(files => {
    root.innerHTML = '';
    const btnGroup = document.createElement('div');
    btnGroup.className = 'd-flex flex-column align-items-center w-100';
    files.forEach(file => {
      const btn = document.createElement('button');
      btn.textContent = file.name;
      btn.className = 'btn btn-light btn-list mb-2';
      btn.style.width = '100%';
      btn.onclick = () => {
        // Stream audio dal backend
        const audioUrl = `/api/file/${file.id}`;
        let audio = document.getElementById('audio-player');
        if (!audio) {
          audio = document.createElement('audio');
          audio.id = 'audio-player';
          audio.controls = true;
          root.appendChild(audio);
        }
        audio.onerror = () => {
          alert('Impossibile riprodurre il file.');
        };
        audio.src = audioUrl;
        audio.play();
      };
      btnGroup.appendChild(btn);
    });
    root.appendChild(btnGroup);
  });
