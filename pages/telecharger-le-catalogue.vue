<template>
  <BaseSection
    eyebrow="Catalogue"
    title="Télécharger le catalogue"
    intro="Le catalogue est <strong>disponible sur demande</strong>. Nous vous l’envoyons par email selon votre profil et vos besoins."
  >
    <div class="process-grid">
      <article class="step-card reveal-up">
        <p class="step-card__index">01</p>
        <h3 class="step-card__title">Exprimez votre besoin</h3>
        <p class="step-card__text">Indiquez votre structure, vos <strong>objectifs</strong> et vos <strong>contraintes terrain</strong>.</p>
      </article>
      <article class="step-card reveal-up">
        <p class="step-card__index">02</p>
        <h3 class="step-card__title">Réception du catalogue</h3>
        <p class="step-card__text">Nous vous transmettons une <strong>version ciblée</strong> selon votre profil.</p>
      </article>
      <article class="step-card reveal-up">
        <p class="step-card__index">03</p>
        <h3 class="step-card__title">Proposition d’accompagnement</h3>
        <p class="step-card__text">Nous construisons avec vous une réponse <strong>réaliste et opérationnelle</strong>.</p>
      </article>
    </div>

    <div class="cta-row">
      <BaseButton href="mailto:oneurosens.formation@gmail.com?subject=Demande%20de%20catalogue">Demander le catalogue</BaseButton>
      <BaseButton to="/contact" variant="secondary">Contacter l’équipe</BaseButton>
    </div>
  </BaseSection>
</template>
