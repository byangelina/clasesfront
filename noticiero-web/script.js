const noticias = [
  {
    titulo: "Universidad de Chile lanza programa de becas para estudiantes vulnerables",
    bajada: "El nuevo fondo beneficiará a más de 500 alumnos de primer año con financiamiento completo de aranceles.",
    cuerpo: "La Universidad de Chile anunció este lunes el lanzamiento del Programa de Becas Rector 2026, iniciativa que cubrirá el arancel completo de estudiantes provenientes de los dos quintiles de menor ingreso del país. La medida busca reducir la brecha de acceso a la educación superior y fue respaldada por el Consejo Universitario en sesión extraordinaria.\n\nLos postulantes deberán acreditar situación socioeconómica y mantener un rendimiento académico mínimo de 5,0 durante el primer semestre. Las solicitudes se recibirán hasta el 15 de abril a través del portal institucional.\n\nLa vicerrectora de Asuntos Estudiantiles, Valentina Arroyo, señaló que este programa representa \"un paso concreto hacia una universidad verdaderamente inclusiva\" y adelantó que se evalúa ampliar el beneficio a estudiantes de posgrado durante el segundo semestre del año.",
    categoria: "Nacional",
    autor: "Rodrigo Fuentes Melo",
    fecha: "22 de marzo de 2026",
    imagen: "https://picsum.photos/seed/noticia1/800/450"
  },
  {
    titulo: "Selección chilena de fútbol derrota a Argentina en partido amistoso",
    bajada: "La Roja se impuso por 2 a 1 en el estadio Monumental ante más de 40 mil espectadores.",
    cuerpo: "Chile protagonizó una histórica victoria frente a Argentina en el amistoso internacional disputado anoche en el estadio Monumental de Macul. Los goles de Nico Valdés al minuto 34 y de Bastián Herrera en el descuento sellaron el triunfo para el equipo dirigido por el técnico uruguayo Marcelo Ramos.\n\nEl partido fue parejo durante el primer tiempo, pero la Roja salió con mayor intensidad en el complemento, aprovechando los espacios que dejó la defensa albiceleste. El descuento argentino llegó de penal al minuto 78, lo que generó una recta final de alta tensión.\n\nEl entrenador Ramos valoró el resultado y destacó la actitud del equipo: \"Jugamos con convicción y eso se notó en la cancha\". Chile enfrentará a Uruguay el próximo martes en Montevideo como parte de la preparación para la Copa América 2027.",
    categoria: "Deportes",
    autor: "Camila Rodríguez Pinto",
    fecha: "22 de marzo de 2026",
    imagen: "https://picsum.photos/seed/noticia2/800/450"
  },
  {
    titulo: "Festival de cine independiente reunirá a cineastas de doce países en Valparaíso",
    bajada: "La décima edición del FICValpo se realizará entre el 28 de marzo y el 4 de abril con entrada liberada.",
    cuerpo: "El Festival Internacional de Cine Independiente de Valparaíso confirmó su programación oficial para esta décima edición, que incluirá más de 80 películas provenientes de doce países de América Latina y Europa. La inauguración se realizará en el Teatro Municipal del puerto con la proyección del largometraje chileno \"Tierra adentro\", del director Diego Montecinos.\n\nEntre los invitados internacionales destacan la cineasta colombiana Paula Restrepo y el documentalista español Héctor Mir, quienes participarán en conversatorios abiertos al público durante el fin de semana. La organización habilitó además talleres gratuitos de guion y edición dirigidos a estudiantes de cine y comunicaciones.\n\nEl director del festival, Ernesto Leal, subrayó que el objetivo es \"democratizar el acceso a la cultura cinematográfica\" y confirmó que todas las funciones serán con entrada liberada previa inscripción en el sitio oficial del evento.",
    categoria: "Cultura",
    autor: "Isidora Vega Campos",
    fecha: "22 de marzo de 2026",
    imagen: "https://picsum.photos/seed/noticia3/800/450"
  },
  {
    titulo: "Unión Europea aprueba nuevo acuerdo climático con metas al año 2035",
    bajada: "El pacto obliga a los estados miembros a reducir en un 65% sus emisiones de carbono en menos de una década.",
    cuerpo: "El Parlamento Europeo aprobó este jueves por amplia mayoría el Pacto Climático Reforzado 2035, considerado el compromiso ambiental más ambicioso de la historia de la Unión Europea. El acuerdo establece metas vinculantes de reducción de emisiones para cada país miembro y crea un fondo de 200 mil millones de euros destinado a financiar la transición energética.\n\nLa medida fue impulsada por los bloques progresistas y verdes del parlamento, y contó con el respaldo inesperado de varios representantes de centroderecha que hasta hace meses se oponían a las cuotas obligatorias. Alemania y Francia fueron los países más activos en la negociación final del texto.\n\nOrganizaciones ambientales celebraron el acuerdo, aunque advirtieron que su éxito dependerá de los mecanismos de fiscalización. \"Las metas sin control son solo papel\", señaló Lena Hoffmann, coordinadora de Greenpeace Europa, en declaraciones a la prensa tras conocerse el resultado de la votación.",
    categoria: "Internacional",
    autor: "Felipe Araya Soto",
    fecha: "22 de marzo de 2026",
    imagen: "https://picsum.photos/seed/noticia4/800/450"
  },
  {
    titulo: "Investigadores chilenos desarrollan vacuna experimental contra el virus hanta",
    bajada: "El equipo de la Universidad Austral logró resultados prometedores en pruebas con modelos animales.",
    cuerpo: "Un equipo de investigadores de la Universidad Austral de Chile anunció avances significativos en el desarrollo de una vacuna experimental contra el virus hanta, enfermedad endémica que afecta principalmente a las regiones de La Araucanía, Los Ríos y Los Lagos. Los ensayos en ratones mostraron una eficacia del 89% en la prevención de la infección tras dos dosis.\n\nEl proyecto, financiado por ANID y el Ministerio de Salud, lleva cuatro años en desarrollo y espera iniciar ensayos clínicos en humanos durante el segundo semestre de 2027, sujeto a la aprobación del Instituto de Salud Pública. La investigadora principal, Dra. Marcela Canales, explicó que la vacuna utiliza una plataforma de ARN mensajero similar a la empleada contra el COVID-19.\n\nEl Ministerio de Salud valoró el avance y anunció que destinará recursos adicionales para acelerar las fases clínicas. Chile registra en promedio 40 casos anuales de hanta, con una tasa de mortalidad cercana al 35%, una de las más altas del mundo para esta patología.",
    categoria: "Nacional",
    autor: "Andrea Muñoz Larrañaga",
    fecha: "22 de marzo de 2026",
    imagen: "https://picsum.photos/seed/noticia5/800/450"
  }
];

// Muestra una noticia secundaria en el hero al hacer clic en su tarjeta
function mostrarEnHero(index) {
  const noticia = noticias[index];

  document.querySelector('.hero-image').src = noticia.imagen;
  document.querySelector('.hero-image').alt = noticia.titulo;
  document.querySelector('.hero-category').textContent = noticia.categoria;
  document.querySelector('.hero-title').textContent = noticia.titulo;
  document.querySelector('.hero-bajada').textContent = noticia.bajada;
  document.querySelector('.hero-meta').textContent =
    'Por ' + noticia.autor + ' \u2014 ' + noticia.fecha;

  const cuerpoEl = document.querySelector('.hero-cuerpo');
  cuerpoEl.innerHTML = noticia.cuerpo
    .split('\n\n')
    .map(function(p) { return '<p>' + p + '</p>'; })
    .join('');

  // Marca la tarjeta activa
  document.querySelectorAll('.news-card').forEach(function(card) {
    card.classList.remove('active');
  });
  document.querySelector('[data-index="' + index + '"]').classList.add('active');

  // Scroll suave al hero
  document.querySelector('.hero-section').scrollIntoView({ behavior: 'smooth' });
}

// Registra el click en cada tarjeta secundaria
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.news-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var index = parseInt(this.getAttribute('data-index'), 10);
      mostrarEnHero(index);
    });
  });
});
