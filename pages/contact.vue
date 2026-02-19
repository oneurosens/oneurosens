<template>
  <BaseSection
    eyebrow="Contact"
    title="Parlons de votre besoin"
    intro="Contactez-nous pour obtenir des informations sur les formations, les accompagnements et les modalités de prise en charge."
  >
    <div class="contact-grid">
      <article class="contact-card reveal-up">
        <h3>Échange rapide</h3>
        <p><strong>Email :</strong> <a href="mailto:oneurosens.formation@gmail.com">oneurosens.formation@gmail.com</a></p>
        <p><strong>Téléphone :</strong> 06 90 48 21 99 / 06 90 67 88 63</p>
      </article>

      <article class="contact-card reveal-up">
        <h3>Adresse</h3>
        <p><strong>Lieu :</strong> 1315 route de cocoyer</p>
        <p><strong>Ville :</strong> 97190 Le Gosier</p>
        <p><strong>Territoire :</strong> Guadeloupe</p>
      </article>
    </div>

    <div class="cta-row">
      <BaseButton href="mailto:oneurosens.formation@gmail.com?subject=Demande%20d%27informations">Envoyer un email</BaseButton>
      <BaseButton to="/telecharger-le-catalogue" variant="secondary">Demander le catalogue</BaseButton>
    </div>
  </BaseSection>
</template>
