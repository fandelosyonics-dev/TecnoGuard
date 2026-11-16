module.exports = [
  {
    id: 'p1',
    nombre: '🎮 Gaming & eSports Pro',
    descripcion: 'Comunidad completa para clanes, torneos y streams.',
    categorias: [
      {
        nombre: '📌 INFORMACIÓN',
        texto: ['📢-anuncios', '📜-reglas', '🎁-sorteos', '🏆-torneos', '📊-rangos', '🔔-notificaciones'],
        voz: ['🔊 General 1', '🔊 General 2', '🔊 Espera 1', '🔊 Espera 2', '🔊 Música'],
        escenarios: ['🎭 Escenario Anuncios', '🎭 Escenario Sorteos', '🎭 Presentación', '🎭 AMA Principal']
      },
      {
        nombre: '💬 COMUNIDAD',
        texto: ['💬-general', '📷-fotos-y-memes', '🤖-bots-y-comandos', '🎉-bienvenidas', '💡-sugerencias', '☕-off-topic'],
        voz: ['🔊 Charla 1', '🔊 Charla 2', '🔊 Charla 3', '🔊 Charla 4', '🔊 Radio Comunidad'],
        escenarios: ['🎭 Escenario Debates', '🎭 Escenario Podcasting', '🎭 Escenario Eventos', '🎭 Escenario Podcast 2']
      },
      {
        nombre: '🎮 SQUADS & JUEGOS',
        texto: ['🕹️-busco-equipo', '🎥-clips-destacados', '🏆-highlights', '⚔️-estrategias', '🔄-intercambios', '📌-guias'],
        voz: ['🔊 Squad A', '🔊 Squad B', '🔊 Duo 1', '🔊 Duo 2', '🔊 Trio 1'],
        escenarios: ['🎭 Escenario Torneo Final', '🎭 Escenario Showmatch', '🎭 Escenario Castings', '🎭 Escenario Meta Analysis']
      },
      {
        nombre: '🏆 COMPETITIVO',
        texto: ['📋-inscripciones', '📅-horarios-matches', '🥇-tabla-puntos', '🥊-desafios', '📜-reglamento-pvp', '🛡️-reclamaciones'],
        voz: ['🔊 Arena 1', '🔊 Arena 2', '🔊 Práctica 1', '🔊 Práctica 2', '🔊 Caster Room'],
        escenarios: ['🎭 Escenario Gran Final', '🎭 Escenario Semifinal', '🎭 Escenario Ceremonia', '🎭 Escenario Entrevistas']
      },
      {
        nombre: '🎨 CREADORES & CLIPS',
        texto: ['🎥-directos-streamers', '🎬-videos-youtube', '✂️-mejores-clips', '🎨-diseños-fanart', '🎵-musica-gaming', '⭐-promocion'],
        voz: ['🔊 Sala Creadores 1', '🔊 Sala Creadores 2', '🔊 Edición 1', '🔊 Edición 2', '🔊 Grabación'],
        escenarios: ['🎭 Escenario Stream Especial', '🎭 Escenario Entrevista Creador', '🎭 Escenario Gala Clips', '🎭 Escenario Reacciones']
      },
      {
        nombre: '🛡️ STAFF & SOPORTE',
        texto: ['🔒-chat-staff', '🎟️-tickets', '📝-reportes', '📌-ideas-staff', '🤖-comandos-admin', '⚙️-logs'],
        voz: ['🔊 Sala Staff 1', '🔊 Sala Staff 2', '🔊 Reunión Admins', '🔊 Soporte 1', '🔊 Soporte 2'],
        escenarios: ['🎭 Escenario Reunión General', '🎭 Escenario Asamblea Staff', '🎭 Escenario Auditorio', '🎭 Escenario Capacitación']
      }
    ]
  },
  {
    id: 'p2',
    nombre: '💻 Programación & Devs',
    descripcion: 'Espacio para ingenieros, proyectos y aprendizaje de código.',
    categorias: [
      {
        nombre: '📌 BIENVENIDA & REGLAS',
        texto: ['📢-anuncios-dev', '📜-reglas-codigo', '🎉-presentaciones', '📌-recursos-utiles', '🔔-notificaciones', '💡-sugerencias-dev'],
        voz: ['🔊 Hall Principal', '🔊 Networking 1', '🔊 Networking 2', '🔊 Relax', '🔊 Chill Dev'],
        escenarios: ['🎭 Keynote Inaugural', '🎭 Anuncio Lanzamientos', '🎭 Q&A Comunidad', '🎭 Estado del Proyecto']
      },
      {
        nombre: '💬 CHAT GENERAL',
        texto: ['💬-general-dev', '☕-cafe-y-charla', '🤖-bots-y-pruebas', '📷-setup-showcase', '📰-noticias-tech', '❓-preguntas-rapidas'],
        voz: ['🔊 Sala Lounge 1', '🔊 Sala Lounge 2', '🔊 Co-Working 1', '🔊 Co-Working 2', '🔊 Co-Working 3'],
        escenarios: ['🎭 Debate Tech', '🎭 Mesa Redonda', '🎭 Charlas de Café', '🎭 Charla Informática']
      },
      {
        nombre: '💻 DESARROLLO & LENGUAJES',
        texto: ['🐍-python', '🟨-javascript-node', '🌐-html-css-web', '🖥️-csharp-cpp', '📱-mobile-dev', '🐘-databases-sql'],
        voz: ['🔊 Pair Programming 1', '🔊 Pair Programming 2', '🔊 Code Review 1', '🔊 Code Review 2', '🔊 Hackathon Voice'],
        escenarios: ['🎭 Workshop Python', '🎭 Workshop Web', '🎭 Demo Day Proyectos', '🎭 Tech Talk Frontend']
      },
      {
        nombre: '⚙️ DEVOPS & INFRAESTRUCTURA',
        texto: ['🐧-linux-termux', '🐳-docker-k8s', '☁️-cloud-aws-azure', '🔒-ciberseguridad', '🤖-ia-y-prompts', '🛠️-herramientas'],
        voz: ['🔊 Infra Sala 1', '🔊 Infra Sala 2', '🔊 Sysadmin Chat', '🔊 Debugging 1', '🔊 Debugging 2'],
        escenarios: ['🎭 Masterclass DevOps', '🎭 Charla Ciberseguridad', '🎭 Keynote Cloud', '🎭 Panel IA & Futuro']
      },
      {
        nombre: '💼 PROYECTOS & EMPLEO',
        texto: ['💼-ofertas-trabajo', '📄-revision-cv', '💻-proyectos-propios', '🤝-busco-socio', '💸-freelance', '⭐-portafolios'],
        voz: ['🔊 Entrevistas 1', '🔊 Entrevistas 2', '🔊 Muestra Proyectos', '🔊 Feedback 1', '🔊 Feedback 2'],
        escenarios: ['🎭 Pitch de Proyectos', '🎭 Simulacro Entrevista', '🎭 Panel Freelancers', '🎭 Networking Keynote']
      },
      {
        nombre: '🛠️ MODERACIÓN & ADMINISTRACIÓN',
        texto: ['🔒-staff-chat', '🎟️-soporte-tickets', '📝-reportes-bugs', '⚙️-bot-logs', '📌-tareas-pendientes', '📊-metricas'],
        voz: ['🔊 Admin Room 1', '🔊 Admin Room 2', '🔊 Moderación', '🔊 Soporte Tecnico 1', '🔊 Soporte Tecnico 2'],
        escenarios: ['🎭 Asamblea Devs', '🎭 Reunión Anual Staff', '🎭 Auditorio Interno', '🎭 Capacitación Mods']
      }
    ]
  },
  {
    id: 'p3',
    nombre: '🎵 Música, Audio & Beats',
    descripcion: 'Comunidad para compositores, productores y cantantes.',
    categorias: [
      {
        nombre: '📌 BIENVENIDA & NORMAS',
        texto: ['📢-anuncios-musicales', '📜-reglas-comunidad', '🎉-presentate', '🔔-notificaciones', '💡-sugerencias', '📌-recursos-audio'],
        voz: ['🔊 Recepción', '🔊 Sala Espera 1', '🔊 Sala Espera 2', '🔊 Lounge Músicos', '🔊 Radio 24/7'],
        escenarios: ['🎭 Escenario Lanzamientos', '🎭 Anuncio Festivales', '🎭 Keynote Producción', '🎭 Presentación Artistas']
      },
      {
        nombre: '💬 COMUNIDAD MUSICAL',
        texto: ['💬-general-musica', '🎧-que-escuchas-hoy', '📷-setups-y-equipos', '☕-charla-libre', '🤖-bot-comandos', '📰-noticias-industria'],
        voz: ['🔊 Jam Session 1', '🔊 Jam Session 2', '🔊 Chat Músicos 1', '🔊 Chat Músicos 2', '🔊 Escucha Grupal'],
        escenarios: ['🎭 Debates de Género', '🎭 Podcast Melómanos', '🎭 Panel de Disqueras', '🎭 Conversatorio Musical']
      },
      {
        nombre: '🎛️ PRODUCCIÓN & DAW',
        texto: ['🎛️-fl-studio-ableton', '🎸-instrumentos-tabs', '🎤-tecnica-vocal', '🎧-mezcla-y-mastering', '📝-composicion-letras', '📦-soundkits-samples'],
        voz: ['🔊 Estudio Producción 1', '🔊 Estudio Producción 2', '🔊 Feedback Beats 1', '🔊 Feedback Beats 2', '🔊 En Vivo DAW'],
        escenarios: ['🎭 Masterclass Mezcla', '🎭 Taller de Composición', '🎭 Workshop Beatmaking', '🎭 Feedback en Directo']
      },
      {
        nombre: '🎤 BEAT BATTLES & SHOWS',
        texto: ['⚔️-retos-beatmakers', '📜-reglas-batallas', '🏆-ganadores', '🎤-freestyle-zone', '📻-demos-feedback', '🥇-rankings'],
        voz: ['🔊 Batalla Arena 1', '🔊 Batalla Arena 2', '🔊 Cabina Freestyle 1', '🔊 Cabina Freestyle 2', '🔊 Jueces Room'],
        escenarios: ['🎭 Gran Batalla Beats', '🎭 Concert Hall En Vivo', '🎭 Showcase Talentos', '🎭 Freestyle Final']
      },
      {
        nombre: '🎨 CREADORES & DIFUSIÓN',
        texto: ['🎵-tus-canciones', '🎬-videoclips', '🎨-portadas-y-artes', '📲-redes-sociales', '🤝-colaboraciones', '⭐-promocion'],
        voz: ['🔊 Colab Room 1', '🔊 Colab Room 2', '🔊 Oyentes VIP', '🔊 Sala Ensayo 1', '🔊 Sala Ensayo 2'],
        escenarios: ['🎭 Listening Party Album', '🎭 Entrevista a Artista', '🎭 Evento En Vivo', '🎭 Gala Premiación']
      },
      {
        nombre: '🛡️ SOPORTE & STAFF',
        texto: ['🔒-chat-staff', '🎟️-soporte-tickets', '📝-reportes', '📌-ideas-eventos', '⚙️-logs-bot', '📊-metricas'],
        voz: ['🔊 Staff Sala 1', '🔊 Staff Sala 2', '🔊 Admins Audio', '🔊 Soporte 1', '🔊 Soporte 2'],
        escenarios: ['🎭 Reunión Creadores', '🎭 Asamblea Producción', '🎭 Auditorio Staff', '🎭 Entrenamientos']
      }
    ]
  }
];

// Generar dinámicamente las 17 plantillas restantes con la misma estructura (6 Cat, 6 Texto, 5 Voz, 4 Stage)
const plantillasRestantes = [
  { id: 'p4', nombre: '🎨 Anime, Manga & Cosplay', desc: 'Comunidad para otakus, cosplayers y artistas de dibujo.' },
  { id: 'p5', nombre: '💼 Empresa & Emprendimiento', desc: 'Servidor corporativo para startups, finanzas y equipos.' },
  { id: 'p6', nombre: '🎓 Educación & Grupo de Estudio', desc: 'Organización para escuelas, universidades y tareas.' },
  { id: 'p7', nombre: '🎥 Creadores de Contenido & Streamers', desc: 'Comunidad para YouTubers, TikTokers y streamers.' },
  { id: 'p8', nombre: '⛏️ Minecraft Server Network', desc: 'Estructura oficial para servidores Survival, Skyblock y Bedwars.' },
  { id: 'p9', nombre: '🥊 RP & Roleplay Pro', desc: 'Servidor ambientado para comunidades de Roleplay estructurado.' },
  { id: 'p10', nombre: '🚀 Ciberseguridad & Hacking Ético', desc: 'Espacio de aprendizaje sobre pentesting y redes.' },
  { id: 'p11', nombre: '📈 Cripto, NFT & Trading', desc: 'Estructura para análisis de mercado, señales y finanzas.' },
  { id: 'p12', nombre: '⚽ Deportes & Fitness', desc: 'Comunidad para entrenamiento, gimnasio, fútbol y salud.' },
  { id: 'p13', nombre: '🎨 Arte, Diseño & 3D', desc: 'Diseñadores gráficos, ilustración digital y modelado 3D.' },
  { id: 'p14', nombre: '📚 Literatura & Escritura', desc: 'Lectores, escritores, poesía y clubes de lectura.' },
  { id: 'p15', nombre: '🍔 Cocina & Gastronomía', desc: 'Recetas, chefs, repostería y consejos culinarios.' },
  { id: 'p16', nombre: '🤖 Inteligencia Artificial & Prompts', desc: 'Modelos de IA, generación de arte, ChatGPT y LLMs.' },
  { id: 'p17', nombre: '🏎️ Automovilismo & SimRacing', desc: 'Fórmula 1, carreras virtuales, tuning y coches.' },
  { id: 'p18', nombre: '🎬 Cine & Series', desc: 'Discusión de películas, estrenos, críticas y maratones.' },
  { id: 'p19', nombre: '🌍 Idiomas & Intercambio Cultural', desc: 'Aprender inglés, español, francés, japonés y más.' },
  { id: 'p20', nombre: '🧱 Bot Support & Developers', desc: 'Servidor de soporte oficial para bots y aplicaciones de Discord.' }
];

plantillasRestantes.forEach(pt => {
  module.exports.push({
    id: pt.id,
    nombre: pt.nombre,
    descripcion: pt.desc,
    categorias: [
      {
        nombre: '📌 INFORMACIÓN GENERAL',
        texto: ['📢-anuncios', '📜-reglas', '🎉-bienvenidas', '🔔-notificaciones', '💡-sugerencias', '📌-links-utiles'],
        voz: ['🔊 Recepción', '🔊 Lounge 1', '🔊 Lounge 2', '🔊 Espera 1', '🔊 Espera 2'],
        escenarios: ['🎭 Escenario Principal', '🎭 Anuncio Oficial', '🎭 Presentación', '🎭 Evento Inaugural']
      },
      {
        nombre: '💬 COMUNIDAD & CHARLA',
        texto: ['💬-chat-general', '📷-multimedia', '🤖-bots-comandos', '☕-off-topic', '🎉-celebraciones', '❓-preguntas-comunes'],
        voz: ['🔊 Charla 1', '🔊 Charla 2', '🔊 Charla 3', '🔊 Charla 4', '🔊 Radio Comunidad'],
        escenarios: ['🎭 Debate Abierto', '🎭 Conversatorio', '🎭 Mesa Redonda', '🎭 Podcast En Vivo']
      },
      {
        nombre: '⭐ TEMÁTICA PRINCIPAL A',
        texto: ['📌-discusion-1', '📌-discusion-2', '📂-recursos', '💡-ideas', '🛠️-proyectos', '📊-encuestas'],
        voz: ['🔊 Sala Temática 1', '🔊 Sala Temática 2', '🔊 Trabajo 1', '🔊 Trabajo 2', '🔊 Grupo A'],
        escenarios: ['🎭 Masterclass 1', '🎭 Taller Práctico', '🎭 Panel Temático', '🎭 Q&A Especial']
      },
      {
        nombre: '🚀 TEMÁTICA PRINCIPAL B',
        texto: ['⭐-destacados', '🔍-guias-tutoriales', '🤝-colaboraciones', '🔄-intercambios', '📝-feedbacks', '🏆-logros'],
        voz: ['🔊 Sala Temática 3', '🔊 Sala Temática 4', '🔊 Trabajo 3', '🔊 Trabajo 4', '🔊 Grupo B'],
        escenarios: ['🎭 Masterclass 2', '🎭 Demostración', '🎭 Expo Proyectos', '🎭 Keynote B']
      },
      {
        nombre: '🎉 EVENTOS & ACTIVIDADES',
        texto: ['📅-calendario-eventos', '📋-inscripciones', '🏆-ganadores', '📷-fotos-eventos', '🎁-sorteos', '🏅-hall-de-la-fama'],
        voz: ['🔊 Evento Voz 1', '🔊 Evento Voz 2', '🔊 Sala Participantes', '🔊 VIP Room', '🔊 Backstage'],
        escenarios: ['🎭 Gran Escenario Eventos', '🎭 Gala Premiación', '🎭 Show En Vivo', '🎭 Ceremonia Cierre']
      },
      {
        nombre: '🛡️ ADMINISTRACIÓN & STAFF',
        texto: ['🔒-chat-privado-staff', '🎟️-soporte-tickets', '📝-reportes-usuarios', '⚙️-bot-logs', '📌-tareas-staff', '📊-metricas-server'],
        voz: ['🔊 Sala Staff 1', '🔊 Sala Staff 2', '🔊 Reunión Admins', '🔊 Soporte 1', '🔊 Soporte 2'],
        escenarios: ['🎭 Asamblea Staff', '🎭 Reunión Anual', '🎭 Auditorio Interno', '🎭 Capacitación']
      }
    ]
  });
});

