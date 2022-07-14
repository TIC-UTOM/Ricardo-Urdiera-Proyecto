import React from 'react';
import '../App.css';
import '../Componente.css';
import '../Ejemplo.css'
import logo from '../imagenes/logo.png';
import menu from '../imagenes/menu.png';

const Condiciones = () => {
    return (
        <div>
            <header id="header">
          <img src={logo} alt="" className="logo"/>

        </header>
      
       
        <div class="barra">
            <h2 ><img src={menu} alt="" className="menu2"/></h2>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="contacto">Contacto</a></li>
                <li><a href="info">Información</a></li>
				<li><a href="Terminos">Politicas de Privacidad</a></li>    
            </ul>         
        </div> 

          <div className="">
            <a href="https://www.facebook.com/Ricardo.urdiera/" className="btn-Noinstagram" ><i className="">Facebook</i></a>
          </div>
          <div>
            <a href="https://www.instagram.com/ricardourdiera.318/" className="btn-instagram" ><i className="">Instagram</i></a>
          </div>
          <main id="blog">
		<div class="contenedor">
			<div class="contenido">
				<h1 className="titulo">Terminos y Condiciones</h1>
				<div class="post">
                <h1 class="titulos">Información general</h1>
					<p>
					Este sitio web es operado por Portafolio Digital. En todo el sitio, los términos “nosotros”, “nos” y 
                    “nuestro” se refieren a UTOM con nombre comercial ofrece este sitio web, incluyendo toda la 
                    información, herramientas y servicios disponibles para ti en este sitio, el usuario, está condicionado 
                    a la aceptación de todos los términos, condiciones, políticas y notificaciones aquí establecidos.

                    Al visitar nuestro sitio y/o comprar algo de nosotros, participas en nuestro “Servicio” y
                     aceptas los siguientes términos y condiciones, 
                     incluidos todos los términos y condiciones adicionales y las políticas a las que se hace 
                     referencia en el presente documento y/o disponible a través de hipervínculos. 
                     Estas Condiciones de Servicio se aplican a todos los usuarios del sitio, incluyendo sin
                     limitación a usuarios que sean navegadores, proveedores, clientes, comerciantes, y/o 
                     colaboradores de contenido.

                    Por favor, lee estos Términos de Servicio cuidadosamente antes de acceder o utilizar 
                    nuestro sitio web. Al acceder o utilizar cualquier parte del sitio, estás aceptando los 
                    Términos de Servicio. Si no estás de acuerdo con todos los términos y condiciones de este 
                    acuerdo, entonces no deberías acceder a la página web o usar cualquiera de los servicios. 
                    Si las Términos de Servicio son considerados una oferta, la aceptación está expresamente 
                    limitada a estos Términos de Servicio.

                    Cualquier función nueva o herramienta que se añadan al portafolio digital, también estarán 
                    sujetas a los Términos de Servicio. Puedes revisar la versión actualizada de los Términos
                     de Servicio, en cualquier momento en esta página. Nos reservamos el derecho de actualizar,
                      cambiar o reemplazar cualquier parte de los Términos de Servicio mediante la publicación 
                      de actualizaciones y/o cambios en nuestro sitio web. Es tu responsabilidad chequear esta 
                      página periódicamente para verificar cambios. Tu uso continuo o el acceso al sitio web 
                      después de la publicación de cualquier cambio constituye la aceptación de dichos cambios.</p>
				</div>
				<div class="post">
					<h1 class="titulos">Sección 1. Términos del portafolio digital</h1>
					<p>
					Al utilizar este sitio, declaras que tienes al menos la mayoría de edad en tu estado o 
                    provincia de residencia, o que tienes la mayoría de edad en tu estado o provincia de 
                    residencia y que nos has dado tu consentimiento para permitir que cualquiera de tus 
                    dependientes menores use este sitio.

                    No puedes usar nuestros productos con ningún propósito ilegal o no autorizado tampoco 
                    puedes, en el uso del Servicio, violar cualquier ley en tu jurisdicción 
                    (incluyendo pero no limitado a las leyes de derecho de autor).

                    No debes transmitir gusanos, virus o cualquier código de naturaleza destructiva.El 
                    incumplimiento o violación de cualquiera de estos Términos darán lugar al cese inmediato 
                    de tus Servicios.</p>
				</div>
				<div class="post">
					<h1 class="titulos">Sección 2. Condiciones generales</h1>
					<p>Nos reservamos el derecho de rechazar la prestación de servicio a cualquier persona, 
                        por cualquier motivo y en cualquier momento.

                    Entiendes que tu contenido (sin incluir la información de tu tarjeta de crédito), 
                    puede ser transferida sin encriptar e involucrar (a) transmisiones a través de varias redes;
                     y (b) cambios para ajustarse o adaptarse a los requisitos técnicos de conexión de redes o 
                     dispositivos. La información de tarjetas de crédito está siempre encriptada durante la 
                     transferencia a través de las redes.

                    Estás de acuerdo con no reproducir, duplicar, copiar, vender, revender o explotar cualquier
                     parte del Servicio, uso del Servicio, o acceso al Servicio o cualquier contacto en el sitio 
                     web a través del cual se presta el servicio, sin el expreso permiso por escrito de nuestra 
                     parte.

                    Los títulos utilizados en este acuerdo se incluyen solo por conveniencia y no limita o 
                    afecta a estos Términos.</p>
				</div>
				<div class="post">
					<h1 class="titulos">Sección 3. Exactitud, exhaustividad y actualidad de la información</h1>
					<p>
					No nos hacemos responsables si la información disponible en este sitio no es exacta, 
                    completa o actual. El material en este sitio es provisto sólo para información general y 
                    no debe confiarse en ella o utilizarse como la única base para la toma de decisiones sin 
                    consultar primeramente, información más precisa, completa u oportuna. Cualquier dependencia
                     en el materia de este sitio es bajo su propio riesgo.

                    Este sitio puede contener cierta información histórica. La información histórica, 
                    no es necesariamente actual y es provista únicamente para tu referencia. Nos reservamos
                     el derecho de modificar los contenidos de este sitio en cualquier momento, pero no tenemos
                      obligación de actualizar cualquier información en nuestro sitio. Aceptas que es tu
                       responsabilidad de monitorear los cambios en nuestro sitio.</p>
				</div>
				<div class="post">
					<h1 class="titulos">Sección 4. Modificaciones al servicio y precios</h1>
					<p>
					Los precios de nuestros productos están sujetos a cambio sin aviso.

                    Nos reservamos el derecho de modificar o discontinuar el Servicio 
                    (o cualquier parte del contenido) en cualquier momento sin aviso previo.

                    No seremos responsables ante ti o alguna tercera parte por cualquier modificación, 
                    cambio de precio, suspensión o discontinuidad del Servicio.</p>
				</div>	
				<div class="post">
					<h1 class="titulos">Sección 5. Exactitud de facturación e información de cuenta</h1>
					<p>
					Nos reservamos el derecho de rechazar cualquier pedido que realice con nosotros. 
                    Podemos, a nuestra discreción, limitar o cancelar las cantidades compradas por persona, 
                    por hogar o por pedido. Estas restricciones pueden incluir pedidos realizados por o bajo 
                    la misma cuenta de cliente, la misma tarjeta de crédito, y/o pedidos que utilizan la misma
                     facturación y/o dirección de envío.

                    Precios pueden variar sin previo aviso debido a factores externos: devaluaciones monetarias,
                     alteraciones drásticas en el tipo de cambio, entre otras.

                    En el caso de que hagamos un cambio o cancelemos una orden, podemos intentar notificarle 
                    poniéndonos en contacto vía correo electrónico y/o dirección de facturación / número de
                     teléfono proporcionado en el momento que se hizo pedido. Nos reservamos el derecho de 
                     limitar o prohibir las órdenes que, a nuestro juicio, parecen ser colocado por los 
                     concesionarios, revendedores o distribuidores.

                    Te comprometes a proporcionar información actual, completa y precisa de la compra y cuenta 
                    utilizada para todas las compras realizadas en nuestra tienda. Te comprometes a actualizar 
                    rápidamente tu cuenta y otra información, incluyendo tu dirección de correo electrónico y
                     números de tarjetas de crédito y fechas de vencimiento, para que podamos completar tus 
                     transacciones y contactarte cuando sea necesario.

                    Para más detalles, por favor revisa nuestra Política de Devoluciones, en la sección 18 de 
                    este documento.</p>
				</div>
                <div class="post">
					<h1 class="titulos">Sección 8 Información personal</h1>
					<p>
					Tu presentación de información personal a través del sitio se rige por nuestra 
                    <a href="Terminos"> Política de Privacidad. </a>Para ver nuestro Aviso de Privacidad.</p>
				</div>	
                <div class="post">
					<h1 class="titulos">Sección 9 Usos prohibidos</h1>
					<p>
					En adición a otras prohibiciones como se establece en los Términos de Servicio, se prohíbe el uso del 
                    sitio o su contenido: (a) para ningún propósito ilegal; (b) para pedirle a otros que realicen o 
                    participen en actos ilícitos; (c) para violar cualquier regulación, reglas, leyes internacionales, 
                    federales, provinciales o estatales, u ordenanzas locales; (d) para infringir o violar el derecho de
                     propiedad intelectual nuestro o de terceras partes; (e) para acosar, abusar, insultar, dañar, difamar,
                      calumniar, desprestigiar, intimidar o discriminar por razones de género, orientación sexual, religión,
                       etnia, raza, edad, nacionalidad o discapacidad; (f) para presentar información falsa o engañosa; (g) 
                       para cargar o transmitir virus o cualquier otro tipo de código malicioso que sea o pueda ser utilizado
                        en cualquier forma que pueda comprometer la funcionalidad o el funcionamiento del Servicio o de 
                        cualquier sitio web relacionado, otros sitios o Internet; (h) para recopilar o rastrear información 
                        personal de otros; (i) para generar spam, phish, pharm, pretext, spider, crawl, or scrape; (j) 
                        para cualquier propósito obsceno o inmoral; o (k) para interferir con o burlar los elementos de 
                        seguridad del Servicio o cualquier sitio web relacionado¿ otros sitios o Internet. Nos reservamos 
                        el derecho de suspender el uso del Servicio o de cualquier sitio web relacionado por violar 
                        cualquiera de los ítems de los usos prohibidos. </p>
                    
				</div>	
                <div class="post">
					<h1 class="titulos">Sección 10 Cambios en los términos de servicio</h1>
					<p>
					Puedes revisar la versión más actualizada de los Términos de Servicio en cualquier 
                    momento en esta página.

                    Nos reservamos el derecho, a nuestra sola discreción, de actualizar, modificar o reemplazar
                     cualquier parte de estas Condiciones del servicio mediante la publicación de las
                      actualizaciones y los cambios en nuestro sitio web. Es tu responsabilidad revisar
                       nuestro sitio web periódicamente para verificar los cambios. El uso continuo de o
                        el acceso a nuestro sitio Web o el Servicio después de la publicación de cualquier
                         cambio en estas Condiciones de servicio implica la aceptación de dichos cambios.</p>
				</div>	
			</div>
		</div>
	</main>
        </div>
    )
}
export default Condiciones;