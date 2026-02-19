<template>
  <BaseSection
    eyebrow="Témoignages"
    title="Retours de terrain"
    intro="Quelques retours issus des accompagnements menés auprès des professionnelles de la petite enfance."
  >
    <article class="testimonial-highlight">
      <p class="testimonial-highlight__quote">
        « J’ai pris conscience de la nécessité de se connaître, de prendre du recul, d’analyser et de se donner des objectifs. »
      </p>
      <p class="testimonial-highlight__author">Direction d’établissement, Basse-Terre</p>
    </article>

    <div class="cards-grid cards-grid--2">
      <BaseCard
        class="reveal-up"
        title="Direction de crèche"
        text="« Il fait bon d’avoir des professionnelles comme vous à nos côtés. »"
      />
      <BaseCard
        class="reveal-up"
        title="Auxiliaire de puériculture"
        text="« Tout était bien et très ludique, j’ai beaucoup apprécié. »"
      />
      <BaseCard
        class="reveal-up"
        title="Direction d’établissement"
        text="« J’ai pris conscience de la nécessité de se connaître, de prendre du recul et d’analyser. »"
      />
    </div>
    <div class="cta-row">
      <BaseButton to="/contact">Nous contacter</BaseButton>
      <BaseButton to="/formations" variant="secondary">Voir les formations</BaseButton>
    </div>
  </BaseSection>
</template>
