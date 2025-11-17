  // =================== VARIÁVEIS GLOBAIS ===================
  const campoBusca = document.getElementById('campoBusca');
  const catalogo = document.getElementById('catalogo');
  const containerFiltros = document.getElementById('filtrosCategoria');
  const marcas = Array.from(catalogo.querySelectorAll('.marca'));

  // Estado atual dos filtros
  let termoBusca = '';
  let categoriaAtiva = 'todas'; // 'todas' é o padrão

  // =================== LINKS DO INSTAGRAM (sem alteração) ===================
  const linksInsta = {
    // ... (seu objeto linksInsta original vai aqui, não o removi)
    "Aevus": "https://www.instagram.com/atelieraevus",
    "Onyx Five": "https://www.instagram.com/onyx.five",
    "Secta": "https://www.instagram.com/secta.online",
    "Egho Studios": "https://www.instagram.com/eghostudios",
    "Dismorfia": "https://www.instagram.com/internetradiodismorfia",
    "Pace": "https://www.instagram.com/pace",
    "Carnan": "https://www.instagram.com/carnan",
    "Cruelty": "https://www.instagram.com/ewcruel",
    "Agui": "https://www.instagram.com/agui.com.br",
    "Kardigan": "https://www.instagram.com/kardiganstudios",
    "Vinegar": "https://www.instagram.com/vinegar______",
    "Noir Division": "https://www.instagram.com/noir.division_",
    "Ukio": "https://www.instagram.com/ukio_____",
    "Skopos": "https://www.instagram.com/sskopos",
    "Amni": "https://www.instagram.com/amnidevt",
    "Humanite": "https://www.instagram.com/humaniteism",
    "Preux": "https://www.instagram.com/preux_official",
    "Desgosto": "https://www.instagram.com/desgosto",
    "Saintephemere": "https://www.instagram.com/saintephemere",
    "Vista": "https://www.instagram.com/wwwvista",
    "Sczo-6": "https://www.instagram.com/sczosix",
    "Hard jeans santo": "https://www.instagram.com/hardjeanssanto",
    "Melania": "https://www.instagram.com/use_melania",
    "Etogallery": "https://www.instagram.com/etogallery",
    "Mad_enlatados": "https://www.instagram.com/mad_enlatados",
    "Oblivio.studios": "https://www.instagram.com/oblivio.studios",
    "Borra": "https://www.instagram.com/borra______",
    "Piet": "https://www.instagram.com/piet_org",
    "State of wonder": "https://www.instagram.com/sowsupply",
    "1of1": "https://www.instagram.com/1of1exclusivist",
    "Above average": "https://www.instagram.com/aboveaverage.st",
    "Yatsa": "https://www.instagram.com/yatsa___",
    "Rhytmo": "https://www.instagram.com/rhytmo__",
    "Perschange": "https://www.instagram.com/perschange",
    "Cypriano": "https://www.instagram.com/cypriano___",
    "Hatelegit": "https://www.instagram.com/hatelegit",
    "Eloemcomum": "https://www.instagram.com/eloemcomum",
    "Desprezo": "https://www.instagram.com/des.prezo",
    "Arch studio": "https://www.instagram.com/arch______studio",
    "Pelestie": "https://www.instagram.com/pelestie",
    "Kaeda": "https://www.instagram.com/kaeda______",
    "Estante project": "https://www.instagram.com/estante.project",
    "Ung": "https://www.instagram.com/ung.br",
    "Northstar": "https://www.instagram.com/northstarorg",
    "Cie": "https://www.instagram.com/cienalab",
    "Viga": "https://www.instagram.com/viga.shoes",
    "Antifashion": "https://www.instagram.com/antfshn",
    "Morte visual": "https://www.instagram.com/mortevisual",
    "Estudio Teia": "https://www.instagram.com/teiaaaaaaaaaaaaaaaaaaa",
    "Kleos": "https://www.instagram.com/fs.kleos",
    "Eclat": "https://www.instagram.com/eclat.sty",
    "Heiko": "https://www.instagram.com/heiko.cc",
    "L'ordre": "https://www.instagram.com/leordre",
    "Apill": "https://www.instagram.com/apill_____",
    "Amenbreak": "https://www.instagram.com/amen___break",
    "Resurge Studios": "https://www.instagram.com/resurgestudios_",
    "Izanagi Store": "https://www.instagram.com/izanagi_fashion",
    "Dod Alfaiataria": "https://www.instagram.com/dodalfaiataria",
    "Dope studios": "https://www.instagram.com/dope__studios",
    "Ash3s": "https://www.instagram.com/ash3s_inventory",
    "Working title": "https://www.instagram.com/workingtitlesp",
    "Ciena": "https://www.instagram.com/cienalab",
    "Kg studios": "https://www.instagram.com/kg__studios",
    "Palla world": "https://www.instagram.com/palla.world",
    "Clemente studio": "https://www.instagram.com/clmntstudio",
    "Evo studios": "https://www.instagram.com/_evostudios",
    "Kapitol kulture": "https://www.instagram.com/kapitolkulture",
    "Vilela boots": "https://www.instagram.com/vilelaboots",
    "Each": "https://www.instagram.com/each_br",
    "Dust": "https://www.instagram.com/thedustcompany"
  };

  const normalize = s => s ? s.trim().toLowerCase() : '';
  const linksInstaNorm = {};
  Object.keys(linksInsta).forEach(k => linksInstaNorm[normalize(k)] = linksInsta[k]);

  // =================== FUNÇÃO DE INICIALIZAÇÃO ===================
  // (Adiciona Insta, Ordena)
  marcas.forEach(marca => {
    const nome = marca.getAttribute('data-nome') || '';
    const nomeNorm = normalize(nome);
    const info = marca.querySelector('.marca-info');

    // Adiciona botão do Instagram
    if (linksInstaNorm[nomeNorm] && info) {
      const a = document.createElement('a');
      a.href = linksInstaNorm[nomeNorm];
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'btn-insta';
      a.setAttribute('aria-label', `${nome} no Instagram`);
      a.innerText = 'Instagram';
      info.appendChild(a);
    }
  });

  // Ordena alfabeticamente (sem alteração)
  marcas.sort((a,b) => a.getAttribute('data-nome').localeCompare(b.getAttribute('data-nome'), 'pt-BR', { sensitivity: 'base' }));
  marcas.forEach(m => catalogo.appendChild(m));


  // =================== NOVA LÓGICA DE FILTRAGEM ===================

  /**
   * Função central que aplica TODOS os filtros (busca e categoria)
   */
  function aplicarFiltros() {
    const termoBuscaNorm = normalize(termoBusca);

    marcas.forEach(marca => {
      const nome = normalize(marca.getAttribute('data-nome') || '');
      const categorias = normalize(marca.getAttribute('data-categorias') || '');

      // Condição 1: O nome da marca inclui o termo da busca?
      const matchBusca = nome.includes(termoBuscaNorm);

      // Condição 2: A categoria está correta?
      const matchCategoria = categoriaAtiva === 'todas' || categorias.includes(categoriaAtiva);

      // A marca só aparece se AMBAS as condições forem verdadeiras
      if (matchBusca && matchCategoria) {
        marca.style.display = '';
      } else {
        marca.style.display = 'none';
      }
    });
  }

  // Listener do CAMPO DE BUSCA (atualizado)
  campoBusca.addEventListener('input', () => {
    termoBusca = campoBusca.value;
    aplicarFiltros(); // Chama a função central
  });

  // NOVO Listener dos BOTÕES DE CATEGORIA
  containerFiltros.addEventListener('click', (e) => {
    // Verifica se o clique foi em um botão de filtro
    if (e.target.classList.contains('btn-filtro')) {
      const botaoClicado = e.target;
      
      // Atualiza o estado da categoria ativa
      categoriaAtiva = botaoClicado.getAttribute('data-categoria');

      // Atualiza o estilo "ativo" dos botões
      containerFiltros.querySelectorAll('.btn-filtro').forEach(btn => {
        btn.classList.remove('ativo');
      });
      botaoClicado.classList.add('ativo');

      // Chama a função central de filtro
      aplicarFiltros();
    }
  });
