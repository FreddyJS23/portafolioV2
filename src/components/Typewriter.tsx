import Typewriter from "typewriter-effect";

export const TypewriterComponent = () => {
  let code = `
    let gradoConSeccionesInactiva = [];<br><br>
    
    for (let i = 0; i &lt; grados.length; i++) {<br>
      let gradoConSeccionActiva = false;<br><br>
    
      for (let j = 0; j &lt; seccionesActivas.length; j++) {<br><br>
    
        if (grados[i]['id_grado'] == seccionesActivas[j]['id_grado'])<br>
          gradoConSeccionActiva = true;<br>
      }<br>
      if (!gradoConSeccionActiva) 
      gradoConSeccionesInactiva.push(grados[i]);
    }<br>
    let html = ' &lt; option value=""&gt; &lt;/option&gt;'<br>
    gradoConSeccionesInactiva.<br>forEach(gradoConSeccionesInactiva => {<br><br>
    
    html += '&lt; option value="&lt;/option&gt;'<br>
      gradoConSeccionInactiva.innerHTML = html<br>
    }); `;

  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(code).pauseFor(1000).start();
      }}
      options={{
        autoStart: true,
        loop: true,
        delay: 30,
        wrapperClassName: "absolute text-secondary/90 select-none", 
        
      }}
    />
  );
};
