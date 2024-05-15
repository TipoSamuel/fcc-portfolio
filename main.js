const marqueeHTML = (selector, innerSelector) => {
  // selecciona todos los elementos del DOM que coinciden con el parametro 'selector'
  const elements = document.querySelectorAll(selector)

  // itera sobre cada elemento del DOM seleccionado
  elements.forEach((element) => {
    // establece un atributo personalizado en verdadero para cada elemento
    element.setAttribute('data-animated', true)

    // dentro de cada elemento del DOM seleccionado busca cualquier hijo que coincida con el parametro 'innerSelector'
    const innerElement = element.querySelector(innerSelector)

    // toma todos los elementos hijos dentro de 'innetSelector' y los convierte en un arreglo
    const content = Array.from(innerElement.children)

    // itera sobre cada elemento del array
    content.forEach((item) => {
      // clona cada elemento del array
      const duplicateItem = item.cloneNode(true)

      // establece el atributo 'aria-hidden' a cada nuevo elemento clonado
      // esto se hace para indicar a las tecnologías de asistencia que este elemento está oculto visualmente
      duplicateItem.setAttribute('aria-hidden', true)

      // agrega el elemento clonado al final del elemento 'innerElement' duplicando su contenido
      innerElement.appendChild(duplicateItem)
    })
  })
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  marqueeHTML('.scroller', '.scroller-inner')
  marqueeHTML('.marquee', '.marquee-inner')
}
