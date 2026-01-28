import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import styles from "./Screen.module.css";

const texts = {
  title: "Pantalla Quebrada? Cotización GRATIS a través de WhatsApp",
  subtitle:
    "Descubra si necesita reemplazar la pantalla o si hay una opción dereparación más económica, sin salir de casa.",

  steps: ["📸 Envíe foto", "🔍 Técnico analista", "💰 Reciba cotización"],
};
const Screen = () => {
  return (
    <div class={styles.lp_wrapper}>
      <Hero props={texts} />
    </div>
    // <div class="lp-wrapper">
    // 	{/* <!-- HERO OPTIMIZADO --> */}

    // 	{/* <!-- PRICING SECTION --> */}
    // 	<section class="lp-section">
    // 		<h2>🔍 Consertar uma tela de notebook fica caro?</h2>
    // 		<p class="lp-section-intro">
    // 			<strong>Boa notícia:</strong> Nem sempre precisa trocar toda a tela!
    // 			Veja como identificar:
    // 		</p>

    // 		<div class="lp-diagnosis-grid">
    // 			<div class="lp-diagnosis-card bad">
    // 				<h3>❌ Precisa trocar a tela</h3>
    // 				<ul class="lp-diagnosis-list">
    // 					<li>Vidro rachado ou trincado</li>
    // 					<li>Mancha tipo "vazamento de tinta"</li>
    // 					<li>Riscos profundos no painel</li>
    // 					<li>Área preta após impacto</li>
    // 				</ul>
    // 				<div class="lp-diagnosis-solution">
    // 					<strong class="font-size: 1.2rem; color: #d32f2f"
    // 						>💰 Custo: R$ 350 a R$ 1.200</strong
    // 					><br />
    // 					<small class="color: #666; font-size: 0.9rem"
    // 						>(varia conforme modelo)</small
    // 					>
    // 				</div>
    // 			</div>

    // 			<div class="lp-diagnosis-card good">
    // 				<h3>✅ Pode ter conserto mais barato</h3>
    // 				<ul class="lp-diagnosis-list">
    // 					<li>Linhas verticais ou horizontais</li>
    // 					<li>Tela preta mas notebook liga</li>
    // 					<li>Brilho muito baixo ou nulo</li>
    // 					<li>Imagem pisca ao mover a tampa</li>
    // 					<li>Tela totalmente branca</li>
    // 				</ul>
    // 				<div class="lp-diagnosis-solution">
    // 					<strong class="font-size: 1.2rem; color: #2e7d32"
    // 						>✅ Reparo: Até menos da metade do valor da tela nova!</strong
    // 					>
    // 				</div>
    // 			</div>
    // 		</div>
    // 	</section>

    // 	{/* <!-- AVALIAÇÕES GOOGLE --> */}
    // 	<section class="reviews-section">
    // 		<div class="container">
    // 			<div class="reviews-header">
    // 				<h2>O que nossos clientes dizem</h2>
    // 				<p>
    // 					<span class="stars">★★★★★</span> 4.9 no Google ·
    // 					<a
    // 						href="https://www.google.com/maps/search/?api=1&query=infosquad+brasil"
    // 						target="_blank"
    // 						rel="noreferrer"
    // 					>
    // 						Ver todas as avaliações
    // 					</a>
    // 				</p>
    // 			</div>

    // 			<div class="reviews-grid">
    // 				<div class="review-card">
    // 					<div class="review-stars">★★★★★</div>
    // 					<p class="review-text">
    // 						"Que assistência top! Máquinas mortas que não tiveram solução em
    // 						outros lugares, aqui é a solução. Serviço de ótima qualidade."
    // 					</p>
    // 					<div class="review-author">— GLS TEC</div>
    // 				</div>

    // 				<div class="review-card">
    // 					<div class="review-stars">★★★★★</div>
    // 					<p class="review-text">
    // 						"Ótimo atendimento, muito bons profissionais. Obrigado!"
    // 					</p>
    // 					<div class="review-author">— Walter Rangel</div>
    // 				</div>

    // 				<div class="review-card">
    // 					<div class="review-stars">★★★★★</div>
    // 					<p class="review-text">"Serviço de excelência! 👏🏽👏🏽👏🏽👏🏽"</p>
    // 					<div class="review-author">— Daniel Souza</div>
    // 				</div>
    // 			</div>

    // 			<div class="text-align: center; margin-top: 2rem">
    // 				<a
    // 					href="https://www.google.com/maps/search/?api=1&query=infosquad+brasil"
    // 					target="_blank"
    // 					rel="noreferrer"
    // 					class="btn-google-reviews"
    // 				>
    // 					<svg
    // 						width="18"
    // 						height="18"
    // 						viewBox="0 0 24 24"
    // 						fill="currentColor"
    // 					>
    // 						<path
    // 							d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    // 							fill="#4285F4"
    // 						/>
    // 						<path
    // 							d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    // 							fill="#34A853"
    // 						/>
    // 						<path
    // 							d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    // 							fill="#FBBC05"
    // 						/>
    // 						<path
    // 							d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    // 							fill="#EA4335"
    // 						/>
    // 					</svg>
    // 					Ver mais avaliações no Google
    // 				</a>
    // 			</div>
    // 		</div>
    // 	</section>

    // 	{/* <!-- DIAGNÓSTICO VISUAL --> */}
    // 	<section class="lp-section">
    // 		<div class="lp-visual-grid">
    // 			<div class="lp-benefit-box lp-visual-card-1 margin: 0" >
    // 				<h3>💡 Não sabe qual é seu caso?</h3>
    // 				<p>
    // 					Envie uma foto pelo WhatsApp e nosso técnico identifica em
    // 					minutos:
    // 				</p>
    // 			</div>

    // 			<div class="lp-visual-image text-align: center" >
    // 				<img
    // 					src="../img/tela-notebook-quebrada-linhas-verticais-opt.jpg"
    // 					alt="Tela de notebook com linhas verticais"
    // 					class="lp-content-image"
    // 				/>
    // 			</div>

    // 			<div class="lp-benefit-box lp-visual-card-2 margin: 0" >
    // 				<ul
    // 					class="
    // 						margin: 0 0 1rem 1.2rem;
    // 						padding: 0;
    // 						color: #fff;
    // 						line-height: 1.6;
    // 						list-class: disc;
    // 					"
    // 				>
    // 					<li>Tipo de dano (painel, cabo ou placa)</li>
    // 					<li>Se precisa trocar ou tem reparo</li>
    // 					<li>Estimativa de valor antes de trazer</li>
    // 					<li>Prazo aproximado do serviço</li>
    // 				</ul>
    // 				<p class="margin-bottom: 1rem">100% grátis e sem compromisso.</p>
    // 				<a
    // 					class="lp-cta-light"
    // 					href="https://wa.me/5521976724708?text=Oi!%20Tenho%20um%20problema%20na%20tela%20do%20meu%20notebook%20e%20quero%20enviar%20uma%20foto%20para%20orçamento%20grátis%20📷"
    // 					target="_blank"
    // 					rel="noreferrer"
    // 				>
    // 					Enviar foto agora →
    // 				</a>
    // 			</div>
    // 		</div>
    // 	</section>

    // 	{/* <!-- Teste em casa --> */}
    // 	<section class="lp-section">
    // 		<h2>🧪 Teste rápido que você pode fazer agora</h2>
    // 		<div class="lp-content-row">
    // 			<div class="text-align: center">
    // 				<img
    // 					src="../img/substituicao-painel-lcd-notebook-opt.jpg"
    // 					alt="Teste com monitor externo"
    // 					class="lp-content-image"
    // 				/>
    // 			</div>
    // 			<div>
    // 				<p class="margin-bottom: 1rem">
    // 					<strong>Conecte um monitor externo via HDMI:</strong>
    // 				</p>
    // 				<ul class="lp-diagnosis-list margin-bottom: 1rem" >
    // 					<li>
    // 						<strong>Monitor funciona normal?</strong> → Problema na tela ou
    // 						cabo FLAT
    // 					</li>
    // 					<li>
    // 						<strong>Monitor com mesmo defeito?</strong> → Pode ser a placa
    // 						de vídeo (também consertamos!)
    // 					</li>
    // 				</ul>
    // 				<p class="margin-bottom: 1rem">
    // 					<strong>Mova a tampa devagar:</strong>
    // 				</p>
    // 				<ul class="lp-diagnosis-list">
    // 					<li>
    // 						<strong>Imagem muda ou pisca?</strong> → Provavelmente cabo FLAT
    // 						(conserto barato!)
    // 					</li>
    // 				</ul>
    // 				<p
    // 					class="
    // 						margin-top: 1rem;
    // 						color: var(--lp-muted);
    // 						font-size: 0.9rem;
    // 					"
    // 				>
    // 					Somos especialistas em reparações eletrônicas de notebooks e
    // 					MacBooks há 20 anos.
    // 				</p>
    // 			</div>
    // 		</div>
    // 	</section>

    // 	{/* <!-- FAQ Reducido --> */}
    // 	<section class="lp-section">
    // 		<h2>❓ Dúvidas frequentes</h2>

    // 		<div class="lp-faq-item">
    // 			<div class="lp-faq-q">Cobram pelo orçamento?</div>
    // 			<div class="lp-faq-a">
    // 				<strong>NÃO.</strong> O orçamento pelo WhatsApp é 100% grátis e sem
    // 				compromisso.
    // 			</div>
    // 		</div>

    // 		<div class="lp-faq-item">
    // 			<div class="lp-faq-q">Quanto tempo demora o conserto?</div>
    // 			<div class="lp-faq-a">
    // 				Temos diversos painéis em estoque. Muitos reparos são feitos no
    // 				mesmo dia ou em 24-48h.
    // 			</div>
    // 		</div>

    // 		<div class="lp-faq-item">
    // 			<div class="lp-faq-q">Vocês dão garantia?</div>
    // 			<div class="lp-faq-a">
    // 				<strong>Sim!</strong> Garantia de até 1 ano em todas as trocas de
    // 				display com peças originais.
    // 			</div>
    // 		</div>

    // 		<div class="lp-faq-item">
    // 			<div class="lp-faq-q">E se o problema for na placa de vídeo?</div>
    // 			<div class="lp-faq-a">
    // 				Também resolvemos! Somos especialistas em reparações eletrônicas de
    // 				placas-mãe.
    // 			</div>
    // 		</div>
    // 	</section>

    // 	{/* <!-- CTA Final --> */}
    // 	<section class="lp-final-cta">
    // 		<h2>🚀 Resolva seu problema hoje</h2>
    // 		<p>Envie foto + modelo do notebook. Resposta em minutos.</p>
    // 		<a
    // 			class="lp-cta-light"
    // 			href="https://wa.me/5521976724708?text=Oi!%20Tenho%20um%20problema%20na%20tela%20do%20meu%20notebook%20e%20quero%20enviar%20uma%20foto%20para%20orçamento%20grátis%20📷"
    // 			target="_blank"
    // 			rel="noreferrer"
    // 		>
    // 			Falar com técnico agora →
    // 		</a>
    // 	</section>

    // 	{/* <!-- Links a otros servicios --> */}
    // 	<p
    // 		class="
    // 			text-align: center;
    // 			margin-top: 1.5rem;
    // 			color: var(--lp-muted);
    // 			font-size: 0.9rem;
    // 		"
    // 	>
    // 		Outros serviços:
    // 		<a href="../teclado-notebook.html" class="lp-link">Teclado</a> ·
    // 		<a href="../dobradicas.html" class="lp-link">Dobradiças</a> ·
    // 		<a href="../../reparo-placa-mae/notebook-nao-liga.html" class="lp-link"
    // 			>Notebook não liga</a
    // 		>
    // 	</p>
    // </div>
  );
};

export default Screen;
